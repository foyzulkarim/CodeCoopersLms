using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Vta.Permission;

namespace Vta.Permission.Mvc.Controllers
{
    public class ApplicationResourcesController : Controller
    {
        private PermissionDbContext db = new PermissionDbContext();

        // GET: ApplicationResources
        public async Task<ActionResult> Index()
        {
            return View(await db.Resources.ToListAsync());
        }

        // GET: ApplicationResources/Details/5
        public async Task<ActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationResource applicationResource = await db.Resources.FindAsync(id);
            if (applicationResource == null)
            {
                return HttpNotFound();
            }
            return View(applicationResource);
        }

        // GET: ApplicationResources/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ApplicationResources/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Name,Type,IsPublic")] ApplicationResource applicationResource)
        {
            if (ModelState.IsValid)
            {
                applicationResource.Id = Guid.NewGuid();
                db.Resources.Add(applicationResource);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(applicationResource);
        }

        // GET: ApplicationResources/Edit/5
        public async Task<ActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationResource applicationResource = await db.Resources.FindAsync(id);
            if (applicationResource == null)
            {
                return HttpNotFound();
            }
            return View(applicationResource);
        }

        // POST: ApplicationResources/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,Type,IsPublic")] ApplicationResource applicationResource)
        {
            if (ModelState.IsValid)
            {
                db.Entry(applicationResource).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(applicationResource);
        }

        // GET: ApplicationResources/Delete/5
        public async Task<ActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ApplicationResource applicationResource = await db.Resources.FindAsync(id);
            if (applicationResource == null)
            {
                return HttpNotFound();
            }
            return View(applicationResource);
        }

        // POST: ApplicationResources/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(Guid id)
        {
            ApplicationResource applicationResource = await db.Resources.FindAsync(id);
            db.Resources.Remove(applicationResource);
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
