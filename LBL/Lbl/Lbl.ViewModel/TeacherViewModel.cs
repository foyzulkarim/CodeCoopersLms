namespace Lbl.ViewModel
{
    using Lbl.Model;

    public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public TeacherViewModel(Teacher teacher)
            : base(teacher)
        {
            this.Name = teacher.Name;
            this.Email = teacher.Email;
            //this.Phone = teacher.Phone;
            //this.Address = teacher.Address;
            //this.Designation = teacher.Designation;
            //this.Details = teacher.Details;
        }

        public string Name { get; set; }
        public string Email { get; set; }
        //public string Phone { get; set; }
        //public string Address { get; set; }
        //public string Designation { get; set; }
        //public string Details { get; set; }


    }
}