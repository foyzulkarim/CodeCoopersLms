using System.Data.Entity.Migrations;

namespace Vta.Permission.Migrations
{
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ResourcePermissions",
                c => new
                {
                    Id = c.Guid(false, true),
                    ApplicationResourceId = c.Guid(false),
                    RoleId = c.String(),
                    IsAllowed = c.Boolean(false)
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ApplicationResources", t => t.ApplicationResourceId, true)
                .Index(t => t.ApplicationResourceId);

            CreateTable(
                "dbo.ApplicationResources",
                c => new
                {
                    Id = c.Guid(false, true),
                    Name = c.String(),
                    Type = c.Int(false)
                })
                .PrimaryKey(t => t.Id);
        }

        public override void Down()
        {
            DropForeignKey("dbo.ResourcePermissions", "ApplicationResourceId", "dbo.ApplicationResources");
            DropIndex("dbo.ResourcePermissions", new[] {"ApplicationResourceId"});
            DropTable("dbo.ApplicationResources");
            DropTable("dbo.ResourcePermissions");
        }
    }
}