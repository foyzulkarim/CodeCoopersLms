using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lbl.IdentityModel;

namespace Lbl.ViewModel
{
    public class PermissionViewModel : BaseViewModel<Permission>
    {
        public PermissionViewModel(Permission permission) : base(permission)
        {
            this.IsAllowed = permission.IsAllowed;
            this.IsDisabled = permission.IsDisabled;
        }

        public bool IsAllowed { get; set; }

        public bool IsDisabled { get; set; }
    }
}
