using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Lbl.IdentityModel;
using Lbl.RequestModel;
using Lbl.ViewModel;

namespace Lbl.Server.Controllers
{
    [RoutePrefix("api/Resource")]
    public class ResourceController : BaseController<Resource, ResourceRequestModel, ResourceViewModel>
    {
        public ResourceController() : base(new ApplicationDbContext())
        {

        }
    }
}
