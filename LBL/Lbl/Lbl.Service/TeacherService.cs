using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Service
{
    using System.Data;
    using System.Linq.Expressions;

    using Lbl.Model;
    using Lbl.Repository;
    using Lbl.RequestModel;
    using Lbl.ViewModel;

    public class TeacherService : BaseService<Teacher>
    {
        private GenericRepository<Teacher> repository;

        public TeacherService()
        {
            repository = new GenericRepository<Teacher>();
        }

        public bool Add(Teacher teacher)
        {
            return repository.Add(teacher);
        }

        public List<TeacherGridViewModel> Search(TeacherRequestModel request)
        {
            var teachers = this.SearchQueryable(request);
            var list = teachers.ToList().ConvertAll(x => new TeacherGridViewModel(x));
            return list;
        }

        public TeacherDetailViewModel Detail(string id)
        {
            Teacher x = this.repository.GetDetail(id);
            if (x == null)
            {
                throw new ObjectNotFoundException();
            }

            var vm = new TeacherDetailViewModel(x);
            return vm;
        }
    }
}
