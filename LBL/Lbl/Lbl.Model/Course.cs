using System;

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

        [Required]
        public int TotalStudentsEnrolled { get; set; }

        [Required]
        public DateTime PublishDate { get; set; }

        [Required]
        public int TotalLecturesCount { get; set; }

        [Required]
        [MaxLength(100)]
        public string SubTitle { get; set; }

        
        [MaxLength(150)]
        public string CourseSummary { get; set; }

     
        [MaxLength(250)]
        public string CourseShortDescription { get; set; }

        
        [MaxLength(50)]
        public string Language { get; set; }

        
        [MaxLength(50)]
        public string Achieve { get; set; }

        
        [MaxLength(50)]
        public string Requirements { get; set; }

       
        [MaxLength(500)]
        public string FullDescription { get; set; }

        [Index]
        [MaxLength(128)]
        public string TeacherId { get; set; }

        [ForeignKey("TeacherId")]
        public virtual Teacher Teacher { get; set; }
    }
}