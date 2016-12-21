using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;

namespace Vta.Permission.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<PermissionDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PermissionDbContext context)
        {
            var publicNames = new List<string>
            {
                "home",
                "signin",
                "denied",
                "register"
            };
            var privateNames = new List<string>
            {
                "user-profile",
                "manage-users"
            };

            InsertResources(context, publicNames, true);
            InsertResources(context, privateNames, false);

            context.SaveChanges();
        }

        private static void InsertResources(PermissionDbContext context, List<string> names, bool isPublic)
        {
            foreach (var name in names)
            {
                var resource = context.Resources.FirstOrDefault(x => x.Name == name);
                if (resource == null)
                {
                    var r = new ApplicationResource
                    {
                        IsPublic = isPublic,
                        Name = name,
                        Type = (int) ResourceType.State
                    };
                    context.Resources.Add(r);
                }
            }
        }
    }
}