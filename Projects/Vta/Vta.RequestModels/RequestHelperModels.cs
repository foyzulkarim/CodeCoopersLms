using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using static System.String;

namespace Vta.RequestModels
{
    public class OrderByRequest
    {
        public string PropertyName { get; set; }
        public bool IsAscending { get; set; }
    }

   
    public abstract class RequestModel<TModel>
    {
        protected Expression<Func<TModel, bool>> ExpressionObj = e => true;

        protected RequestModel(string keyword, string id, string orderBy, string isAscending)
        {
            if (string.IsNullOrEmpty(keyword))
            {
                keyword = "";
            }
            Id = id;
            Keyword = keyword.ToLower();
            _request = new OrderByRequest
            {
                PropertyName = string.IsNullOrWhiteSpace(orderBy)?"Modified":orderBy,
                IsAscending = isAscending == "True"
            };
        }

        public int PerPageCount => 10;
        public List<string> Tables { get; set; }
        public string Id { get; set; }
        protected  OrderByRequest _request;
        public string Keyword { get; set; }
        
        protected Func<IQueryable<TSource>, IOrderedQueryable<TSource>> OrderByFunc<TSource>()
        {
            string propertyName = _request.PropertyName;
            bool ascending = _request.IsAscending;
            var source = Expression.Parameter(typeof(IQueryable<TSource>), "source");
            var item = Expression.Parameter(typeof(TSource), "item");
            var member = Expression.Property(item, propertyName);
            var selector = Expression.Quote(Expression.Lambda(member, item));
            var body = Expression.Call(
                typeof(Queryable), @ascending ? "OrderBy" : "OrderByDescending",
                new Type[] { item.Type, member.Type },
                source, selector);
            var expr = Expression.Lambda<Func<IQueryable<TSource>, IOrderedQueryable<TSource>>>(body, source);
            var func = expr.Compile();
            return func;
        }

        protected abstract Expression<Func<TModel, bool>> GetExpression();

        public  IQueryable<TModel> GetOrderedData(IQueryable<TModel> queryable)
        {
            queryable = queryable.Where(GetExpression());
            queryable = OrderByFunc<TModel>()(queryable);
            return queryable;
        }

        public IQueryable<TModel> GetData(IQueryable<TModel> queryable)
        {
            return queryable.Where(GetExpression());                        
        }

        public TModel GetFirstData(IQueryable<TModel> queryable)
        {
            return queryable.First(GetExpression());
        }
    }
  
    public static class ExpressionHelper
    {
        public static Expression<T> Compose<T>(this Expression<T> first, Expression<T> second,
            Func<Expression, Expression, Expression> merge)
        {
            // build parameter map (from parameters of second to parameters of first)
            var map = first.Parameters.Select((f, i) => new { f, s = second.Parameters[i] })
                .ToDictionary(p => p.s, p => p.f);

            // replace parameters in the second lambda expression with parameters from the first
            var secondBody = ParameterRebinder.ReplaceParameters(map, second.Body);

            // apply composition of lambda expression bodies to parameters from the first expression 
            return Expression.Lambda<T>(merge(first.Body, secondBody), first.Parameters);
        }

        public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> first,
            Expression<Func<T, bool>> second)
        {
            return first.Compose(second, Expression.And);
        }

        public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> first,
            Expression<Func<T, bool>> second)
        {
            return first.Compose(second, Expression.Or);
        }
    }

    public class ParameterRebinder : ExpressionVisitor
    {
        private readonly Dictionary<ParameterExpression, ParameterExpression> map;

        public ParameterRebinder(Dictionary<ParameterExpression, ParameterExpression> map)
        {
            this.map = map ?? new Dictionary<ParameterExpression, ParameterExpression>();
        }

        public static Expression ReplaceParameters(Dictionary<ParameterExpression, ParameterExpression> map,
            Expression exp)
        {
            return new ParameterRebinder(map).Visit(exp);
        }

        protected override Expression VisitParameter(ParameterExpression p)
        {
            ParameterExpression replacement;
            if (map.TryGetValue(p, out replacement))
            {
                p = replacement;
            }
            return base.VisitParameter(p);
        }
    }
}