namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TeacherModelClassModified2 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Teachers", new[] { "Contact" });
            AddColumn("dbo.Teachers", "Phone", c => c.String(nullable: false, maxLength: 20));
            CreateIndex("dbo.Teachers", "Phone");
            DropColumn("dbo.Teachers", "Contact");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Teachers", "Contact", c => c.String(nullable: false, maxLength: 20));
            DropIndex("dbo.Teachers", new[] { "Phone" });
            DropColumn("dbo.Teachers", "Phone");
            CreateIndex("dbo.Teachers", "Contact");
        }
    }
}
