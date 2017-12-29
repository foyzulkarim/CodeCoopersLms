using Lbl.Server.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Lbl.Server.Controllers.Identity
{
    public class RoleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public RoleController()
        {

        }

        public async Task<IHttpActionResult> Post(ApplicationRole model)
        {
            try
            {
                var roleManager = new RoleManager<ApplicationRole>(new RoleStore<ApplicationRole>(db));
                model.CreatedBy = User.Identity.Name;
                model.ModifiedBy = User.Identity.Name;
                IdentityResult result = await roleManager.CreateAsync(model);

                if (!result.Succeeded)
                {
                    return GetErrorResult(result);
                }
                return Ok();
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }
    }
}
