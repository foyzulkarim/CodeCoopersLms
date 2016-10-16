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
    public interface ITraineeService
    {
        Task<TraineeDetailViewModel> Get(Guid traineeId);
        Task<Payment> Pay(Payment payment);        
    }
    public class TraineeService: ITraineeService
    {

        public TraineeService(VirtualtraineesEntities Db)
        {
            this.Db = Db;
        }

        private VirtualtraineesEntities Db { get; set; }

        public async Task<TraineeDetailViewModel> Get(Guid traineeId)
        {
            Trainee trainee = await Db.Trainees.FindAsync(traineeId);
            TraineeDetailViewModel viewModel = new TraineeDetailViewModel(trainee);
            return viewModel;
        }

        public async Task<Payment> Pay(Payment payment)
        {
            Payment dbPayment = await Db.Payments.FirstOrDefaultAsync(x => x.TransactionNumber == payment.TransactionNumber);
            if (dbPayment==null)
            {
                payment.IsVerified = false;
                payment.Note = "";
                payment.PaidDate = DateTimeOffset.Now;
                payment.VerifiedAt = DateTimeOffset.Now;
                payment.Method = 1;

                Db.Payments.Add(payment);
                int i = await Db.SaveChangesAsync();
                return payment;
            }
            return null;
        }

    }
}
