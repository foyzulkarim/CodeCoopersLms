using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vta.Models
{
    public partial class Course : Entity
    {
        [Required]
        [Index("IX_CourseName", 1, IsUnique = true)]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [StringLength(1000)]
        public string Description { get; set; }

        [Required]
        [StringLength(100)]
        public string Prerequisite { get; set; }

        [Required]
        public int Fee { get; set; }

        [Required]
        public string Duration { get; set; }

        [StringLength(500)]
        public string ImagePath { get; set; }

        [StringLength(500)]
        public string VideoPath { get; set; }

        public virtual ICollection<Level> Levels { get; set; }
    }

    public partial class Course : IValidatableObject
    {
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            VtaDbContext dbContext = GetDbContext(validationContext);
            yield break;
        }
    }
}