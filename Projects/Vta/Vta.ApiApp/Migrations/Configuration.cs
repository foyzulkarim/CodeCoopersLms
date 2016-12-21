using System;
using System.Data.Entity.Migrations;
using System.Linq;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Vta.ApiApp.Models;

namespace Vta.ApiApp.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            AddRoles(context);

            const string foyzulkarimGmailCom = "foyzulkarim@gmail.com";
            var manager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));
            var applicationUser = manager.FindByName(foyzulkarimGmailCom);
            if (applicationUser == null)
            {
                var superAdmin = VtaRoles.SuperAdmin.ToString();
                var role = context.Roles.First(x => x.Name == superAdmin);
                var id = Guid.NewGuid().ToString();
                var userRole = new IdentityUserRole {RoleId = role.Id, UserId = id};

                var user = new ApplicationUser
                {
                    UserName = foyzulkarimGmailCom,
                    Email = foyzulkarimGmailCom,
                    Roles = {userRole},
                    Id = id,
                    ApplicationToken = Guid.NewGuid().ToString()
                };

                manager.Create(user, "Password@123");
            }
        }

        private static void AddRoles(ApplicationDbContext context)
        {
            var identityRoles = context.Roles.ToList();
            if (identityRoles.Count == 0)
            {
                var list = Enum.GetNames(typeof (VtaRoles)).ToList();
                foreach (var v in list)
                {
                    context.Roles.Add(new IdentityRole(v));
                }
            }
            context.SaveChanges();
        }
    }
}