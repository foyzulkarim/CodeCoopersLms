namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    
    public class Option : Entity
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        public int SerialNo { get; set; }
        public bool IsAnswer { get; set; }
        public string QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }
    }
}
