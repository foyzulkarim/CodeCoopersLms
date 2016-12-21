using System.Security.Claims;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Owin;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler;
using Microsoft.Owin.Security.DataProtection;
using Microsoft.Owin.Security.OAuth;
using Vta.ApiApp.Models;


namespace Vta.ApiApp.Providers
{
    public class QueryStringBearerAuthorizeAttribute : AuthorizeAttribute
    {
        private readonly string[] _purpose =
        {
            typeof (OAuthAuthorizationServerMiddleware).Namespace,
            "Access_Token", "v1"
        };

        public override bool AuthorizeHubConnection(HubDescriptor hubDescriptor, IRequest request)
        {
            var authorizeHubConnection = true;
            //bool authorizeHubConnection = base.AuthorizeHubConnection(hubDescriptor, request);
            DpapiDataProtectionProvider dataProtectionProvider = new DpapiDataProtectionProvider();
            IDataProtector protector = dataProtectionProvider.Create("ASP.NET Identity");
            DataProtectorTokenProvider<ApplicationUser> dataProtectorTokenProvider = new DataProtectorTokenProvider<ApplicationUser>(protector);
            IDataProtector dataProtector = dataProtectionProvider.Create(_purpose);
            
            TicketDataFormat secureDataFormat = new TicketDataFormat(dataProtector);
            string token = request.QueryString.Get(OAuthDefaults.AuthenticationType);
            AuthenticationTicket ticket = secureDataFormat.Unprotect(token);
            if (authorizeHubConnection && ticket != null && ticket.Identity != null && ticket.Identity.IsAuthenticated)
            {
                request.Environment["server.User"] = new ClaimsPrincipal(ticket.Identity);
            }
            return authorizeHubConnection;
        }

        public override bool AuthorizeHubMethodInvocation(IHubIncomingInvokerContext hubIncomingInvokerContext, bool appliesToMethod)
        {
            bool authorizeHubMethodInvocation = base.AuthorizeHubMethodInvocation(hubIncomingInvokerContext, appliesToMethod);
            string connectionId = hubIncomingInvokerContext.Hub.Context.ConnectionId;
            var environment = hubIncomingInvokerContext.Hub.Context.Request.Environment;
            var principal = environment["server.User"] as ClaimsPrincipal;
            if (authorizeHubMethodInvocation && principal != null && principal.Identity != null && principal.Identity.IsAuthenticated)
            {
                //   IRequest request= new ServerRequest();
                //hubIncomingInvokerContext.Hub.Context.Request.

            }
            return authorizeHubMethodInvocation;
        }
    }
}
