using System;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Vta.ApiApp.Models;
using Vta.ApiApp.Providers;
using Vta.Models;
using Vta.Permission;

namespace Vta.ApiApp
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public static string PublicClientId { get; private set; }

        // For more information on configuring authentication, please visit http://go.microsoft.com/fwlink/?LinkId=301864
        public void ConfigureAuth(IAppBuilder app)
        {
            // Configure the db context and user manager to use a single instance per request
            app.CreatePerOwinContext(ApplicationDbContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);

            app.CreatePerOwinContext(PermissionDbContext.Create);
            app.CreatePerOwinContext(PermissionManager.Create);
            app.CreatePerOwinContext(VtaDbContext.Create);

            // Enable the application to use a cookie to store information for the signed in user
            // and to use a cookie to temporarily store information about a user logging in with a third party login provider
         //   app.UseCookieAuthentication(new CookieAuthenticationOptions());

           // app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Configure the application for OAuth based flow
            PublicClientId = "self";
            OAuthOptions = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/Token"),
                Provider = new ApplicationOAuthProvider(PublicClientId),
                AuthorizeEndpointPath = new PathString("/api/Account/ExternalLogin"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(14),
                // In production mode set AllowInsecureHttp = false
                AllowInsecureHttp = true
            };

            // Enable the application to use bearer tokens to authenticate users
            app.UseOAuthBearerTokens(OAuthOptions);

            //app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions
            //{
            //    Provider = new ApplicationOAuthBearerAuthenticationProvider(),
            //});


            // Uncomment the following lines to enable logging in with third party login providers
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //    consumerKey: "",
            //    consumerSecret: "");

            //app.UseFacebookAuthentication(
            //    appId: "",
            //    appSecret: "");

            //app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
            //{
            //    ClientId = "",
            //    ClientSecret = ""
            //});
        }

        public void ConfigureSignalR(IAppBuilder app)
        {
            //app.Map("/signalr", map =>
            //{
            //    map.UseCors(CorsOptions.AllowAll);
            //    HubConfiguration hubConfiguration = new HubConfiguration()
            //    {
                     
            //    };
            //    var authorizeAttribute = new QueryStringBearerAuthorizeAttribute();
            //    AuthorizeModule module = new AuthorizeModule(authorizeAttribute, authorizeAttribute);
            //    GlobalHost.HubPipeline.AddModule(module);
            //    map.RunSignalR(hubConfiguration);

            //});
            app.MapSignalR();
        }
    }
}