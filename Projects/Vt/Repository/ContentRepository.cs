using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;

namespace Repository
{
    public class ContentRepository : IContentRepository
    {
        public IQueryable<Content> GetContents()
        {
            
        }
    }

    public interface IContentRepository
    {
        IQueryable<Content> GetContents();
    }
}
