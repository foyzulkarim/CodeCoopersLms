using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;
using Vta.Service;
using Vta.ViewModels;

namespace Vta.ApiApp.Controllers
{
    public class CourseDetailQueryController : ApiController
    {
        private readonly CourseService _service;

        public CourseDetailQueryController()
        {
            _service = new CourseService(new CourseRepository(new VtaDbContext()));
        }

        public IHttpActionResult Get(string id)
        {
            CourseDetailRequestModel request = new CourseDetailRequestModel(id);
            try
            {
                CourseDetailViewModel courseViewModels = _service.GetCourseDetail(request);
                return courseViewModels == null
                    ? (IHttpActionResult) new StatusCodeResult(HttpStatusCode.NoContent, Request)
                    : Ok(courseViewModels);
            }
            catch (Exception exception)
            {
                return new ExceptionResult(exception, this);
            }
        }

    }
}
