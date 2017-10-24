using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using Lbl.Model;
    using Lbl.Service;

    public class StudentController : ApiController
    {
        public IHttpActionResult Post(Student student)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest("bhai, please sob field fill up koren");
            }

            StudentService service = new StudentService();
            var add = service.Add(student);
            return this.Ok(add);
        }
    }
}