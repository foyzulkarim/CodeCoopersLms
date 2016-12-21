using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Vta.Models;
using Vta.RequestModels;

namespace Vta.Admin.Mvc.Controllers
{
    public class OptionsController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Options
        public async Task<ActionResult> Index(string courseId, string levelId, string contentId, string questionId, string keyword = "", string orderBy = "", string isAscending = "", string showOnlyRightAnswers="")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, contentId, keyword, orderBy, isAscending);
            ViewBag.CourseId = c.CoursesSelectList;
            ViewBag.LevelId = c.LevelsSelectList;
            ViewBag.ContentId = c.ContentsSelectList;
            ViewBag.QuestionId = c.QuestionsSelectList;
            ViewBag.OrderBy = c.OrderBySelectList;
            ViewBag.IsAscending = c.IsAscendingSelectList;
            ViewBag.Keyword = keyword;
            var queryable = db.Options.ByCourse(c.CourseId).ByLevel(c.LevelId).ByContent(c.ContentId).ByQuestion(c.QuestionId);
            var requestModel = new OptionRequestModel(keyword, orderBy, isAscending, !string.IsNullOrWhiteSpace(showOnlyRightAnswers));
            var list = await requestModel.GetOrderedData(queryable).Include(x => x.Question).ToListAsync();
            return View(list);
        }

        // GET: Options/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Option option = await db.Options.FindAsync(id);
            if (option == null)
            {
                return HttpNotFound();
            }
            return View(option);
        }

        // GET: Options/Create
        public ActionResult Create(string courseId = "", string levelId = "", string contentId="")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, contentId, null);
            ViewBag.CourseId = c.CoursesSelectList;
            ViewBag.LevelId = c.LevelsSelectList;
            ViewBag.ContentId = c.ContentsSelectList;
            ViewBag.QuestionId = c.QuestionsSelectList;


            var model = new Option()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };
            return View(model);
        }

        // POST: Options/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Option option)
        {
            if (ModelState.IsValid)
            {
                option.Id = Guid.NewGuid().ToString();
                db.Options.Add(option);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.QuestionId = new SelectList(db.Questions, "Id", "Name", option.QuestionId);
            return View(option);
        }

        // GET: Options/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Option option = await db.Options.FindAsync(id);
            if (option == null)
            {
                return HttpNotFound();
            }
            ViewBag.QuestionId = new SelectList(db.Questions, "Id", "Name", option.QuestionId);
            return View(option);
        }

        // POST: Options/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,SerialNo,IsAnswer,QuestionId,Created,CreatedBy,Modified,ModifiedBy")] Option option)
        {
            if (ModelState.IsValid)
            {
                db.Entry(option).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.QuestionId = new SelectList(db.Questions, "Id", "Name", option.QuestionId);
            return View(option);
        }

        // GET: Options/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Option option = await db.Options.FindAsync(id);
            if (option == null)
            {
                return HttpNotFound();
            }
            return View(option);
        }

        // POST: Options/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            Option option = await db.Options.FindAsync(id);
            db.Options.Remove(option);
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
