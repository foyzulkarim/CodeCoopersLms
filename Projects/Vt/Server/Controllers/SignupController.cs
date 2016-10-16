using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using DataAccess;
using Manager;
using Messenger.Emailer;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Server.Models;
using ViewModel;
using AuthenticationManager = Manager.AuthenticationManager;

namespace Server.Controllers
{
    [AllowAnonymous]
    public class SignupController : ApiController
    {

        public async Task<ResponseModel> Post(SignupModel model)
        {
            var context = new VirtualtraineesEntities();
            IAuthenticationService authenticationService = new AuthenticationManager(context);
            ResponseModel response = authenticationService.Signup(model);
            if (response.IsSuccess)
            {
                var emailer = new SendGridEmailer();
                Message message = EmailFactory.CreateMessage(new List<string>() {model.Name},
                    new List<string>() {model.Email}, EmailType.Welcome);
                var sent = await emailer.SendEmailAsync(message,new NetworkCredential("foyzulkarim","Foysal.karim25"));
            }
            return response;
        }
    }
}
