namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedEmail : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "Email", c => c.String(maxLength: 50));
            CreateIndex("dbo.Students", "Email");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Students", new[] { "Email" });
            DropColumn("dbo.Students", "Email");
        }
    }
}
