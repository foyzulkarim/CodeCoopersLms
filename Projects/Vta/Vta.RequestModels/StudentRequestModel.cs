using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vta.Models;

namespace Vta.RequestModels
{
    public class StudentRequestModel
    {
        public StudentRequestModel(Student student)
        {
            this.Id = student.Id;
            
        }

        public string Id { get; set; }
    }
}
