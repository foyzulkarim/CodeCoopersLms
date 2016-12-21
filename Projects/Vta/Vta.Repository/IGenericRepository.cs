using System;
using System.Linq;
using System.Linq.Expressions;

namespace Vta.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        T Add(T entity);
        bool Delete(T entity);
        bool Edit(T entity);
        bool Save();

        IQueryable<T> Filter(
            Expression<Func<T, bool>> filter = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            string includeProperties = "");

        IQueryable<T> Get();
    }
}