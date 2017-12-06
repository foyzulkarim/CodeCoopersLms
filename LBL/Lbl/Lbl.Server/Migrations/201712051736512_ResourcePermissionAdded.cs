namespace Lbl.Server.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ResourcePermissionAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Permissions",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(maxLength: 128),
                        ResourceId = c.String(maxLength: 128),
                        IsAllowed = c.Boolean(nullable: false),
                        IsDisabled = c.Boolean(nullable: false),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId)
                .ForeignKey("dbo.Resources", t => t.ResourceId)
                .Index(t => t.RoleId)
                .Index(t => t.ResourceId)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);
            
            CreateTable(
                "dbo.Resources",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false),
                        Type = c.String(nullable: false),
                        IsPublic = c.Boolean(nullable: false),
                        Created = c.DateTime(nullable: false),
                        CreatedBy = c.String(nullable: false, maxLength: 50),
                        Modified = c.DateTime(nullable: false),
                        ModifiedBy = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Created)
                .Index(t => t.CreatedBy)
                .Index(t => t.Modified)
                .Index(t => t.ModifiedBy);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Permissions", "ResourceId", "dbo.Resources");
            DropForeignKey("dbo.Permissions", "RoleId", "dbo.AspNetRoles");
            DropIndex("dbo.Resources", new[] { "ModifiedBy" });
            DropIndex("dbo.Resources", new[] { "Modified" });
            DropIndex("dbo.Resources", new[] { "CreatedBy" });
            DropIndex("dbo.Resources", new[] { "Created" });
            DropIndex("dbo.Permissions", new[] { "ModifiedBy" });
            DropIndex("dbo.Permissions", new[] { "Modified" });
            DropIndex("dbo.Permissions", new[] { "CreatedBy" });
            DropIndex("dbo.Permissions", new[] { "Created" });
            DropIndex("dbo.Permissions", new[] { "ResourceId" });
            DropIndex("dbo.Permissions", new[] { "RoleId" });
            DropTable("dbo.Resources");
            DropTable("dbo.Permissions");
        }
    }
}
