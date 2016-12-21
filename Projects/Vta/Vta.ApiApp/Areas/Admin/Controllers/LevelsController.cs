using System;
using System.Data.Entity;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Vta.Models;
using Vta.RequestModels;

namespace Vta.ApiApp.Areas.Admin.Controllers
{
    public class LevelsController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Levels
        public async Task<ActionResult> Index(string courseId, string keyword = "", string orderBy = "", string isAscending = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, null, null, keyword, orderBy, isAscending);
            c.SetViewBagValues(ViewBag);

            // fetch data
            var queryable = db.Levels.ByCourse(courseId);
            var requestModel = new LevelRequestModel(keyword, orderBy, isAscending);
            var list = await requestModel.GetOrderedData(queryable).ToListAsync();
            return View(list);
        }


        // GET: Levels/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Level level = await db.Levels.FindAsync(id);
            if (level == null)
            {
                return HttpNotFound();
            }
            return View(level);
        }

        // GET: Levels/Create
        public ActionResult Create()
        {
            ViewBag.CourseId = new SelectList(db.Courses, "Id", "Name");
            var model = new Level()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };

            return View(model);            
        }

        // POST: Levels/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]      
        public async Task<ActionResult> Create(Level level)
        {
            if (ModelState.IsValid)
            {
                level.Id = Guid.NewGuid().ToString();
                db.Levels.Add(level);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CourseId = new SelectList(db.Courses, "Id", "Name", level.CourseId);
            return View(level);
        }

        // GET: Levels/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Level level = await db.Levels.FindAsync(id);
            if (level == null)
            {
                return HttpNotFound();
            }
            ViewBag.CourseId = new SelectList(db.Courses, "Id", "Name", level.CourseId);
            return View(level);
        }

        // POST: Levels/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(Level level)
        {
            if (ModelState.IsValid)
            {
                db.Entry(level).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CourseId = new SelectList(db.Courses, "Id", "Name", level.CourseId);
            return View(level);
        }

        // GET: Levels/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Level level = await db.Levels.FindAsync(id);
            if (level == null)
            {
                return HttpNotFound();
            }
            return View(level);
        }

        // POST: Levels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            Level level = await db.Levels.FindAsync(id);
            db.Levels.Remove(level);
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
