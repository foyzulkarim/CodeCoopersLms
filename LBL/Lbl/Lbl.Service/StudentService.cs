using System;
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

    public class StudentService
    {
        private BaseRepository<Student> repository;
        
        public StudentService()
        {
            repository = new BaseRepository<Student>();            
        }

        public bool Add(Student student)
        {
            return repository.Add(student);
        }

        public List<StudentGridViewModel> Search(StudentRequestModel request)
        {
            IQueryable<Student> students = this.repository.Get();
            if (!string.IsNullOrWhiteSpace(request.Name))
            {
                students = students.Where(x => x.Name.ToLower().Contains(request.Name.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(request.Phone))
            {
                students = students.Where(x => x.Phone.ToLower().Contains(request.Phone.ToLower()));
            }

            students = students.OrderBy(x => x.Modified);

            if (!string.IsNullOrWhiteSpace(request.OrderBy))
            {
                if (request.OrderBy.ToLower() == "name")
                {
                    students = request.IsAscending ? students.OrderBy(x => x.Name) : students.OrderByDescending(x => x.Name);
                }

                if (request.OrderBy.ToLower() == "phone")
                {
                    students = request.IsAscending ? students.OrderBy(x => x.Phone) : students.OrderByDescending(x => x.Phone);
                }
            }

            students = students.Skip((request.Page - 1) * 10).Take(request.PerPageCount);

            var list = students.ToList().ConvertAll(x => new StudentGridViewModel(x));
            return list;
        }

        public StudentDetailViewModel Detail(string id)
        {
            Student x = this.repository.GetDetail(id);
            if (x == null)
            {
                throw new ObjectNotFoundException();
            }

            var vm = new StudentDetailViewModel(x);
            return vm;
        }
    }
}
