using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using Lbl.Model;
    using Lbl.RequestModel;
    using Lbl.Service;

    public class StudentQueryController : ApiController
    {

        public IHttpActionResult Post(StudentRequestModel request)
        {         
            StudentService service = new StudentService();
            var students = service.Search(request);
            return this.Ok(students);
        }

    }
}
