using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using DataAccess;
using Manager;
using ViewModel;

namespace Server.Controllers
{
    public class LevelController : RestController
    {
        
        public LevelController()
        {
            
        }

        public  ResponseModel Get()
        {
            ResponseModel response;
            try
            {                
                IContentService service = new ContentService(new VirtualtraineesEntities());
                List<LevelViewModel> list =  service.GetContents(UserModel.Id);
                response = new ResponseModel(list);
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message: MessageContainer.ErrorOccurred, exception: exception);
            }

            return response;
        }
    }
}
