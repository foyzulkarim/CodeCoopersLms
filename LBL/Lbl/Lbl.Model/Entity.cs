using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Entity
    {

        public string Id { get; set; }

        [Index]
        [Required]
        public DateTime Created { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string CreatedBy { get; set; }

        [Index]
        [Required]
        public DateTime Modified { get; set; }

        [Index]
        [Required]
        [MaxLength(50)]
        public string ModifiedBy { get; set; }
    }
}
