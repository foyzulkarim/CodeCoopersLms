using Lbl.IdentityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace Lbl.RequestModel
{
    public class RoleRequestModel : BaseIdentityRequestModel<ApplicationRole>
    {
        public override Expression<Func<ApplicationRole, bool>> GetExpression()
        {
            if(!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = r => r.Name.Contains(Keyword);
            }

            return this.ExpressionObject;
        }
    }
}
