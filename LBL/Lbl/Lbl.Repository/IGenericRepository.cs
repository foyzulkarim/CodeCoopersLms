namespace Lbl.Repository
{
    using System.Linq;

    using Lbl.Model;

    public interface IGenericRepository<T>
        where T : class
    {
        bool Add(T entity);

        IQueryable<T> Get();

        T GetDetail(string id);

        bool Edit(T entity);

        bool Delete(string id);
    }
}