using System.Data.Entity;
using Vta.Models;

namespace Vta.Repository
{
    public class CourseRepository : BaseRepository<Course>, ICourseRepository
    {
        public CourseRepository(VtaDbContext db) : base(db)
        {
        }
    }

    public class LevelRepository : BaseRepository<Level>, ILevelReposiroty
    {
        public LevelRepository(VtaDbContext db): base(db)
        {
            
        }
    }

    public class ContentRepository : BaseRepository<Content> , IContentRepository
    {
        public ContentRepository(DbContext db) : base(db)
        {
        }
    }

    public class StudentContentRepository : BaseRepository<StudentContent>, IStudentContentRepository
    {
        public StudentContentRepository(DbContext db): base(db)
        {
            
        }
    }

    public class EnrollmentRepository : BaseRepository<Enrollment>, IEnrollmentRepository
    {
        public EnrollmentRepository(DbContext db) : base(db)
        {
        }
    }

}