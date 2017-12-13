namespace Lbl.Service
{
    using System;
    using System.CodeDom;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.Entity;
    using System.Data.Entity.Core;
    using System.Linq;
    using System.Linq.Expressions;

    using Lbl.Model;
    using Lbl.Repository;
    using Lbl.RequestModel;
    using Lbl.ViewModel;

    public class BaseService<C, T, TR, TV> where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T>
        where C : DbContext, new()
    {
        GenericRepository<C, T> repository;

        public BaseService()
        {
            repository = new GenericRepository<C, T>();
        }


        public IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {          
            IQueryable<T> queryable = repository.Get();
            Expression<Func<T, bool>> expression = request.GetExpression();
            queryable = queryable.Where(expression);
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            queryable = request.IncludeParents(queryable);
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
            List<T> list1 = queryable.ToList();
            var list = list1.ConvertAll(CreateVmInstance);
            return list;
        }

        private static TV CreateVmInstance(T x)
        {
            return (TV)Activator.CreateInstance(typeof(TV), x);
        }

    }
}