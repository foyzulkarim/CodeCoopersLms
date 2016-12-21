using System;
using System.Linq.Expressions;
using Vta.Models;

namespace Vta.RequestModels
{
    public class QuestionRequestModel : RequestModel<Question>
    {
        public QuestionRequestModel(string keyword, string orderBy, string isAscending) : base(keyword, string.Empty, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Question, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword);
            }
            return ExpressionObj;
        }
    }
}