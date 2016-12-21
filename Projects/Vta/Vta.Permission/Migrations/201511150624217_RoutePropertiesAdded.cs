using System.Data.Entity.Migrations;

namespace Vta.Permission.Migrations
{
    public partial class RoutePropertiesAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ApplicationResources", "State", c => c.String());
            AddColumn("dbo.ApplicationResources", "Rotue", c => c.String());
            AddColumn("dbo.ApplicationResources", "IsPublic", c => c.Boolean(true));
        }

        public override void Down()
        {
            DropColumn("dbo.ApplicationResources", "IsPublic");
            DropColumn("dbo.ApplicationResources", "Rotue");
            DropColumn("dbo.ApplicationResources", "State");
        }
    }
}