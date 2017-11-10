namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public TeacherViewModel(Teacher teacher)
            : base(teacher)
        {
            this.Name = teacher.Name;
        }

        public string Name { get; set; }
    }
}