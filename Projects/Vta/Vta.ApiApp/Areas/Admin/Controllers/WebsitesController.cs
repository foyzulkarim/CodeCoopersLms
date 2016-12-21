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
    public class WebsitesController : Controller
    {
        private VtaDbContext db = new VtaDbContext();

        // GET: Admin/Websites
        public async Task<ActionResult> Index(string courseId, string levelId, string contentId, string keyword = "", string orderBy = "", string isAscending = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, contentId, keyword, orderBy, isAscending);
            c.SetViewBagValues(ViewBag);
            var dbSet = db.Websites;
            var queryable = dbSet.ByCourse(c.CourseId).ByLevel(c.LevelId).ByContent(c.ContentId);
            var requestModel = new WebsiteRequestModel(keyword, orderBy, isAscending);
            var list = await requestModel.GetOrderedData(queryable).Include(x => x.Content).ToListAsync();
            return View(list);
        }

        // GET: Admin/Websites/Details/5
        public async Task<ActionResult> Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Website website = await db.Websites.FindAsync(id);
            if (website == null)
            {
                return HttpNotFound();
            }
            return View(website);
        }

        // GET: Admin/Websites/Create
        public ActionResult Create(string courseId = "", string levelId = "")
        {
            ControllerHelper c = new ControllerHelper(courseId, levelId, null, null);
            c.SetViewBagValues(ViewBag);

            var model = new Website()
            {
                CreatedBy = "703cc0ff-d10e-447a-a012-d2744a28594a",
                Created = DateTime.Now,
                Modified = DateTime.Now,
                ModifiedBy = "703cc0ff-d10e-447a-a012-d2744a28594a"
            };
            return View(model);
        }

        // POST: Admin/Websites/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Website website)
        {
            if (ModelState.IsValid)
            {
                website.Id = Guid.NewGuid().ToString();
                db.Websites.Add(website);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", website.ContentId);
            return View(website);
        }

        // GET: Admin/Websites/Edit/5
        public async Task<ActionResult> Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Website website = await db.Websites.FindAsync(id);
            if (website == null)
            {
                return HttpNotFound();
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", website.ContentId);
            return View(website);
        }

        // POST: Admin/Websites/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,ContentId,Name,Url,Tags,Created,CreatedBy,Modified,ModifiedBy")] Website website)
        {
            if (ModelState.IsValid)
            {
                db.Entry(website).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.ContentId = new SelectList(db.Contents, "Id", "Name", website.ContentId);
            return View(website);
        }

        // GET: Admin/Websites/Delete/5
        public async Task<ActionResult> Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Website website = await db.Websites.FindAsync(id);
            if (website == null)
            {
                return HttpNotFound();
            }
            return View(website);
        }

        // POST: Admin/Websites/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(string id)
        {
            Website website = await db.Websites.FindAsync(id);
            db.Websites.Remove(website);
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
