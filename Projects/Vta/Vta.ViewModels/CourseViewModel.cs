using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Vta.Models;

namespace Vta.ViewModels
{

    public class CourseViewModel
    {
        public CourseViewModel()
        {

        }
        public CourseViewModel(Course input)
        {
            Id = input.Id;
            Name = input.Name;
            Description = input.Description;
            Fee = input.Fee;
            Duration = input.Duration;
        }

        public string Id { get; set; }

        public string Duration { get; set; }

        public string Description { get; set; }

        public int Fee { get; set; }

        public string Name { get; set; }

        public string Prerequisite { get; set; }

    }

    public class CourseDetailViewModel
    {
        public CourseDetailViewModel()
        {

        }
        public CourseDetailViewModel(Course course)
        {
            CourseViewModel = new CourseViewModel(course);
            Levels = course.Levels.Select(x => new LevelDetailViewModel(x)).ToList();
        }

        public CourseViewModel CourseViewModel { get; set; }
        public List<LevelDetailViewModel> Levels { get; set; }
    }

    public class ContentDetailViewModel
    {
        public ContentDetailViewModel()
        {

        }

        public ContentDetailViewModel(Content content)
        {
            Course = new CourseViewModel() { Id = content.Level.Course.Id, Name = content.Level.Course.Name };
            Level = new LevelViewModel(content.Level);
            Name = content.Name;
            No = content.No;
            Duration = content.Duration;
            Video = content.Video;
            Poster = content.Poster;
            NextContentId = new Guid().ToString();
            PreviousContentId = new Guid().ToString();
            Description = content.Description;
            Files = content.Files.Select(x => new FileViewModel(x)).ToList();
            Websites = content.Websites.Select(x => new WebsiteViewModel(x)).ToList();
        }

        public string Name { get; set; }

        public List<WebsiteViewModel> Websites { get; set; }

        public List<FileViewModel> Files { get; set; }

        public string Description { get; set; }

        public string PreviousContentId { get; set; }

        public string NextContentId { get; set; }

        public string Poster { get; set; }

        public string Video { get; set; }

        public int Duration { get; set; }

        public int No { get; set; }

        public LevelViewModel Level { get; set; }

        public CourseViewModel Course { get; set; }
    }

    public class LevelViewModel
    {
        public LevelViewModel(Level level)
        {
            Id = level.Id;
            Name = level.Name;
            No = level.No;
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public int No { get; set; }
    }

    public class LevelDetailViewModel
    {
        public LevelDetailViewModel(Level level)
        {
            Id = level.Id;
            Name = level.Name;
            No = level.No;
            Contents = level.Contents.OrderBy(x => x.No).Select(x => new ContentViewModel(x)).ToList();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public int No { get; set; }
        public List<ContentViewModel> Contents { get; set; }
    }

    public class ContentViewModel
    {
        public ContentViewModel(Content c)
        {
            Id = c.Id;
            Name = c.Name;
            Type = c.Type;
            No = c.No;
            Point = c.Point;
            IsPublic = c.IsPublic;
            Duration = c.Duration;
        }

        public int Duration { get; set; }

        public string Id { get; set; }
        public string Name { get; set; }
        public ContentType Type { get; set; }
        public int No { get; set; }
        public int Point { get; set; }
        public bool IsPublic { get; set; }
    }

    public class FileViewModel
    {
        public FileViewModel(File file)
        {
            Id = file.Id;
            Name = file.Name;
            Description = file.Description;
            Size = file.Size;
           // Url = file.ConvertedUrl;
        }

        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Size { get; set; }

       // public string Url { get; set; }
    }

    public class WebsiteViewModel
    {
        public WebsiteViewModel(Website w)
        {
            Id = w.Id;
            Name = w.Name;
            Url = w.Url;

        }

        public string Url { get; set; }

        public string Name { get; set; }

        public string Id { get; set; }
    }
}