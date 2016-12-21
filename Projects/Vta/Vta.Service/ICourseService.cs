using System.Collections.Generic;
using Vta.RequestModels;
using Vta.ViewModels;

namespace Vta.Service
{
    public interface ICourseService
    {
        List<CourseViewModel> GetCourses(CourseRequestModel requestModel);
        CourseDetailViewModel GetCourseDetail(CourseDetailRequestModel requestModel);
    }

    public interface IContentService
    {
        ContentDetailViewModel GetContentDetail(ContentDetailRequestModel requestModel);
    }

    public interface IStudentContentService
    {
        bool CanBeUnlocked(string contentId);
    }

    public interface IEnrollmentService
    {

    }
}