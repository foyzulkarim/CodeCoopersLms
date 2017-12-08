using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Lbl.IdentityModel;

namespace Lbl.RequestModel
{
    public class PermissionRequestModel : BaseRequestModel<Permission>
    {
        public override Expression<Func<Permission, bool>> GetExpression()
        {
            if(!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = p => p.Resource.Name.Contains(Keyword)
                || p.ApplicationRole.Name.Contains(Keyword);
            }

            return this.ExpressionObject;
        }
    }
}
