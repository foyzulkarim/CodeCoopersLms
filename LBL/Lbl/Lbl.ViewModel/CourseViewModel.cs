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
            TotalStudentsEnrolled = course.TotalStudentsEnrolled;
            PublishDate = course.PublishDate;
            TotalLecturesCount = course.TotalLecturesCount;
            SubTitle = course.SubTitle;
            CourseSummary = course.CourseSummary;
            CourseShortDescription = course.CourseShortDescription;
            Language = course.Language;
            Achieve = course.Achieve;
            Requirements = course.Requirements;
            FullDescription = course.FullDescription;
            
            if (course.Teacher != null)
            {
                this.Teacher = new TeacherViewModel(course.Teacher);
            }
        }

        public string Title { get; set; }
        public double Price { get; set; }
        public string Tags { get; set; }
        public int TotalStudentsEnrolled { get; set; }
        public DateTime PublishDate { get; set; }
        public int TotalLecturesCount { get; set; }
        public string SubTitle { get; set; }
        public string CourseSummary { get; set; }
        public string CourseShortDescription { get; set; }
        public string Language { get; set; }
        public string Achieve { get; set; }
        public string Requirements { get; set; }
        public string FullDescription { get; set; }

        public TeacherViewModel Teacher { get; set; }
    }
}
