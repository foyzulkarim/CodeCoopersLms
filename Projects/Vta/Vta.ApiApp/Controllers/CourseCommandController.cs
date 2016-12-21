using System;
using System.Web.Http;
using System.Web.Http.Results;
using Vta.Models;
using Vta.Service;

namespace Vta.ApiApp.Controllers
{
    public class CourseCommandController : CommandController
    {

       // private readonly CourseService _service;

        public CourseCommandController()
        {
          //  _service = new CourseService();
        }

         
        public IHttpActionResult Post(Course course)
        {
        //    _service.Add(course);
        //    return Ok(course.Id);
            return Ok(course);
        }

        public IHttpActionResult Put(Course course)
        {
            if (Guid.Empty.ToString() == course.Id)
            {
                return new BadRequestErrorMessageResult("id can not be null", this);
            }
            return Ok(course);
        }
    }
}
