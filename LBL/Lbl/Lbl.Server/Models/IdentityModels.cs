using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace Lbl.Server.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        // our own properties --> column 
    }

    public class ApplicationRole : IdentityRole
    {
        [MaxLength(20)]
        public string LandingRoute { get; set; }
    }

    // Resource 
    public class Resource : Lbl.Model.Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public bool IsPublic { get; set; }
    }

    // Permission
    public class Permission : Lbl.Model.Entity
    {
        [Index]
        [MaxLength(128)]
        public string RoleId { get; set; }

        [ForeignKey("RoleId")]
        public virtual ApplicationRole ApplicationRole { get; set; }

        [Index]
        [MaxLength(128)]
        public string ResourceId { get; set; }

        [ForeignKey("ResourceId")]
        public virtual Resource Resource { get; set; }

        public bool IsAllowed { get; set; }

        public bool IsDisabled { get; set; }

    }
}