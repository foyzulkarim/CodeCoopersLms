using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.IdentityModel
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System.Data.Entity;

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public IDbSet<Resource> Resources { get; set; }

        public IDbSet<Permission> Permissions { get; set; }
    }
}
