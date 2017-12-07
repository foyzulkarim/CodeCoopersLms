using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
//using Microsoft.AspNet.Identity.Owin;

namespace Lbl.IdentityModel
{
    using System;
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
        public ApplicationRole()
        {

        }

        public ApplicationRole(string name) : base(name)
        {

        }

        [MaxLength(20)]
        public string LandingRoute { get; set; }

        [Index]
        [Required]
        public DateTime Created { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string CreatedBy { get; set; }

        [Index]
        [Required]
        public DateTime Modified { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string ModifiedBy { get; set; }
    }   
}