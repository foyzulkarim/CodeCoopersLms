namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class StudentDetailViewModel : BaseViewModel<Student>
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

    public class StudentViewModel :  BaseViewModel<Student>
    {
        public StudentViewModel(Student student)
            : base(student)
        {
            this.Name = student.Name;
            this.Phone = student.Phone;
            this.Email = student.Email;
            this.Address = student.Address;
        }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}