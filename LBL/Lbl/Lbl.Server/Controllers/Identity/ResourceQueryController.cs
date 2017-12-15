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
using Lbl.ViewModel;

namespace Lbl.Server.Controllers.Identity
{
    [RoutePrefix("api/ResourceQuery")]
    public class ResourceQueryController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [Route("GetSelectList")]
        [ActionName("GetSelectList")]
        public List<SelectViewModel> GetSelectList()
        {
            var list  = db.AspNetResources.Select(r => new SelectViewModel { Id = r.Id, Value = r.Name }).ToList();
            return list;
        }

        // GET: api/ResourceQuery/5
        [ResponseType(typeof(AspNetResource))]
        public IHttpActionResult GetAspNetResource(string id)
        {
            AspNetResource aspNetResource = db.AspNetResources.Find(id);
            if (aspNetResource == null)
            {
                return NotFound();
            }

            return Ok(aspNetResource);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AspNetResourceExists(string id)
        {
            return db.AspNetResources.Count(e => e.Id == id) > 0;
        }
    }
}