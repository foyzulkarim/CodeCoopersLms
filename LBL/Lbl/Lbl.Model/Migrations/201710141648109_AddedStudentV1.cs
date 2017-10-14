namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class AddedStudentV1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 50),
                        Address = c.String(nullable: false, maxLength: 100),
                        Phone = c.String(nullable: false, maxLength: 20),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name)
                .Index(t => t.Phone)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);

        }

        public override void Down()
        {
            DropIndex("dbo.Students", new[] { "ModifiedBy" });
            DropIndex("dbo.Students", new[] { "Modified" });
            DropIndex("dbo.Students", new[] { "CreatedBy" });
            DropIndex("dbo.Students", new[] { "Created" });
            DropIndex("dbo.Students", new[] { "Phone" });
            DropIndex("dbo.Students", new[] { "Name" });
            DropTable("dbo.Students");
        }
    }
}
