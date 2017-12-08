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
    using Lbl.ViewModel;

    [RoutePrefix("api/Student")]
    public class StudentController : BaseController<Student, StudentRequestModel, StudentViewModel>
    {
        public StudentController() : base(new BusinessDbContext())
        {
        }
    }
} 