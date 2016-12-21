using System;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Http.Controllers;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin;
using AuthorizeAttribute = System.Web.Http.AuthorizeAttribute;

namespace Vta.ApiApp.Filters
{
    public class CustomAuthzFilter : AuthorizeAttribute
    {
        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var baseIsAuthorized = base.IsAuthorized(actionContext);
            //return baseIsAuthorized;
            var headers = actionContext.Request.Headers;
            var keyValuePairs = headers.ToList();
            var any = keyValuePairs.Any(x => x.Key == "MyToken");
            if (baseIsAuthorized && any)
            {
                var list = keyValuePairs.Find(x => x.Key == "MyToken").Value.ToList();
                if (list.Count > 1)
                {
                    return false;
                }
                var user = FilterHelper.GetApplicationUser(actionContext);
                var b = user.ApplicationToken == list[0];
                return b;
            }
            return false;
        }
    }

    public class SignalrAuthZFilter : Attribute, IAuthorizeHubConnection
    {
        public bool AuthorizeHubConnection(HubDescriptor hubDescriptor, IRequest request)
        {
            var x = request;
            string ticket = request.Cookies[".AspNet.Cookies"].Value;
            if (!string.IsNullOrWhiteSpace(ticket))
            {
                IOwinContext owinContext = request.GetHttpContext().GetOwinContext();
                ClaimsPrincipal claimsPrincipal = owinContext.Authentication.User;

                // Create the IIdentity instance
                // IIdentity id = new FormsIdentity(decrypt);

                // Create the IPrinciple instance
                //  IPrincipal principal = new GenericPrincipal(id, roles);

                // Set the context user 
                //  request.GetHttpContext().GetOwinContext().Request.User = principal;
            }
            return true;
        }
    }
}