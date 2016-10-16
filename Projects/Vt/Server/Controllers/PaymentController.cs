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
    public class PaymentController : ApiController
    {
        public async Task<ResponseModel> Post(Payment payment)
        {
            ITraineeService traineeService = new TraineeService(new VirtualtraineesEntities());
            Payment data = await traineeService.Pay(payment);
            return data != null ? new ResponseModel(data) : new ResponseModel(null, false, MessageContainer.CouldNotSavePayment);
        }
    }
}
