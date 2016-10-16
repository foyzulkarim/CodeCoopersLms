using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using Server.Models;

namespace Server.Controllers
{
    public class RestController : ApiController
    {
        protected UserModel UserModel;

        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            if (controllerContext.Request.Properties.ContainsKey("UserModel"))
                this.UserModel = controllerContext.Request.Properties["UserModel"] as UserModel;
        }
    }
}
