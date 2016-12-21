using System;
using System.Linq.Expressions;
using Vta.Models;

namespace Vta.RequestModels
{
    public class FileRequestModel : RequestModel<File>
    {
        public FileRequestModel(string keyword, string orderBy, string isAscending) : base(keyword, string.Empty, orderBy, isAscending)
        {
        }

        protected override Expression<Func<File, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword);
            }
            return ExpressionObj;
        }
    }
}