namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

   
    public class StudentContent : Entity
    {

        public string EnrollmentId { get; set; }

        public string ContentId { get; set; }
        
        public int Point { get; set; }
        [ForeignKey("ContentId")]
        public virtual Content Content { get; set; }
        [ForeignKey("EnrollmentId")]
        public virtual Enrollment Enrollment     { get; set; }

    }

    

    public class PaymentHistory : Entity
    {   
        [Required]
        public string EnrollmentId { get; set; }
        [Required]
        public double Amount { get; set; }
        [Required]
        public int Method { get; set; }
        public string Note { get; set; }
        [Required]
        public string TransactionNo { get; set; }
        public bool IsVerified { get; set; }
      
        [ForeignKey("EnrollmentId")]
        public virtual Enrollment Enrollment { get; set; }
    }


    public class Enrollment : Entity
    {
        [Required]
        public string StudentId { get; set; }
        [Required]
        public string CourseId { get; set; }
        [Required]
        public bool IsPaid { get; set; }
        public double PaidAmount { get; set; }
        public double DueAmount { get; set; }
        public double DueDate { get; set; }

        [ForeignKey("StudentId")]
        public virtual Student Student { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }

        public virtual ICollection<PaymentHistory> PaymentHistories { get; set; }
    }


    //public class Chat : Entity
    //{
    //    [Required]
    //    public string SenderId { get; set; }
    //    [Required]
    //    public string ReceiverId { get; set; }
    //    [StringLength(500)]
    //    public string Message { get; set; }
    //}
}
