using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lbl.IdentityModel;

namespace Lbl.ViewModel
{
    public class ResourceViewModel : BaseViewModel<Resource>
    {
        public ResourceViewModel(Resource resource) : base(resource)
        {
            this.Name = resource.Name;
            this.Type = resource.Type;
            this.IsPublic = resource.IsPublic;
        }

        public string Name { get; set; }
        
        public string Type { get; set; }
        
        public bool IsPublic { get; set; }
    }
}
