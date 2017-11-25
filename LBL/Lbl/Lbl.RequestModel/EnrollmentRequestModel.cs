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

    public class EnrollmentRequestModel : BaseRequestModel<Enrollment>
    {
        public override Expression<Func<Enrollment, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x =>
                    x.Student.Name.Contains(Keyword) || x.Course.Title.Contains(Keyword);
            }

            this.ExpressionObject = this.ExpressionObject.And(this.GenerateBaseExpression());
            return this.ExpressionObject;
        }

        public override IQueryable<Enrollment> IncludeParents(IQueryable<Enrollment> queryable)
        {
            return queryable.Include(e => e.Student).Include(e => e.Course);
        }
    }
}
