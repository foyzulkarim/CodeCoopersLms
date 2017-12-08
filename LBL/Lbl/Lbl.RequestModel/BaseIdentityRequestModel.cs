using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

using Lbl.IdentityModel;

namespace Lbl.RequestModel
{
    public abstract class BaseIdentityRequestModel<T> where T : class
    {
        protected Expression<Func<T, bool>> ExpressionObject = e => true;
        public BaseIdentityRequestModel()
        {
            this.PerPageCount = 10;
            this.Page = 1;
            this.ExpressionObject = x => true;
        }

        public int Page { get; set; }

        public int PerPageCount { get; set; }

        public string OrderBy { get; set; }

        public bool IsAscending { get; set; }

        public string Keyword { get; set; }

        public Func<IQueryable<T>, IOrderedQueryable<T>> OrderByFunc()
        {
            string propertyName = OrderBy;
            bool ascending = IsAscending;
            var source = Expression.Parameter(typeof(IQueryable<T>), "source");
            var item = Expression.Parameter(typeof(T), "item");
            var member = Expression.Property(item, propertyName);
            var selector = Expression.Quote(Expression.Lambda(member, item));
            var body = Expression.Call(
                typeof(Queryable), @ascending ? "OrderBy" : "OrderByDescending",
                new[] { item.Type, member.Type },
                source, selector);
            var expr = Expression.Lambda<Func<IQueryable<T>, IOrderedQueryable<T>>>(body, source);
            var func = expr.Compile();
            return func;
        }

        public IQueryable<T> SkipAndTake(IQueryable<T> queryable)
        {
            if (Page != -1)
            {
                queryable = queryable.Skip((Page - 1) * PerPageCount).Take(PerPageCount);
            }

            return queryable;
        }

        public abstract Expression<Func<T, bool>> GetExpression();

        public virtual IQueryable<T> IncludeParents(IQueryable<T> queryable)
        {
            return queryable;
        }        
    }
}
