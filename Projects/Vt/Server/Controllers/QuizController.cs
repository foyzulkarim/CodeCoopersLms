using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using DataAccess;
using Manager;
using Newtonsoft.Json;
using ViewModel;

namespace Server.Controllers
{
    public class QuizController : RestController
    {
        public async Task<ResponseModel> Get(Guid contentId)
        {
            ResponseModel response;
            try
            {
                IContentService service = new ContentService(new VirtualtraineesEntities());
                QuizViewModel data = await service.GetQuizDetail(contentId, UserModel.Id);
                response = data != null ? new ResponseModel(data) : new ResponseModel(null, false, MessageContainer.NotYetUnlocked);
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message: MessageContainer.ErrorOccurred, exception: exception);
            }

            return response;
        }

        public async Task<ResponseModel> Post(object o)
        {
            ResponseModel response;
            try
            {
                AnswerViewModel answer = JsonConvert.DeserializeObject<AnswerViewModel>(o.ToString());
                IContentService service = new ContentService(new VirtualtraineesEntities());
                int quizType = service.GetQuizType(answer);

                bool ok = quizType == 1
                    ? await service.SubmitAnswer(answer, UserModel.Id)
                    : await service.SubmitAssignment(answer, UserModel.Id);
                
                response = ok ? new ResponseModel() : new ResponseModel(null, false, MessageContainer.AnswerIsWrong);
                if (ok)
                {
                    if (quizType==1)
                    {
                        SerialNumbers no = await service.GetNo(answer.ContentId);
                        response = await service.UnlockContent(no.ContentNo, no.LevelNo, UserModel.Id);
                        if (!response.IsSuccess)
                        {
                            
                            response = new ResponseModel(null, false, MessageContainer.AllAnswersCorrect + MessageContainer.UnableToUnlock + response.Message);
                        }
                    }
                    else
                    {
                        response = new ResponseModel("Assignment", false, MessageContainer.AssignmentIsSubmitted);
                    }
                   
                }
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message: MessageContainer.ErrorOccurred, exception: exception);
            }

            return response;
        }
    }
}
