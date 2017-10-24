namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class StudentDetailViewModel : BaseViewModel
    {
        public StudentDetailViewModel(Student student) : base(student)
        {
            Phone = student.Phone;
            Name = student.Name;
            Address = student.Address;
        }

        public string Name { get; set; }
        public string Phone { get; set; }

        public string Address { get; set; }
    }
}