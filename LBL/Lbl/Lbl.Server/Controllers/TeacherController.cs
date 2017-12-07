﻿using System;
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

    [RoutePrefix("api/Teacher")]
    public class TeacherController : BaseController<Teacher, TeacherRequestModel, TeacherViewModel>
    {
        public TeacherController() : base(new BusinessDbContext())
        {
        }
    }
}
