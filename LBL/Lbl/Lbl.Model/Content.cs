using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    class Content : Entity
    {
        public int Serial { get; set; }

        public string CourseId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Url { get; set; }

        public int TotalSeconds { get; set; }

        public string Tags { get; set; }

        public int Category { get; set; }
    }
}
