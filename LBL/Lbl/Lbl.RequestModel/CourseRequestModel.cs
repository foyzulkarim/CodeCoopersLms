using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.RequestModel
{
    using System.Linq.Expressions;

    using Lbl.Model;

    public class CourseRequestModel : BaseRequestModel<Course>
    {
        public override Expression<Func<Course, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x =>
                    x.Title.Contains(Keyword) || x.Tags.Contains(Keyword);
            }

            this.ExpressionObject = this.ExpressionObject.And(this.GenerateBaseExpression());
            return this.ExpressionObject;
        }
    }
}
