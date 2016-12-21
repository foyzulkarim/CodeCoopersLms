using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vta.Models;
using Vta.Repository;

namespace Vta.Service
{
    public class StudentContentService : BaseService<StudentContent>, IStudentContentService
    {
        private IStudentContentRepository _repository;
        public StudentContentService(BaseRepository<StudentContent> repository) : base(repository)
        {
            _repository = repository as IStudentContentRepository;
        }

        public bool CanBeUnlocked(string contentId)
        {
            IContentRepository contentRepository=new ContentRepository(Repository.DbContext);
            //bool isPublic =  contentRepository.Get().IsPublic(contentId);
            return true;
        }
    }
}
