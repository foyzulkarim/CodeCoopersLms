using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.WebPages;
using Vta.Permission;

namespace Vta.ApiApp.Controllers
{
    public class PermissionController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(PermissionRequest p)
        {
            return Ok();
            if (p == null)
            {
                return BadRequest("Param is null");
            }

            var manager = new PermissionManager(new PermissionDbContext());
            var resourceName = p.Name;
            if (resourceName.IsEmpty())
            {
                return BadRequest("Resource name can not be null");
            }
            var resource = manager.GetResourceDetail(resourceName);
            if (resource == null)
            {
                return BadRequest("No resource found");
            }
            if (resource.IsPublic)
            {
                return Ok();
            }
            if (!User.Identity.IsAuthenticated)
            {
                return new StatusCodeResult(HttpStatusCode.Unauthorized, Request);
            }

            var permissions = resource.Permissions.ToList();
            var isAllowed = permissions.Any(x => User.IsInRole(x.RoleName) && x.IsAllowed);
            return isAllowed ? (IHttpActionResult) Ok() : new StatusCodeResult(HttpStatusCode.Forbidden, Request);
        }
    }
}