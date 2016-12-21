using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vta.Permission
{
    public enum ResourceType
    {
        State = 1,
        Data = 2
    }

    public class ApplicationResource
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string Name { get; set; }
        public int Type { get; set; }
        public bool IsPublic { get; set; }
        public virtual ICollection<ResourcePermission> Permissions { get; set; }
    }


    public class ResourcePermission
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public Guid ApplicationResourceId { get; set; }
        public string RoleName { get; set; }
        public bool IsAllowed { get; set; }

        public virtual ApplicationResource Resource { get; set; }
    }
}