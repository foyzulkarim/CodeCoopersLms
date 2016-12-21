namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

   
    public class Question : Entity
    {
        
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(200)]
        public string Description { get; set; }

        public string ContentId { get; set; }

        public int SerialNo { get; set; }

        public bool IsActive { get; set; }
        [ForeignKey("ContentId")]
        public virtual Content Content { get; set; }
        public virtual ICollection<Option> Options { get; set; }        
    }
}
