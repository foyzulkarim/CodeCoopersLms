namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public class Student : Entity
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        
        [StringLength(50)]
        public string Phone { get; set; }

        public int Point { get; set; }

        public virtual ICollection<StudentContent> StudentContents { get; set; }
    }

   
}
