using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess;

namespace ViewModel
{
    public class TraineeViewModel
    {
        public TraineeViewModel(Trainee trainee)
        {
            this.Id = trainee.Id;
            this.Name = trainee.Name;
            this.Email = trainee.Email;
            this.Token = trainee.Token;
            Point = trainee.Point;
        }

        public int Point { get; set; }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Token { get; set; }
    }

    public class TraineeDetailViewModel
    {
        public TraineeDetailViewModel(Trainee trainee)
        {
            this.Id = trainee.Id;
            this.Name = trainee.Name;
            this.Email = trainee.Email;
            this.Point = trainee.Point;
            this.IsActive = trainee.IsActive;
            this.Payments = trainee.Payments.AsEnumerable().Select(x => new Payment()
            {
                Amount = x.Amount,
                IsVerified = x.IsVerified,
                Method = x.Method,
                Note = x.Note,
                PaidDate = x.PaidDate,
                TransactionNumber = x.TransactionNumber,
                VerifiedAt = x.VerifiedAt,
                Id = x.Id
            }).ToList();
        }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public int Point { get; set; }

        public bool IsActive { get; set; }

        public List<Payment> Payments { get; set; }
    }
}