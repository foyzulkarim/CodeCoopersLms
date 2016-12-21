using System;
using System.Linq.Expressions;
using Vta.Models;

namespace Vta.RequestModels
{
    public class OptionRequestModel : RequestModel<Option>
    {
        public bool ShowOnlyRightAnswers { get; set; }
        public OptionRequestModel(string keyword, string orderBy, string isAscending, bool showOnlyRightAnswers) : base(keyword, string.Empty, orderBy, isAscending)
        {
            ShowOnlyRightAnswers = showOnlyRightAnswers;
        }

        protected override Expression<Func<Option, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword);
            }
            if (ShowOnlyRightAnswers)
            {
                ExpressionObj.And(x => x.IsAnswer);
            }
            return ExpressionObj;
        }
    }
}