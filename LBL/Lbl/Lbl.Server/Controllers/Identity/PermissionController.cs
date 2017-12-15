using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Lbl.Server.Models;

namespace Lbl.Server.Controllers.Identity
{
    public class PermissionController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // PUT: api/Permission/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAspNetPermission(string id, AspNetPermission aspNetPermission)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aspNetPermission.Id)
            {
                return BadRequest();
            }

            db.Entry(aspNetPermission).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AspNetPermissionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Permission
        [ResponseType(typeof(AspNetPermission))]
        public IHttpActionResult PostAspNetPermission(AspNetPermission aspNetPermission)
        {
            aspNetPermission.Id = Guid.NewGuid().ToString();
            aspNetPermission.CreatedBy = User.Identity.Name;
            aspNetPermission.ModifiedBy = User.Identity.Name;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AspNetPermissions.Add(aspNetPermission);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (AspNetPermissionExists(aspNetPermission.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        // DELETE: api/Permission/5
        [ResponseType(typeof(AspNetPermission))]
        public IHttpActionResult DeleteAspNetPermission(string id)
        {
            AspNetPermission aspNetPermission = db.AspNetPermissions.Find(id);
            if (aspNetPermission == null)
            {
                return NotFound();
            }

            db.AspNetPermissions.Remove(aspNetPermission);
            db.SaveChanges();

            return Ok(aspNetPermission);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AspNetPermissionExists(string id)
        {
            return db.AspNetPermissions.Count(e => e.Id == id) > 0;
        }
    }
}