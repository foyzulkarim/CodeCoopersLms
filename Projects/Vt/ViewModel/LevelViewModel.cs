using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;

namespace ViewModel
{
    public class SerialNumbers
    {
        public int ContentNo { get; set; }
        public int LevelNo { get; set; }
    }


    public class LevelViewModel
    {
        
        public LevelViewModel(Level level)
        {
            Id = level.Id;
            Name = level.Name;
            No = level.No;
            Contents = level.Contents.ToList().Select(x => new ContentViewModel(x)).OrderBy(x=>x.No).ToList();
            Count = Contents.Count;
        }

        public int No { get; set; }

        public int Count { get; set; }

        public string Name { get; set; }

        public Guid Id { get; private set; }
        public List<ContentViewModel> Contents { get; private set; }
    }
}
