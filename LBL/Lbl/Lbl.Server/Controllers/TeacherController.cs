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

    public class TeacherController : ApiController
    {
        public IHttpActionResult Post(Teacher teacher)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest("bhai, please sob field fill up koren");
            }

            TeacherService service = new TeacherService();
            var add = service.Add(teacher);
            return this.Ok(add);
        }
    }
}
