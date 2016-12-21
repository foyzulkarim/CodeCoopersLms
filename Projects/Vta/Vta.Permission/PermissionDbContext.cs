using System.Data.Entity;

namespace Vta.Permission
{
    public class PermissionDbContext : DbContext
    {
        public PermissionDbContext() : base("DefaultConnection")
        {
        }

        public DbSet<ResourcePermission> Permissions { get; set; }
        public DbSet<ApplicationResource> Resources { get; set; }

        public static PermissionDbContext Create()
        {
            return new PermissionDbContext();
        }
    }
}