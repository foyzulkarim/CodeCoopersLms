namespace Vta.Service
{
    public interface IBaseService<T> where T : class
    {
        bool Add(T entity);
        bool Delete(T entity);
        bool Edit(T entity);
    }
}