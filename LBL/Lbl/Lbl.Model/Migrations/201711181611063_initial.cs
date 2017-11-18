namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Courses",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Title = c.String(nullable: false, maxLength: 100),
                        Price = c.Double(nullable: false),
                        Tags = c.String(nullable: false, maxLength: 100),
                        TotalStudentsEnrolled = c.Int(nullable: false),
                        PublishDate = c.DateTime(nullable: false),
                        TotalLecturesCount = c.Int(nullable: false),
                        SubTitle = c.String(nullable: false, maxLength: 100),
                        CourseSummary = c.String(maxLength: 150),
                        CourseShortDescription = c.String(maxLength: 250),
                        Language = c.String(maxLength: 50),
                        Achieve = c.String(maxLength: 50),
                        Requirements = c.String(maxLength: 50),
                        FullDescription = c.String(maxLength: 500),
                        TeacherId = c.String(maxLength: 128),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Teachers", t => t.TeacherId)
                .Index(t => t.Title)
                .Index(t => t.Price)
                .Index(t => t.Tags)
                .Index(t => t.TeacherId)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);
            
            CreateTable(
                "dbo.Teachers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 50),
                        Email = c.String(nullable: false, maxLength: 50),
                        Phone = c.String(nullable: false, maxLength: 20),
                        Address = c.String(nullable: false, maxLength: 100),
                        Designation = c.String(nullable: false, maxLength: 100),
                        Details = c.String(maxLength: 500),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name)
                .Index(t => t.Email)
                .Index(t => t.Phone)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 50),
                        Address = c.String(nullable: false, maxLength: 100),
                        Phone = c.String(nullable: false, maxLength: 20),
                        Email = c.String(maxLength: 50),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name)
                .Index(t => t.Phone)
                .Index(t => t.Email)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Courses", "TeacherId", "dbo.Teachers");
            DropIndex("dbo.Students", new[] { "ModifiedBy" });
            DropIndex("dbo.Students", new[] { "Modified" });
            DropIndex("dbo.Students", new[] { "CreatedBy" });
            DropIndex("dbo.Students", new[] { "Created" });
            DropIndex("dbo.Students", new[] { "Email" });
            DropIndex("dbo.Students", new[] { "Phone" });
            DropIndex("dbo.Students", new[] { "Name" });
            DropIndex("dbo.Teachers", new[] { "ModifiedBy" });
            DropIndex("dbo.Teachers", new[] { "Modified" });
            DropIndex("dbo.Teachers", new[] { "CreatedBy" });
            DropIndex("dbo.Teachers", new[] { "Created" });
            DropIndex("dbo.Teachers", new[] { "Phone" });
            DropIndex("dbo.Teachers", new[] { "Email" });
            DropIndex("dbo.Teachers", new[] { "Name" });
            DropIndex("dbo.Courses", new[] { "ModifiedBy" });
            DropIndex("dbo.Courses", new[] { "Modified" });
            DropIndex("dbo.Courses", new[] { "CreatedBy" });
            DropIndex("dbo.Courses", new[] { "Created" });
            DropIndex("dbo.Courses", new[] { "TeacherId" });
            DropIndex("dbo.Courses", new[] { "Tags" });
            DropIndex("dbo.Courses", new[] { "Price" });
            DropIndex("dbo.Courses", new[] { "Title" });
            DropTable("dbo.Students");
            DropTable("dbo.Teachers");
            DropTable("dbo.Courses");
        }
    }
}
