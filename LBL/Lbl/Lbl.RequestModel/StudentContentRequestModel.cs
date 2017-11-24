using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.RequestModel
{
    using System.Data.Entity;
    using System.Linq.Expressions;
    using Lbl.Model;

    public class StudentContentRequestModel:BaseRequestModel<StudentContent>
    {
        public override Expression<Func<StudentContent, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x =>
                    x.Student.Name.Contains(Keyword) || x.Content.Title.Contains(Keyword);
            }

            this.ExpressionObject = this.ExpressionObject.And(this.GenerateBaseExpression());
            return this.ExpressionObject;
        }

        public override IQueryable<StudentContent> IncludeParents(IQueryable<StudentContent> queryable)
        {
            return queryable.Include(e => e.Student).Include(e => e.Content);
        }
    }
}
