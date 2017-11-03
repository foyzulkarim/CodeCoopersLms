namespace Lbl.RequestModel
{
    using System;
    using System.Linq.Expressions;

    using Lbl.Model;

    public class TeacherRequestModel: BaseRequestModel
    {
        Expression<Func<Teacher, bool>> expression;
        public Expression<Func<Teacher, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(this.Keyword))
            {
                this.expression = x => x.Name.Contains(this.Keyword);
            }

            return this.expression;
        }
    }
}