namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class TeacherDetailViewModel : BaseViewModel
    {
        public TeacherDetailViewModel(Teacher teacher)
            : base(teacher)
        {
            this.Name = teacher.Name;
        }

        public string Name { get; set; }
    }
}