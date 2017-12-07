using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lbl.Model;

namespace Lbl.IdentityModel
{
    public class Resource : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public bool IsPublic { get; set; }
    }
}
