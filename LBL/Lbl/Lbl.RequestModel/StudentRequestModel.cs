using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.RequestModel
{
    public class StudentRequestModel
    {

        public StudentRequestModel()
        {
            PerPageCount = 10;
            Page = 1;
        }

        public string Name { get; set; }

        public string Phone { get; set; }

        public int Page { get; set; }

        public int PerPageCount { get; set; }

        public string OrderBy { get; set; }

        public bool IsAscending { get; set; }
    }
}
