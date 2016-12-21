using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using Vta.ApiApp.Models;
using Vta.Models;

namespace Vta.ApiApp.Filters
{
    public class CommandFilter : ActionFilterAttribute
    {
        private string key;

        public CommandFilter(string key)
        {
            this.key = key;
        }

        [AcceptVerbs("POST")]
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            ApplicationUser user = FilterHelper.GetApplicationUser(actionContext) ?? new ApplicationUser();
            bool isEntity = actionContext.ActionArguments.Values.First() is Entity;
            if (isEntity)
            {                
                var entity = actionContext.ActionArguments[key] as Entity;
                if (entity != null)
                {
                    entity.CreatedBy = user.Id;
                    entity.ModifiedBy = user.Id;
                    entity.Created=DateTime.Now;
                    entity.Modified=DateTime.Now;
                }
            }
            base.OnActionExecuting(actionContext);
        }
    }
}