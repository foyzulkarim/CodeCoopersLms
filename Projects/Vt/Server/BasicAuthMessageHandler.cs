using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using DataAccess;

using Microsoft.Owin.Security;
using Newtonsoft.Json;
using Server.Models;
using AuthenticationManager = Manager.AuthenticationManager;

namespace Server
{
    public class BasicAuthMessageHandler : DelegatingHandler
    {
        private const string BasicAuthResponseHeader = "WWW-Authenticate";
        private const string BasicAuthResponseHeaderValue = "Basic";

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {          
            if (RequestVerbIsRequiredToparse(request))
            {
//                Write(request);

                if (request.RequestUri.Segments[2].ToLower() != "signup" && request.RequestUri.Segments[2].ToLower() != "signin")
                {
                    IEnumerable<string> values = null;
                    bool headerExists = request.Headers.TryGetValues("x-session-token", out values);
                    if (headerExists)
                    {
                        var parsedCredentials = ParseAuthorizationHeader(values.First());
                        if (parsedCredentials != null)
                        {
                            UserModel userModel = new UserModel() {};
                            using (VirtualtraineesEntities db = new VirtualtraineesEntities())
                            {
                                Trainee trainee = db.Trainees.Find(parsedCredentials.Id);
                                userModel = new UserModel()
                                {
                                    Id = trainee.Id,
                                    Name = trainee.Name,
                                    Email = trainee.Email,
                                    Role = "Trainee"
                                };
                            }
                            request.Properties["UserModel"] = userModel;
                            var claims = new List<Claim> {new Claim(ClaimTypes.Role, "Trainee")};
                            var principal = new ClaimsPrincipal(new ClaimsIdentity(claims, "UserClaims"));
                            HttpContext.Current.User = Thread.CurrentPrincipal = principal;
                        }
                        else return request.CreateResponse(HttpStatusCode.Forbidden, "Unauthenticated.");
                    }
                    else
                    {
                        return request.CreateResponse(HttpStatusCode.Forbidden, "Unauthenticated.");
                    }
                }
              
            }


            //else return request.CreateResponse(HttpStatusCode.Forbidden, "Unauthenticated.");
            return await base.SendAsync(request, cancellationToken).ContinueWith(task =>
                {
                    var response = task.Result;
                    if (response.StatusCode == HttpStatusCode.Unauthorized && !response.Headers.Contains(BasicAuthResponseHeader))
                    {
                        response.Headers.Add(BasicAuthResponseHeader, BasicAuthResponseHeaderValue);
                    }
                    return response;
                });
        }

        private bool RequestVerbIsRequiredToparse(HttpRequestMessage request)
        {
            return request.Method.Method!="OPTIONS";
        }

        private Credentials ParseAuthorizationHeader(string authHeaderValue)
        {
            if (String.IsNullOrWhiteSpace(authHeaderValue)) return null;
            var authHeader = authHeaderValue;
            var credentials = Encoding.ASCII.GetString(Convert.FromBase64String(authHeader)).Split(':');
            if (credentials.Length != 2 || string.IsNullOrEmpty(credentials[0]) || string.IsNullOrEmpty(credentials[1]))
            {
                return null;
            }

            using (var authenticationManager = new AuthenticationManager(new VirtualtraineesEntities()))
            {
                return 
                    authenticationManager.IsAuthenticated(Guid.Parse(credentials[0]), credentials[1]) 
                    ?
                    new Credentials { Id = new Guid(credentials[0]), Token = credentials[1] } : null;
            }
        }

        private static void Write(HttpRequestMessage request)
        {
            if (request.Properties.ContainsKey("MS_HttpContext"))
            {
                var ctx = request.Properties["MS_HttpContext"] as HttpContextWrapper;
                var r = ctx.Request;
                try
                {
                    var myobj = new
                    {
                        Browser = new
                        {
                            BrowserName = r.Browser.Browser,
                            r.Browser.IsMobileDevice,
                            r.Browser.MajorVersion,
                            r.Browser.MobileDeviceManufacturer,
                            r.Browser.MobileDeviceModel,
                            r.Browser.Platform,
                            r.Browser.Win32,
                            r.Browser.Type,
                            r.Browser.InputType
                        },                      
                        r.HttpMethod,
                        r.LogonUserIdentity.Name,
                        r.RawUrl,
                        r.UrlReferrer,
                        r.UserHostAddress,
                        r.UserHostName,
                        r.UserLanguages,
                        ctx.Timestamp,
                    };
                   // Class1.Write(myobj);
                }
                catch (Exception exception)
                {
                    Console.WriteLine(exception);
                }           
              
            }
 
        }
    }

     
}