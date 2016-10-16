using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;

namespace ViewModel
{
    public class ContentDetailViewModel
    {
        public ContentDetailViewModel(Content content)
        {
            /*list of data to fetch
         * video url
         * description
         * type [class, quiz]
         * files
         * helpful sites
         * next class link
         * previous class link
         */
            this.Id = content.Id;
            this.Name = content.Name;
            ContentFile contentFile = content.ContentFiles.FirstOrDefault(x => x.IsActive && x.File.Type == 1);
            if (contentFile!=null)
            {
                File video = contentFile.File;
                this.VideoId = video.Id;
                this.VideoUrl = video.SourceUrl;
                this.VideoDescription = video.Description;
                this.Length = video.Length;
                this.TotalViews = video.TotalViews;
            }
          
            this.Type = content.Type;           
            this.Files =
                content.ContentFiles.Where(x => x.IsActive && x.File.Type == 2).Select(x => new FileViewModel(x.File)).ToList();
            this.HelpfulSites = content.ContentHelpSites.Select(x => new HelpSite() {Id = x.HelpSite.Id,Name = x.HelpSite.Name,Url = x.HelpSite.Url }).ToList();
            this.No = content.No;
            this.Level = new Level()
            {
                Id = content.Level.Id,
                Name = content.Level.Name,
                No = content.Level.No,
                Count = content.Level.Contents.Count,
                Contents =
                    content.Level.Contents.OrderBy(x=>x.No).Select(
                        x => new Content() {Id = x.Id, Name = x.Name, No = x.No, IsPublic = x.IsPublic, Type = x.Type})
                        .ToList()
            };
        }

        public Level Level { get; set; }

        public int Length { get; set; }

        public int No { get; set; }

        public List<HelpSite> HelpfulSites { get; set; }


        public string Name { get; set; }

        public Guid VideoId { get; set; }

        public string VideoUrl { get; set; }

        public string VideoDescription { get; set; }

        public int Type { get; set; }

        public Guid Id { get; set; }
      
        public int TotalViews { get; set; }

        public List<FileViewModel> Files { get; set; }
    }

    public class FileViewModel
    {
        public FileViewModel(File file)
        {
            this.Id = file.Id;
            this.Name = file.Name;
            this.SourceUrl = file.SourceUrl;
            this.TotalDownload = file.TotalViews;
        }

        public int TotalDownload { get; set; }

        public string SourceUrl { get; set; }

        public string Name { get; set; }

        public Guid Id { get; set; }
    }
}
