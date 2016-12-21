using Microsoft.VisualStudio.TestTools.UnitTesting;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;

namespace Vta.Service.Test
{
    [TestClass]
    public class CourseServiceTest
    {
        [TestMethod]
        public void GetTestMethod1()
        {
            ICourseService service = new CourseService(new CourseRepository(new VtaDbContext()));
            var request = new CourseRequestModel(null,null, null);
            var courseViewModels = service.GetCourses(request);
            Assert.IsNotNull(courseViewModels);
        }

        [TestMethod]
        public void GetDetailTestMethod()
        {
            ICourseService service = new CourseService(new CourseRepository(new VtaDbContext()));
            var request = new CourseDetailRequestModel("42e15a83-252f-4396-ae42-c5b27f8be970");
            var courseViewModels = service.GetCourseDetail(request);
            Assert.IsNotNull(courseViewModels);
        }
    }
}