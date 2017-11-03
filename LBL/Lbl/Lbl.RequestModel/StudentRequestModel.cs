using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lbl.RequestModel
{
    using System.Linq.Expressions;

    using Lbl.Model;

    public class StudentRequestModel : BaseRequestModel
    {
        Expression<Func<Student, bool>> expression;

        public Expression<Func<Student, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.expression = x =>
                    x.Name.Contains(Keyword) || x.Phone.Contains(Keyword) || x.Email.Contains(Keyword);
            }
         
            return this.expression;
        } 
    }



}
