using System.Collections.Generic;
using System.Web.Http;
using Vta.ApiApp.Filters;

namespace Vta.ApiApp.Controllers
{
    using System;

    //[CustomAuthzFilter]
    [RoutePrefix("api/Values")]
    public class ValuesController : ApiController
    {
        // GET api/values
        [Route("GetAll")]
        public IEnumerable<string> Get()
        {
            return new[] { "value1" + DateTime.Now, "value2" + Guid.NewGuid() };
        }

        // [CustomAuthzFilter(Roles = "SuperAdmin")]
        // GET api/values/5
        [Route("GetByIdInt")]
        public string Get(int id)
        {
            return "value";
        }

        [Route("GetByIdStr")]
        public string Get(string id)
        {
            return id;
        }

        // POST api/values
        public IHttpActionResult Post([FromBody] string value)
        {
            return Ok(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}