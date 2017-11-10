namespace Lbl.Service
{
    using System;
    using System.CodeDom;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Linq.Expressions;

    using Lbl.Model;
    using Lbl.Repository;
    using Lbl.RequestModel;
    using Lbl.ViewModel;

    public class BaseService<T, TR, TV> where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T>
    {
        GenericRepository<T> repository;

        public BaseService()
        {
            repository = new GenericRepository<T>();
        }


        public IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            IQueryable<T> queryable = repository.Get();
            Expression<Func<T, bool>> expression = request.GetExpression();
            queryable = queryable.Where(expression);
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            return queryable;
        }


        public bool Add(T model)
        {
            return repository.Add(model);
        }


        public TV Detail(string id)
        {
            T x = repository.GetDetail(id);
            if (x == null)
            {
                throw new ObjectNotFoundException();
            }

            var vm = CreateVmInstance(x);
            return vm;
        }

        public List<TV> Search(TR request)
        {
            var queryable = SearchQueryable(request);
            var list = queryable.ToList().ConvertAll(CreateVmInstance);
            return list;
        }

        private static TV CreateVmInstance(T x)
        {
            return (TV)Activator.CreateInstance(typeof(TV), x);
        }

    }
}