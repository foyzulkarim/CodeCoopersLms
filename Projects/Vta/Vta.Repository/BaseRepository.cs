using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace Vta.Repository
{
    public abstract class BaseRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        public DbContext DbContext;

        protected BaseRepository(DbContext db)
        {
            DbContext = db;
        }

        public virtual IQueryable<TEntity> Filter(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            var query = DbContext.Set<TEntity>().AsQueryable();
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (!string.IsNullOrWhiteSpace(includeProperties))
            {
                var properties = includeProperties.Split(new[] {','}, StringSplitOptions.RemoveEmptyEntries);
                foreach (var includeProperty in properties)
                {
                    query = query.Include(includeProperty);
                }
            }
            if (orderBy != null)
            {
                query = orderBy(query);
            }
        //    if (skip < 0) skip = 0;
       //     if (take <= 0) take = 10;
       //     query = query.Skip(skip).Take(take);
            return query;
        }

        public IQueryable<TEntity> Get()
        {
            var query = DbContext.Set<TEntity>().AsQueryable();
            return query;
        }


        public virtual TEntity Add(TEntity entity)
        {
            return DbContext.Set<TEntity>().Add(entity);
        }

        public virtual bool Delete(TEntity entity)
        {
            var remove = DbContext.Set<TEntity>().Remove(entity);
            return true;
        }

        public virtual bool Edit(TEntity entity)
        {
            DbContext.Entry(entity).State = EntityState.Modified;
            return true;
        }

        public virtual bool Save()
        {
            var changes = DbContext.SaveChanges();
            return changes > 0;
        }
    }
}