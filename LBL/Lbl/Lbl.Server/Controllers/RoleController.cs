using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Lbl.IdentityModel;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Lbl.Server.Models;

namespace Lbl.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/Role")]
    public class RoleController : ApiController
    {
        [Route("CreateRole")]
        public IHttpActionResult CreateRole(RoleBindingModel role)
        {
            var roleManager = new RoleManager<IdentityRole>(
                new RoleStore<IdentityRole>(new IdentityModel.ApplicationDbContext()));

            var applicationUser = User.Identity;

            var applicationRole = new ApplicationRole(role.Name);
            applicationRole.LandingRoute = role.LandingRoute;
            applicationRole.Modified = DateTime.Now;
            applicationRole.ModifiedBy = applicationUser.Name;
            applicationRole.Created = DateTime.Now;
            applicationRole.CreatedBy = applicationUser.Name;
            
            var idResult = roleManager.Create(applicationRole);
            if (!idResult.Succeeded)
                return BadRequest("Failed to add application role");

            return Ok();
        }
    }
}
