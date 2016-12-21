using System.Web;
using System.Web.Http;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;
using Vta.Service;

namespace Vta.ApiApp.Controllers
{
    public class CourseQueryController : ApiController
    {
        private readonly CourseService _service;

        public CourseQueryController()
        {
            _service = new CourseService(new CourseRepository(new VtaDbContext()));
        }

        public IHttpActionResult Get(string keyword = "", string orderBy = "", string isAsc = "")
        {
            HttpBrowserCapabilities browser = HttpContext.Current.Request.Browser;
            CourseRequestModel request=new CourseRequestModel(keyword,orderBy,isAsc);
            var courseViewModels = _service.GetCourses(request);
            return Ok(courseViewModels);
        }

    }
}