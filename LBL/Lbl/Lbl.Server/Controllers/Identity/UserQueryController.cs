using System;
using System.Collections.Generic;
using System.Linq;
using Lbl.Server.Models;
using Lbl.ViewModel;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Lbl.Server.Controllers.Identity
{
    [RoutePrefix("api/UserQuery")]
    public class UserQueryController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [Route("GetSelectList")]
        [ActionName("GetSelectList")]
        public List<SelectViewModel> GetSelectList()
        {
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
            var roles = userManager.Users.Select(u => new SelectViewModel { Id = u.Id, Value = u.UserName }).ToList();
            return roles;
        }
    }
}
