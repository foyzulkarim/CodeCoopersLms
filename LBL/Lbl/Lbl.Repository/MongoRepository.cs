using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.Repository
{
    using Lbl.Model;

    public class MongoRepository<T> : IGenericRepository<T>
        where T : Entity
    {
        public bool Add(T entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> Get()
        {
            throw new NotImplementedException();
        }

        public T GetDetail(string id)
        {
            throw new NotImplementedException();
        }

        public bool Edit(T entity)
        {
            throw new NotImplementedException();
        }

        public bool Delete(string id)
        {
            throw new NotImplementedException();
        }
    }
}
