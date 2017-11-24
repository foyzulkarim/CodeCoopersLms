using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.ViewModel
{
    using System.Linq.Expressions;
    using Lbl.Model;

    public class ContentViewModel : BaseViewModel<Content>
    {
        public ContentViewModel(Content content) : base(content)
        {
            this.Serial = content.Serial;
            this.Title = content.Title;
            this.Description = content.Description;
            this.Url = content.Url;
            this.Tags = content.Tags;
            this.Category = content.Category;

            if(content.Course != null)
            {
                this.CourseTitle = content.Course.Title;
            }
        }

        public int Serial { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string Tags { get; set; }
        public int Category { get; set; }
        public string CourseTitle { get; set; }
    }
}
