using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    class Enrollment : Entity
    {
        [Index]
        [MaxLength(128)]
        public string StudentId { get; set; }

        [ForeignKey("StudentId")]
        public virtual Student Student { get; set; }

        [Index]
        [MaxLength(128)]
        public string CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }

        [Required]
        public bool IsPaid { get; set; }

        [Required]
        public double PaidTotal { get; set; }

        [Required]
        public double Due { get; set; }
        
        [Required]
        public bool IsCompleted { get; set; }

        public int? CompletedContent { get; set; }

    }
}
