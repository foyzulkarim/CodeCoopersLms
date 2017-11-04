namespace Lbl.Service
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;

    using Lbl.Model;
    using Lbl.Repository;
    using Lbl.RequestModel;

    public class BaseService<T> where T: Entity
    {
        public IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            var repository = new GenericRepository<T>();
            IQueryable<T> queryable = repository.Get();
            Expression<Func<T, bool>> expression = request.GetExpression();
            queryable = queryable.Where(expression);
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            return queryable;           
        }
    }
}