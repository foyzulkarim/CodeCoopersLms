namespace Lbl.Repository
{
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Linq;

    using Lbl.Model;

    public class GenericRepository<T> : IGenericRepository<T>
        where T : class 
    {
        protected DbContext db;

        public GenericRepository()
        {
            this.db = new BusinessDbContext();
        }

        public bool Add(T entity)
        {
            DbSet<T> dbSet = this.db.Set<T>();
            T add = dbSet.Add(entity);
            int i = this.db.SaveChanges();
            return i > 0;
        }

        public IQueryable<T> Get()
        {
            DbSet<T> dbSet = this.db.Set<T>();
            return dbSet.AsQueryable();
        }

        public T GetDetail(string id)
        {
            return this.db.Set<T>().Find(id);
        }

        public bool Edit(T entity)
        {
            this.db.Entry(entity).State = EntityState.Modified;
            int i = this.db.SaveChanges();
            return i > 0;
        }

        public bool Delete(string id)
        {
            var entity = GetDetail(id);
            if (entity != null)
            {
                this.db.Set<T>().Remove(entity);
                int i = this.db.SaveChanges();
                return i > 0;
            }

            return true;
        }
    }
}