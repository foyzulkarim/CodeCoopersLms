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

    public class ContentRequestModel : BaseRequestModel<Content>
    {
        public override Expression<Func<Content, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x => x.Title.Contains(Keyword) || x.Tags.Contains(Keyword)
                || x.Course.Id.Equals(Keyword);
            }

            this.ExpressionObject = this.ExpressionObject.And(this.GenerateBaseExpression());
            return this.ExpressionObject;
            
        }

        public override IQueryable<Content> IncludeParents(IQueryable<Content> queryable)
        {
            return queryable.Include(c => c.Course);
        }
    }
}
