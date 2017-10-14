using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Service
{
    using Lbl.Model.Students;
    using Lbl.Repository;

    public class StudentService
    {
        public bool Add(Student student)
        {
            StudentRepository repository = new StudentRepository();
            return repository.Add(student);
        }
    }
}
