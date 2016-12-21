using System.Linq;
using Vta.Models;

namespace Vta.Repository
{
    public interface ICourseRepository : IGenericRepository<Course>
    {
    }

    public interface ILevelReposiroty : IGenericRepository<Level>
    {

    }

    public interface IContentRepository : IGenericRepository<Content>
    {
        
    }

    public interface IStudentContentRepository : IGenericRepository<StudentContent>
    {
    }

    public interface IEnrollmentRepository : IGenericRepository<Enrollment>
    {

    }
}