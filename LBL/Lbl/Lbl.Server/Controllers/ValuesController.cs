using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using System.Data.Entity;
    using System.Threading.Tasks;

    using Lbl.Model;
    using Lbl.Server.Models;

    using Microsoft.AspNet.Identity.Owin;

    public class ValuesController : ApiController
    {
        // GET api/values
        [AllowAnonymous]
        public string Get()
        {
            return Guid.NewGuid().ToString();
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
