using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using DataAccess;
using Manager;
using Microsoft.AspNet.Identity;
using ViewModel;

namespace Server.Controllers
{
    public class ClassController : RestController
    {
           private VirtualtraineesEntities Db;
           public ClassController()
        {
            Db = new VirtualtraineesEntities();
        }

        public async Task<ResponseModel> Get(Guid id)
        {
            ResponseModel response;
            try
            {                
                IContentService service = new ContentService(Db);
               
                    ContentDetailViewModel data = await service.GetContentDetail(id, UserModel.Id);
                    response = data != null ? new ResponseModel(data) : new ResponseModel(null, false, MessageContainer.NotYetUnlocked);                                  
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess:false, message:"Error occurrred", exception:exception);
            }
            
            return response;
        }
    }
}
