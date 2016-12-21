using System;
using System.Linq.Expressions;
using Vta.Models;

namespace Vta.RequestModels
{
    public class WebsiteRequestModel : RequestModel<Website>
    {
        public WebsiteRequestModel(string keyword, string orderBy, string isAscending) : base(keyword, string.Empty, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Website, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword);
            }
            return ExpressionObj;
        }
    }
}