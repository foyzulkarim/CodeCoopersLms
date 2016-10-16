using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    public class ContentController : RestController
    {
        public async Task<ResponseModel> Get(int contentNo, int levelNo)
        {
            ResponseModel response;
            try
            {
                IContentService service = new ContentService(new VirtualtraineesEntities());
                Guid id = await service.GetId(contentNo,levelNo);
                response = id != new Guid()
                    ? new ResponseModel(id)
                    : new ResponseModel(null, false, "No content found for this number");
            }
            catch (Exception exception)
            {
                response = new ResponseModel(isSuccess: false, message: "Error occurrred", exception: exception);
            }
            return response;
        }       
    }
}
