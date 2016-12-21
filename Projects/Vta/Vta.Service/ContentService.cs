using System;
using System.Collections;
using System.Data.Entity;
using System.Linq;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;
using Vta.ViewModels;

namespace Vta.Service
{
    public class ContentService : BaseService<Content>, IContentService
    {
        private readonly IContentRepository _contentRepository;

        public ContentService(IContentRepository repository) : base((BaseRepository<Content>) repository)
        {
            _contentRepository = repository;
        }

        public ContentDetailViewModel GetContentDetail(ContentDetailRequestModel requestModel)
        {
            IQueryable<Content> contents = _contentRepository.Get();
            Content content = requestModel.GetFirstData(contents);
            ContentDetailViewModel model = new ContentDetailViewModel(content);
            var filtered = contents.Where(x => x.LevelId == content.LevelId);
            model.PreviousContentId = contents.FirstOrDefault(x => x.No == model.No - 1)?.Id;
            model.NextContentId = filtered.FirstOrDefault(x => x.No == model.No + 1)?.Id;            
            return model;
        }
    }

    public class EnrollmentService : BaseService<Enrollment>, IEnrollmentService
    {
        private readonly IEnrollmentRepository _enrollmentRepository;
        public EnrollmentService(IEnrollmentRepository repository) : base((BaseRepository<Enrollment>) repository)
        {
            _enrollmentRepository = repository;
        }


    }
}