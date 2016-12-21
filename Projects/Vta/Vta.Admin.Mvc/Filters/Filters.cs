using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using Microsoft.AspNet.Identity.Owin;
using Vta.Admin.Mvc.Models;
using Vta.Models;

namespace Vta.Admin.Mvc.Filters
{
    //public class PostCommandFilter : ActionFilterAttribute
    //{
    //    private string key;

    //    public PostCommandFilter(string key)
    //    {
    //        this.key = key;
    //    }
        
    //    [AcceptVerbs("POST","PUT")]
    //    public override void OnActionExecuting(ActionExecutingContext actionContext)
    //    {
    //        ApplicationUser user = GetApplicationUser(actionContext) ?? new ApplicationUser();
    //        bool isEntity = actionContext.ActionParameters.Values.First() is Entity;
    //        if (isEntity)
    //        {
    //            var entity = actionContext.ActionParameters[key] as Entity;
    //            if (entity != null)
    //            {
    //                if (entity.Id==new Guid().ToString())
    //                {
    //                    entity.CreatedBy = user.Id;
    //                    entity.Created = DateTime.Now;
    //                }

    //                entity.ModifiedBy = user.Id;
    //                entity.Modified = DateTime.Now;
    //            }
    //        }
    //        base.OnActionExecuting(actionContext);
    //    }

    //    private static ApplicationUser GetApplicationUser(ActionExecutingContext actionContext)
    //    {
    //        var username = actionContext.RequestContext.HttpContext.User.Identity.Name;
    //        var owinContext = HttpContext.Current.GetOwinContext();
    //        var dbContext = owinContext.GetUserManager<ApplicationDbContext>();
    //        return dbContext.Users.FirstOrDefault(x => x.UserName == username);
    //    }
    //} 
}
