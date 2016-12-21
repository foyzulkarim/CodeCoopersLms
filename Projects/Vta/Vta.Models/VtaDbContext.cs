using System;
using System.Data.Entity;
using System.Linq;

namespace Vta.Models
{
    public class VtaDbContext : DbContext
    {
        public VtaDbContext() : base("DefaultConnection")
        {
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Content> Contents { get; set; }
        public DbSet<File> Files { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Student> Students{ get; set; }
        public DbSet<StudentContent> StudentContents { get; set; }
        public DbSet<Website> Websites { get; set; }
        public DbSet<UserSession> UserSessions { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<PaymentHistory> PaymentHistories { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }



        public override int SaveChanges()
        {
            var dbEntityEntries = ChangeTracker.Entries().Where(x => x.Entity is Entity);
            foreach (var entry in dbEntityEntries)
            {
                var entity = (Entity) entry.Entity;
                entity.Modified = DateTime.Now;
            }

            return base.SaveChanges();
        }

        public static VtaDbContext Create()
        {
            return new VtaDbContext();
        }
    }
}