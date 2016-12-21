using System;
using System.Linq.Expressions;
using Vta.Models;
using static System.String;

namespace Vta.RequestModels
{
    public class CourseDetailRequestModel : RequestModel<Level>
    {
        
        public CourseDetailRequestModel(string id) : base(Empty,id,"No","True")
        {

        }
        protected override Expression<Func<Level, bool>> GetExpression()
        {
            if (!IsNullOrWhiteSpace(Id))
            {
                ExpressionObj = x => x.CourseId == Id;
            }
            return ExpressionObj;
        }
    }
}