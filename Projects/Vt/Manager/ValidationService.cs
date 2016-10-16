using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;
using ViewModel;

namespace Manager
{
    public class ValidationService : IValidationService
    {
        public ValidationService(VirtualtraineesEntities db)
        {
            this.Db = db;
        }

        public VirtualtraineesEntities Db { get; set; }

        public async Task<ResponseModel> IsValidRequestAsync(Guid contentId, Guid traineeId)
        {
            Content content = await Db.Contents.FindAsync(contentId);
            if (!content.IsPublic)
            {
                Trainee trainee = await Db.Trainees.FindAsync(traineeId);
                if (trainee.IsActive)
                {
                    if (trainee.Expired>DateTime.Now)
                    {                        
                        return new ResponseModel();
                    }
                    else
                    {
                        return new ResponseModel(null, false, MessageContainer.DeactivatedNotification);
                    }
                }
                else
                {
                    return new ResponseModel(null, false, MessageContainer.DeactivatedNotification);
                }
            }
            else
            {
                // yes public
                return new ResponseModel();                
            }
        }

        //public async Task<ResponseModel> IsContentCanBeUnlocked(Guid contentId, Guid traineeId)
        //{
        //    var response = await IsValidRequestAsync(contentId, traineeId);
        //    if (response.IsSuccess)
        //    {
        //        var history = await Db.TraineeQuizHistories.FirstOrDefaultAsync(x => x.ContentId == contentId && x.TraineeId == traineeId);
        //        if (history.IsCompleted)
        //        {
                    
        //        }
        //    }
        //}
    }

    public interface IValidationService
    {
        Task<ResponseModel> IsValidRequestAsync(Guid contentId, Guid traineeId);
        //Task<ResponseModel> IsContentCanBeUnlocked(Guid contentId, Guid traineeId);
    }
}
