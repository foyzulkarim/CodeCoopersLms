namespace Lbl.Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Course : Entity
    {
        [Index]
        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Index]
        [Required]
        public double Price { get; set; }

        [Index]
        [Required]
        [MaxLength(100)]
        public string Tags { get; set; }

        [Index]
        [MaxLength(128)]
        public string TeacherId { get; set; }

        [ForeignKey("TeacherId")]
        public virtual Teacher Teacher { get; set; }
    }
}