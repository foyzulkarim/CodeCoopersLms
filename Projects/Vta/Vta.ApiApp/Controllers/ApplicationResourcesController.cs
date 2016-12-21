using System;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.OData;
using Vta.Permission;

namespace Vta.ApiApp.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Vta.Permission;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<ApplicationResource>("ApplicationResources");
    builder.EntitySet<ResourcePermission>("Permissions"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */

    // [CustomAuthzFilter]
    public class ApplicationResourcesController : ODataController
    {
        private readonly PermissionDbContext db = new PermissionDbContext();

        // GET: odata/ApplicationResources
        [EnableQuery]
        public IQueryable<ApplicationResource> GetApplicationResources()
        {
            return db.Resources;
        }

        // GET: odata/ApplicationResources(5)
        [EnableQuery]
        public SingleResult<ApplicationResource> GetApplicationResource([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Resources.Where(applicationResource => applicationResource.Id == key));
        }

        // PUT: odata/ApplicationResources(5)
        public IHttpActionResult Put([FromODataUri] Guid key, Delta<ApplicationResource> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var applicationResource = db.Resources.Find(key);
            if (applicationResource == null)
            {
                return NotFound();
            }

            patch.Put(applicationResource);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationResourceExists(key))
                {
                    return NotFound();
                }
                throw;
            }

            return Updated(applicationResource);
        }

        // POST: odata/ApplicationResources
        public IHttpActionResult Post(ApplicationResource applicationResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Resources.Add(applicationResource);
            db.SaveChanges();

            return Created(applicationResource);
        }

        // PATCH: odata/ApplicationResources(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] Guid key, Delta<ApplicationResource> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var applicationResource = db.Resources.Find(key);
            if (applicationResource == null)
            {
                return NotFound();
            }

            patch.Patch(applicationResource);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationResourceExists(key))
                {
                    return NotFound();
                }
                throw;
            }

            return Updated(applicationResource);
        }

        // DELETE: odata/ApplicationResources(5)
        public IHttpActionResult Delete([FromODataUri] Guid key)
        {
            var applicationResource = db.Resources.Find(key);
            if (applicationResource == null)
            {
                return NotFound();
            }

            db.Resources.Remove(applicationResource);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/ApplicationResources(5)/Permissions
        [EnableQuery]
        public IQueryable<ResourcePermission> GetPermissions([FromODataUri] Guid key)
        {
            return db.Resources.Where(m => m.Id == key).SelectMany(m => m.Permissions);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationResourceExists(Guid key)
        {
            return db.Resources.Count(e => e.Id == key) > 0;
        }
    }
}