using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vta.Models
{
    public class UserSession : Entity
    {
        [Required]
        public string UserId { get; set; }
        [Required]
        public DateTime Connected { get; set; }
        [Required]
        public DateTime Disconnected { get; set; }
        public string Info { get; set; }
    }


    public class Notification : Entity
    {        
        [Required]
        public string Text { get; set; }
        [Required]
        public int NotificationType { get; set; }
        [Required]
        public string CreatorId { get; set; }
        [Required]
        public string ReceiverId { get; set; }
        [Required]
        public string CourseId { get; set; }       
    }
}
