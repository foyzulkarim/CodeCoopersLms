using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.RequestModel
{
    public class StudentRequestModel : BaseRequestModel
    {

        public StudentRequestModel()
        {
           
        }

        public string Name { get; set; }

        public string Phone { get; set; }
    }
}
