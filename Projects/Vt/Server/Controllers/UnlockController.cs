using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using DataAccess;
using Manager;
using ViewModel;

namespace Server.Controllers
{
    public class UnlockController : RestController
    {
        public async Task<ResponseModel> Post()
        {
            ResponseModel response;
            try
            {
                IContentService service = new ContentService(new VirtualtraineesEntities());
                var history = await service.UnlockContent(0,1, UserModel.Id);
                response = new ResponseModel(history);
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message:MessageContainer.ErrorOccurred, exception: exception);
            }
            return response;
        }

        public async Task<ResponseModel> Get(Guid id)
        {

            ResponseModel response;
            try
            {
                IContentService service = new ContentService(new VirtualtraineesEntities());
                bool isUnlocked = await service.IsUnlocked(id, UserModel.Id);
                response = new ResponseModel() { IsSuccess = isUnlocked };
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message: MessageContainer.ErrorOccurred, exception: exception);
            }
            return response;
        }
    }
}
