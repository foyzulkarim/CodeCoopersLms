using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vta.Models
{
    public partial class Level : Entity
    {
        [Index("IX_LevelName",1,IsUnique = true)]
        [StringLength(100)]
        public string Name { get; set; }
        public int No { get; set; }
        public string CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }

        public virtual ICollection<Content> Contents { get; set; }
    }

    public partial class Level : IValidatableObject
    {
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            VtaDbContext dbContext = GetDbContext(validationContext);
            yield break;
        }
    }
}
