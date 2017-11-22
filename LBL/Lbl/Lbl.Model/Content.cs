using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Content : Entity
    {
        [Required]
        public int Serial { get; set; }

        [Index]
        [MaxLength(128)]
        public string CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }

        [Index]
        [Required]
        [MaxLength(250)]
        public string Title { get; set; }

        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        [MaxLength(250)]
        public string Url { get; set; }

        [Required]
        public int TotalSeconds { get; set; }

        [Required]
        [MaxLength(250)]
        public string Tags { get; set; }

        [Required]
        public int Category { get; set; }
    }
}
