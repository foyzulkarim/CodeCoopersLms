using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;
using Vta.ViewModels;

namespace Vta.Service
{
    public class CourseService : BaseService<Course>, ICourseService
    {
        private readonly ICourseRepository _courseRepository;

        public CourseService(ICourseRepository repository) : base((BaseRepository<Course>)repository)
        {
            _courseRepository = Repository as CourseRepository;
        }

        public List<CourseViewModel> GetCourses(CourseRequestModel requestModel)
        {            
            var  queryable = requestModel.GetOrderedData(_courseRepository.Get());
            var courses = queryable.ToList();
            var viewModels = courses.ConvertAll(x => new CourseViewModel(x));
            return viewModels;
        }

        public CourseDetailViewModel GetCourseDetail(CourseDetailRequestModel requestModel)
        {
            Course course = _courseRepository.Filter(x => x.Id == requestModel.Id).FirstOrDefault();
            if (course!=null)
            {
                ILevelReposiroty levelReposiroty = new LevelRepository(new VtaDbContext());
                IQueryable<Level> levels = requestModel.GetOrderedData(levelReposiroty.Get()).Include(x=>x.Contents);
                if (levels != null)
                {
                    CourseDetailViewModel detailViewModel = new CourseDetailViewModel
                    {
                        CourseViewModel = new CourseViewModel(course),
                        Levels = levels.ToList().Select(x => new LevelDetailViewModel(x)).ToList()
                    };
                    return detailViewModel;
                }
            }
          
            return null;
        }

     
    }
}