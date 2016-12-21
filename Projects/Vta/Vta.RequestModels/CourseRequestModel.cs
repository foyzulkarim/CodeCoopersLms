using System;
using System.Linq;
using System.Linq.Expressions;
using Vta.Models;
using static System.String;

namespace Vta.RequestModels
{
    public class CourseRequestModel : RequestModel<Course>
    {
        public CourseRequestModel(string keyword, string orderBy,string isAscending): base(keyword,Empty, orderBy, isAscending)
        {
        }
        public double Fee { get; set; }
        protected override Expression<Func<Course, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword) || x.Description.Contains(Keyword);
            }
            if (Fee > 0)
            {
                ExpressionObj = ExpressionObj.And(x => x.Fee <= Fee);
            }
            return ExpressionObj;
        }        
    }
}