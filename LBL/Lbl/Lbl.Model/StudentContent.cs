using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    class StudentContent : Entity
    {
        [Index]
        [MaxLength(128)]
        public string StudentId { get; set; }

        [ForeignKey("StudentId")]
        public virtual Student Student { get; set; }

        [Index]
        [MaxLength(128)]
        public string ContentId { get; set; }

        [ForeignKey("ContentId")]
        public virtual Content Content { get; set; }

        public int? WatchedSeconds { get; set; }

    }
}
