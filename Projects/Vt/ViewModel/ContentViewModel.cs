using System;
using DataAccess;

namespace ViewModel
{
    public class ContentViewModel
    {
        public ContentViewModel()
        {
            
        }
        public ContentViewModel(Content c)
        {
            Id = c.Id;
            Name = c.Name;
            No = c.No;
            Point = c.Point;
            Type = c.Type;
            IsPublic = c.IsPublic;            
        }

        public bool IsPublic { get; set; }

        public int Type { get; set; }

        public int Point { get; set; }

        public int No { get; set; }

        public Guid Id { get; set; }
        public string Name { get; set; }

    }
}