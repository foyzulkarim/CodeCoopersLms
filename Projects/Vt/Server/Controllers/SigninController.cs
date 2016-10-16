using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using DataAccess;
using Manager;
using ViewModel;
using AuthenticationManager = Manager.AuthenticationManager;


namespace Server.Controllers
{
  [AllowAnonymous]
    public class SigninController : ApiController
    {
        public async Task<ResponseModel> Post(SigninModel model)
        {
            IAuthenticationService signupService = new AuthenticationManager(new VirtualtraineesEntities());
            ResponseModel response = await signupService.Signin(model);    
            return response;
        }
    }
}
