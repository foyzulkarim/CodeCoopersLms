using System;
using System.Linq.Expressions;
using Vta.Models;
using static System.String;

namespace Vta.RequestModels
{
    public class ContentDetailRequestModel : RequestModel<Content>
    {
        public ContentDetailRequestModel(string id) : base(Empty, id, Empty, Empty)
        {
            
        }

        protected override Expression<Func<Content, bool>> GetExpression()
        {
            if (!IsNullOrWhiteSpace(Id))
            {
                ExpressionObj = x => x.Id == Id;
            }
            return ExpressionObj;
        }
    }
}