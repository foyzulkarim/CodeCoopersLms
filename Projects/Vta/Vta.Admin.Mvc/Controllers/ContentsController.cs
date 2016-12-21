using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Vta.Models;
using Vta.RequestModels;
using Vta.ViewModels;

namespace Vta.Admin.Mvc.Controllers
{
    public class ContentsController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Contents
        public async Task<ActionResult> Index(string courseId, string levelId, string keyword = "", string orderBy = "", string isAscending = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, null, keyword, orderBy, isAscending);
            ViewBag.CourseId = c.CoursesSelectList;
            ViewBag.LevelId = c.LevelsSelectList;
            ViewBag.OrderBy = c.OrderBySelectList;
            ViewBag.IsAscending = c.IsAscendingSelectList;
            ViewBag.Keyword = c.Keyword;

            var queryable = db.Contents.ByCourse(courseId).ByLevel(levelId);
            var requestModel = new ContentRequestModel(keyword, orderBy, isAscending);
            var list = await requestModel.GetOrderedData(queryable).Include(x => x.Level).ToListAsync();
            return View(list);
        }

        // GET: Contents/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Content content = await db.Contents.FindAsync(id);
            if (content == null)
            {
                return HttpNotFound();
            }
            return View(content);
        }

        // GET: Contents/Create
        public ActionResult Create(string courseId = "", string levelId = "")
        {
            var defaultItem = new { Id = new Guid().ToString(), Name = "All" };

            // filter preparation
            var courses = db.Courses.Select(x => new { x.Id, x.Name }).ToList();
            courses.Insert(0, defaultItem);
            if (string.IsNullOrWhiteSpace(courseId))
            {
                courseId = defaultItem.Id;
            }

            var levels = db.Levels.FilterBy(courseId, x => x.CourseId == courseId).Select(x => new { x.Id, x.Name }).ToList();
            levels.Insert(0, defaultItem);
            if (string.IsNullOrWhiteSpace(levelId))
            {
                levelId = defaultItem.Id;
            }

            ViewBag.CourseId = new SelectList(courses, "Id", "Name", courseId);
            ViewBag.LevelId = new SelectList(levels, "Id", "Name", levelId);

            Content c = new Content()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };
            return View(c);
        }

        // POST: Contents/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Content content)
        {
            if (ModelState.IsValid)
            {
                content.Id = Guid.NewGuid().ToString();
                db.Contents.Add(content);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.LevelId = new SelectList(db.Levels, "Id", "Name", content.LevelId);
            return View(content);
        }

        // GET: Contents/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Content content = await db.Contents.FindAsync(id);
            if (content == null)
            {
                return HttpNotFound();
            }
            ViewBag.LevelId = new SelectList(db.Levels, "Id", "Name", content.LevelId);
            return View(content);
        }

        // POST: Contents/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,Type,LevelId,No,Point,Tags,Created,CreatedBy,Modified,ModifiedBy")] Content content)
        {
            if (ModelState.IsValid)
            {
                db.Entry(content).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.LevelId = new SelectList(db.Levels, "Id", "Name", content.LevelId);
            return View(content);
        }

        // GET: Contents/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Content content = await db.Contents.FindAsync(id);
            if (content == null)
            {
                return HttpNotFound();
            }
            return View(content);
        }

        // POST: Contents/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            Content content = await db.Contents.FindAsync(id);
            db.Contents.Remove(content);
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