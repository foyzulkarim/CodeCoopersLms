using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Service
{
    using System.Data;

    using Lbl.Model;

    using Lbl.Repository;
    using Lbl.RequestModel;
    using Lbl.ViewModel;

    public class StudentService : BaseService<Student, StudentRequestModel, StudentViewModel>
    {
          
    }
}
