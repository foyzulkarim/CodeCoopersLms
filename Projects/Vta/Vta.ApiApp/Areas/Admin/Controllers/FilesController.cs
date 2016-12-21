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

namespace Vta.ApiApp.Areas.Admin.Controllers
{
    public class FilesController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Admin/Files
        public async Task<ActionResult> Index(string courseId, string levelId, string contentId, string keyword = "", string orderBy = "", string isAscending = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, contentId, keyword, orderBy, isAscending);
            c.SetViewBagValues(ViewBag);
            var dbSet = db.Files;
            var queryable = dbSet.ByCourse(c.CourseId).ByLevel(c.LevelId).ByContent(c.ContentId);
            var requestModel = new FileRequestModel(keyword, orderBy, isAscending);
            var list = await requestModel.GetOrderedData(queryable).Include(x => x.Content).ToListAsync();
            return View(list);           
        }

        // GET: Admin/Files/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            File file = await db.Files.FindAsync(id);
            if (file == null)
            {
                return HttpNotFound();
            }
            return View(file);
        }

        // GET: Admin/Files/Create
        public ActionResult Create(string courseId = "", string levelId = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, null, null);
            c.SetViewBagValues(ViewBag);

            var model = new File()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };
            return View(model);
        }

        // POST: Admin/Files/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(File file)
        {
            file.Id = Guid.NewGuid().ToString();
            
            if (ModelState.IsValid)
            {
                try
                {
                    db.Files.Add(file);
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
                catch (Exception e)
                {
                    throw e;
                }
            }

            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", file.ContentId);
            return View(file);
        }

        // GET: Admin/Files/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            File file = await db.Files.FindAsync(id);
            if (file == null)
            {
                return HttpNotFound();
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", file.ContentId);
            return View(file);
        }

        // POST: Admin/Files/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,ContentId,Name,Description,SourceUrl,Length,Size,TotalViews,Complexity,SerialNo,IsActive,Tags,Type,Created,CreatedBy,Modified,ModifiedBy")] File file)
        {
            if (ModelState.IsValid)
            {
                db.Entry(file).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", file.ContentId);
            return View(file);
        }

        // GET: Admin/Files/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            File file = await db.Files.FindAsync(id);
            if (file == null)
            {
                return HttpNotFound();
            }
            return View(file);
        }

        // POST: Admin/Files/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            File file = await db.Files.FindAsync(id);
            db.Files.Remove(file);
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
