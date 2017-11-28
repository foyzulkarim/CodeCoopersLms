using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    using System.Data.Entity;

    public class BusinessDbContext : DbContext
    {
        public BusinessDbContext() : base("DefaultBusinessConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public static BusinessDbContext Create()
        {
            return new BusinessDbContext();
        }

        public DbSet<Student> Students { get; set; }

        public DbSet<Teacher> Teachers { get; set; }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Content> Contents { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }

        public DbSet<StudentContent> StudentContents { get; set; }
    }
}
