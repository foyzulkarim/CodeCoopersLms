using System.ComponentModel;

namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public class File : Entity
    {
        [Required]
        public string ContentId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

       
        [StringLength(200)]
        public string Description { get; set; }

        
        [StringLength(500)]
        public string SourceUrl { get; set; }
       
        [StringLength(500)]
        public string ConvertedUrl { get; set; }
        
        public int Length { get; set; }

        public int Size { get; set; }

        public int TotalViews { get; set; }

        public int Complexity { get; set; }

        public int SerialNo { get; set; }

        public bool IsActive { get; set; }
        public bool IsUploaded { get; set; }
        public bool IsConverted { get; set; }

     
        [StringLength(50)]
        public string Tags { get; set; }

        public int Type { get; set; }

        [ForeignKey("ContentId")]        
        public virtual Content Content { get; set; }
    }
}
