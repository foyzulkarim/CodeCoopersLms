using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using Lbl.RequestModel;
    using Lbl.Service;

    public class TeacherQueryController : ApiController
    {
        public IHttpActionResult Post(TeacherRequestModel request)
        {
            var service = new TeacherService();
            var students = service.Search(request);
            return this.Ok(students);
        }

    }
}
