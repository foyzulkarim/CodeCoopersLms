using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    class Enrollment : Entity
    {
        public string StudentId { get; set; }

        public string CourseId { get; set; }

        public bool IsPaid { get; set; }

        public double PaidTotal { get; set; }

        public double Due { get; set; }
        
        public bool IsCompleted { get; set; }

        public int CompletedContent { get; set; }
    }
}
