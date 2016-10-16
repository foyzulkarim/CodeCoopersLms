using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using Newtonsoft.Json;
using ViewModel;

namespace Server.Controllers
{
    public class AuthorizationController : RestController
    {
        public async Task<ResponseModel> Post(object o)
        {
            dynamic deserializeObject = JsonConvert.DeserializeObject<dynamic>(o.ToString());
            return new ResponseModel(deserializeObject, true,"Good");
        }
    }
}
