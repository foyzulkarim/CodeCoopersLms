using Lbl.Server.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Lbl.Server.Controllers.Identity
{
    [RoutePrefix("api/UserRole")]
    public class UserRoleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Add(UserRoleBindingModel model)
        {
            try
            {
                var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
                var roleManager = new RoleManager<ApplicationRole>(new RoleStore<ApplicationRole>(db));

                var role = roleManager.FindById(model.RoleId);

                if(role == null)
                {
                    return BadRequest("Role does not exists");
                }

                if(userManager.IsInRole(model.UserId, role.Name))
                {
                    return BadRequest("User already assigned to this role");
                }

                userManager.AddToRole(model.UserId, role.Name);

                return Ok();
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);

            }
        }
    }
}
