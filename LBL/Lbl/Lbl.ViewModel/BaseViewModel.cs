namespace Lbl.ViewModel
{
    using System;

    using Lbl.Model;

    public class BaseViewModel
    {
        public BaseViewModel(Entity entity)
        {
            Id = entity.Id;
            Created = entity.Created;
            CreatedBy = entity.CreatedBy;
            Modified = entity.Modified;
            ModifiedBy = entity.ModifiedBy;
        }

        public string Id { get; set; }

        public DateTime Created { get; set; }

        public string CreatedBy { get; set; }

        public DateTime Modified { get; set; }

        public string ModifiedBy { get; set; }
    }
}