using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class StudentGridViewModel : BaseViewModel
    {
        public StudentGridViewModel(Student student) : base(student)
        {
            Phone = student.Phone;
            Name = student.Name;
        }

        public string Name { get; set; }
        public string Phone { get; set; }
    }
}
