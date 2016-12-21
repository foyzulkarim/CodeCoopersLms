using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;
using Vta.Models;
using static System.String;

namespace Vta.RequestModels
{
    public class LevelRequestModel : RequestModel<Level>
    {
        public LevelRequestModel(string keyword, string orderBy, string isAscending):base(keyword,Empty,orderBy,isAscending)
        {
        }
        protected override Expression<Func<Level, bool>> GetExpression()
        {
            if (!IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.Contains(Keyword);
            }
            return ExpressionObj;
        }
    }
}