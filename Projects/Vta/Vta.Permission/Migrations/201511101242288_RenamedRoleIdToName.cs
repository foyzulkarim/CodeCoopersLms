using System.Data.Entity.Migrations;

namespace Vta.Permission.Migrations
{
    public partial class RenamedRoleIdToName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ResourcePermissions", "RoleName", c => c.String());
            DropColumn("dbo.ResourcePermissions", "RoleId");
        }

        public override void Down()
        {
            AddColumn("dbo.ResourcePermissions", "RoleId", c => c.String());
            DropColumn("dbo.ResourcePermissions", "RoleName");
        }
    }
}