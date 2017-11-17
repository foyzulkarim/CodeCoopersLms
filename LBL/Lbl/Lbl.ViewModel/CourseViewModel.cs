using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.ViewModel
{
    using Lbl.Model;
    public class CourseViewModel : BaseViewModel<Course>
    {
        public CourseViewModel(Course course)
            : base(course)
        {
            this.Title = course.Title;
            Price = course.Price;
            Tags = course.Tags;
            
            if (course.Teacher != null)
            {
                this.Teacher = new TeacherViewModel(course.Teacher);
            }
        }

        public string Title { get; set; }

        public double Price { get; set; }
        public string Tags { get; set; }

        public TeacherViewModel Teacher { get; set; }
    }
}
