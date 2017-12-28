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
    using Lbl.ViewModel;

    [AllowAnonymous]
    [RoutePrefix("api/CourseQuery")]
    public class CourseQueryController : BaseQueryController<Course, CourseRequestModel, CourseViewModel>
    {
    }
}
