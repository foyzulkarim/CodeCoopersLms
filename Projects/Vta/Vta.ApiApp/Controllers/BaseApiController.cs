using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Vta.ApiApp.Models;
using Vta.Models;
using Vta.RequestModels;

namespace Vta.ApiApp.Controllers
{
    public class BaseApiController : ApiController
    {
        protected StudentRequestModel Student;

        public BaseApiController()
        {
            Student = GetStudent();
        }

        private StudentRequestModel GetStudent()
        {
            string userId = User.Identity.GetUserId();
            VtaDbContext db = Request.GetOwinContext().Get<VtaDbContext>();
            var student = db.Students.Find(userId);
            StudentRequestModel requestModel=new StudentRequestModel(student);
            return requestModel;
        }
    }
}
