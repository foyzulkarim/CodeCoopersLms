namespace Lbl.Model
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Teacher : Entity
    {
        [Index]
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }        
    }
}