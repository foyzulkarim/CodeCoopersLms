using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class StudentContentViewModel:BaseViewModel<StudentContent>
    {
        public StudentContentViewModel(StudentContent studentContent) : base(studentContent)
        {
            if (studentContent.Student != null)
            {
                Student = new StudentViewModel(studentContent.Student);
            }

            if (studentContent.Content != null)
            {
                Content = new ContentViewModel(studentContent.Content);
            }

            WatchedSeconds = studentContent.WatchedSeconds;
        }

        public StudentViewModel Student { get; set; }
        public ContentViewModel Content { get; set; }
        public int? WatchedSeconds { get; set; } 
    }
}
