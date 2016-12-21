namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;


    public class Website: Entity
    {

        public string ContentId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(50)]
        public string Url { get; set; }

        [Required]
        [StringLength(50)]
        public string Tags { get; set; }

        [ForeignKey("ContentId")]
        public virtual Content Content { get; set; }        
    }
}
