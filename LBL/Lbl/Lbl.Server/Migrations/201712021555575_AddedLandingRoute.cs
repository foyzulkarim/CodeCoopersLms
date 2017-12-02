namespace Lbl.Server.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedLandingRoute : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetRoles", "LandingRoute", c => c.String(maxLength: 20));
            AddColumn("dbo.AspNetRoles", "Discriminator", c => c.String(nullable: false, maxLength: 128));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetRoles", "Discriminator");
            DropColumn("dbo.AspNetRoles", "LandingRoute");
        }
    }
}
