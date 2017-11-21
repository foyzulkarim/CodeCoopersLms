using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    class StudentContent : Entity
    {
        public string StudentId { get; set; }

        public string ContentId { get; set; }

        public int WatchedSeconds { get; set; }

    }
}
