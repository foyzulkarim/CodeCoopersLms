namespace Lbl.RequestModel
{
    using System;
    using System.Linq.Expressions;

    using Lbl.Model;

    public class TeacherRequestModel: BaseRequestModel<Teacher>
    {
        Expression<Func<Teacher, bool>> expression;
        public override Expression<Func<Teacher, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(this.Keyword))
            {
                this.expression = x => x.Name.Contains(this.Keyword);
            }

            return this.expression;
        }
    }


    public abstract class Bird
    {
        public int NumberOfWings { get; set; }

        public bool CanFly { get; set; }

        public abstract void Fly();
    }

    public class Penguin : Bird
    {
        public override void Fly()
        {
            Console.WriteLine("Sorry  guys, i can't fly");
        }
    }
}