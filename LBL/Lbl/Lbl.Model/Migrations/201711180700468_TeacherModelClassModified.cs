namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TeacherModelClassModified : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "Email", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Teachers", "Contact", c => c.String(nullable: false, maxLength: 20));
            AddColumn("dbo.Teachers", "Address", c => c.String(nullable: false, maxLength: 100));
            AddColumn("dbo.Teachers", "Designation", c => c.String(nullable: false, maxLength: 100));
            AddColumn("dbo.Teachers", "Details", c => c.String(maxLength: 500));
            CreateIndex("dbo.Teachers", "Email");
            CreateIndex("dbo.Teachers", "Contact");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Teachers", new[] { "Contact" });
            DropIndex("dbo.Teachers", new[] { "Email" });
            DropColumn("dbo.Teachers", "Details");
            DropColumn("dbo.Teachers", "Designation");
            DropColumn("dbo.Teachers", "Address");
            DropColumn("dbo.Teachers", "Contact");
            DropColumn("dbo.Teachers", "Email");
        }
    }
}
