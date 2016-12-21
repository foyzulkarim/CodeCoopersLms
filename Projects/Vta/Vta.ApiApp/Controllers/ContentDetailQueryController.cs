using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;
using Vta.Service;
using Vta.ViewModels;

namespace Vta.ApiApp.Controllers
{
    public class ContentDetailQueryController : ApiController
    {
        private readonly ContentService _service;


        public ContentDetailQueryController()
        {
            _service = new ContentService(new ContentRepository(new VtaDbContext()));
        }

        public IHttpActionResult Get(string id)
        {
            var request = new ContentDetailRequestModel(id);
            try
            {
                var courseViewModels = _service.GetContentDetail(request);
                return courseViewModels == null
                    ? (IHttpActionResult)new StatusCodeResult(HttpStatusCode.NoContent, Request)
                    : Ok(courseViewModels);
            }
            catch (Exception exception)
            {
                return new ExceptionResult(exception, this);
            }
        }
    }
}
