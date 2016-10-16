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
    public class TraineeController : ApiController
    {
        public async Task<ResponseModel> Get(Guid id)
        {
            ITraineeService traineeService = new TraineeService(new VirtualtraineesEntities());
            var trainee = await traineeService.Get(id);
            return trainee!=null ? new ResponseModel(trainee) : new ResponseModel(null, false, MessageContainer.NoUserFound);
        }
    }
}
