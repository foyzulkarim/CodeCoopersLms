using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Vta.Models;
using static System.String;

namespace Vta.RequestModels
{
    public class ContentRequestModel : RequestModel<Content>
    {
        public string LevelId { get; set; }
        public ContentRequestModel(string levelId, string keyword,string orderBy, string isAscending) : base
            (keyword, Empty, orderBy, isAscending)
        {
            LevelId = levelId;
        }

        protected override Expression<Func<Content, bool>> GetExpression()
        {
            if (!IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.ToLower().Contains(Keyword);
            }
            if (!IsNullOrWhiteSpace(LevelId) && LevelId != new Guid().ToString())
            {
                ExpressionObj = ExpressionObj.And(x => x.LevelId == LevelId);
            }
            return ExpressionObj;
        }


    }
}
