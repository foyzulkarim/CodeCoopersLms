using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using Microsoft.AspNet.Identity.Owin;
using Vta.ApiApp.Models;

namespace Vta.ApiApp.Filters
{
    public class FilterHelper
    {
        public static ApplicationUser GetApplicationUser(HttpActionContext actionContext)
        {
            var username = actionContext.RequestContext.Principal.Identity.Name;            
            var owinContext = HttpContext.Current.GetOwinContext();
            var dbContext = owinContext.GetUserManager<ApplicationDbContext>();
            return dbContext.Users.FirstOrDefault(x => x.UserName == username);
        }
    }
}