using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Service
{
    using Lbl.Model;
    using Lbl.Repository;

    public class TeacherService
    {
        public void Temp()
        {
            BaseRepository<Teacher> teacherRepository=new BaseRepository<Teacher>();
            IQueryable<Teacher> teachers = teacherRepository.Get();
        }
    }
}
