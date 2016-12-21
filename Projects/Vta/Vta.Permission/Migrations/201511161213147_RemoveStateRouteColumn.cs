using System.Data.Entity.Migrations;

namespace Vta.Permission.Migrations
{
    public partial class RemoveStateRouteColumn : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.ApplicationResources", "State");
            DropColumn("dbo.ApplicationResources", "Rotue");
        }

        public override void Down()
        {
            AddColumn("dbo.ApplicationResources", "Rotue", c => c.String());
            AddColumn("dbo.ApplicationResources", "State", c => c.String());
        }
    }
}