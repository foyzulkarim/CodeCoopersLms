using System;
using System.Data.Entity;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Vta.Models;
using Vta.RequestModels;

namespace Vta.ApiApp.Areas.Admin.Controllers
{
    public class QuestionsController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Questions
        public async Task<ActionResult> Index(string courseId, string levelId, string contentId, string keyword = "", string orderBy = "", string isAscending = "")
        {
            ControllerHelper c=new ControllerHelper(courseId,levelId,contentId,keyword,orderBy,isAscending);
            c.SetViewBagValues(ViewBag);
            var dbSet = db.Questions;
            var queryable = dbSet.ByCourse(c.CourseId).ByLevel(c.LevelId).ByContent(c.ContentId);
            var requestModel = new QuestionRequestModel(keyword,orderBy, isAscending);            
            var list = await requestModel.GetOrderedData(queryable).Include(x => x.Content).ToListAsync();
            return View(list);
        }

        // GET: Questions/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = await db.Questions.FindAsync(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        // GET: Questions/Create
        public ActionResult Create(string courseId = "", string levelId = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, null,null);             
           c.SetViewBagValues(ViewBag);

            var model = new Question()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };
            return View(model);
        }

        // POST: Questions/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Question question)
        {
            if (ModelState.IsValid)
            {
                question.Id = Guid.NewGuid().ToString();
                db.Questions.Add(question);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", question.ContentId);
            return View(question);
        }

        // GET: Questions/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = await db.Questions.FindAsync(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", question.ContentId);
            return View(question);
        }

        // POST: Questions/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,Description,ContentId,SerialNo,IsActive,Created,CreatedBy,Modified,ModifiedBy")] Question question)
        {
            if (ModelState.IsValid)
            {
                db.Entry(question).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", question.ContentId);
            return View(question);
        }

        // GET: Questions/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Question question = await db.Questions.FindAsync(id);
            if (question == null)
            {
                return HttpNotFound();
            }
            return View(question);
        }

        // POST: Questions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            Question question = await db.Questions.FindAsync(id);
            db.Questions.Remove(question);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
