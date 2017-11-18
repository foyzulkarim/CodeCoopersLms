namespace Lbl.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CourseModelClassUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "TotalStudentsEnrolled", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "PublishDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Courses", "TotalLecturesCount", c => c.Int(nullable: false));
            AddColumn("dbo.Courses", "SubTitle", c => c.String(nullable: false, maxLength: 100));
            AddColumn("dbo.Courses", "CourseSummary", c => c.String(maxLength: 150));
            AddColumn("dbo.Courses", "CourseShortDescription", c => c.String(maxLength: 250));
            AddColumn("dbo.Courses", "Language", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "Achieve", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "Requirements", c => c.String(maxLength: 50));
            AddColumn("dbo.Courses", "FullDescription", c => c.String(maxLength: 500));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Courses", "FullDescription");
            DropColumn("dbo.Courses", "Requirements");
            DropColumn("dbo.Courses", "Achieve");
            DropColumn("dbo.Courses", "Language");
            DropColumn("dbo.Courses", "CourseShortDescription");
            DropColumn("dbo.Courses", "CourseSummary");
            DropColumn("dbo.Courses", "SubTitle");
            DropColumn("dbo.Courses", "TotalLecturesCount");
            DropColumn("dbo.Courses", "PublishDate");
            DropColumn("dbo.Courses", "TotalStudentsEnrolled");
        }
    }
}
