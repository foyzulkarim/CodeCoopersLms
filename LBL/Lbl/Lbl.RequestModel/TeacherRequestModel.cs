namespace Lbl.RequestModel
{
    using System;
    using System.Linq.Expressions;

    using Lbl.Model;

    public class TeacherRequestModel : BaseRequestModel<Teacher>
    {

        public override Expression<Func<Teacher, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(this.Keyword))
            {
                this.ExpressionObject = x => x.Name.Contains(this.Keyword) || x.Email.Contains(this.Keyword);
            }
            this.ExpressionObject = ExpressionObject.And(this.GenerateBaseExpression());

            return this.ExpressionObject;
        }
    }
}