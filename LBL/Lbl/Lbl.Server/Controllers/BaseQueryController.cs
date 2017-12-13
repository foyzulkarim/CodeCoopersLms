using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Data.Entity;
using System.Net.Http;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using Lbl.Model;
    using Lbl.RequestModel;
    using Lbl.Service;
    using Lbl.ViewModel;

    public class BaseQueryController<C, T, TR, TV> : ApiController where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T> where C : DbContext, new()
    {
        private BaseService<C, T, TR, TV> service;

        public BaseQueryController()
        {
            service = new BaseService<C, T, TR, TV>();
        }

        [AllowAnonymous]
        [Route("Search")]
        [ActionName("Search")]
        [HttpPost]
        public IHttpActionResult Search(TR request)
        {
            var students = service.Search(request);
            return this.Ok(students);
        }
    }
}
