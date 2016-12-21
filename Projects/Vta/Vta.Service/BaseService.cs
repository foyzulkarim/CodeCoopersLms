using System;
using Vta.Repository;

namespace Vta.Service
{
    public class BaseService<T> : IBaseService<T> where T : class
    {
        protected BaseRepository<T> Repository;

        public BaseService(BaseRepository<T> repository)
        {
            
            Repository = repository;
        }

        public bool Add(T entity)
        {
            var add = Repository.Add(entity);
            var save = Repository.Save();
            return save;
        }

        public bool Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public bool Edit(T entity)
        {
            throw new NotImplementedException();
        }
    }
}