using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class EnrollmentViewModel:BaseViewModel<Enrollment>
    {
        public EnrollmentViewModel(Enrollment enrollment) : base(enrollment)
        {
            if (enrollment.Student != null)
            {
                Student = new StudentViewModel(enrollment.Student);
            }

            if (enrollment.Course != null)
            {
                Course = new CourseViewModel(enrollment.Course);
            }

            IsPaid = enrollment.IsPaid;
            PaidTotal = enrollment.PaidTotal;
            Due = enrollment.Due;
            IsCompleted = enrollment.IsCompleted;
            CompletedContent = enrollment.CompletedContent;

        }

        public StudentViewModel Student { get; set; }
        public CourseViewModel Course { get; set; }
        public bool IsPaid { get; set; }
        public double PaidTotal { get; set; }
        public double Due { get; set; }
        public bool IsCompleted { get; set; }
        public int? CompletedContent { get; set; }

    }
}
