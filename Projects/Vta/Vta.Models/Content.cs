namespace Vta.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public enum ContentType
    {
        Video = 1,
        Quiz = 2,
        Assignment = 3
    }

    public class Content : Entity
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public ContentType Type { get; set; }

        public string LevelId { get; set; }

        public int No { get; set; }

        public int Point { get; set; }

        public bool IsPublic { get; set; }

        public int Duration { get; set; }

        public int Viewed { get; set; }

        [StringLength(500)]
        public string Video { get; set; }
        [StringLength(500)]
        public string Poster { get; set; }
        [StringLength(1500)]
        public string Description { get; set; }

        [Required]
        [StringLength(50)]
        public string Tags { get; set; }
        [ForeignKey("LevelId")]
        public virtual Level Level { get; set; }

        public virtual ICollection<Website> Websites { get; set; }

        public virtual ICollection<File> Files { get; set; }

        public virtual ICollection<StudentContent> StudentContents { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
    }
}
