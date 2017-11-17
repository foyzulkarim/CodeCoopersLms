namespace Lbl.Server.Controllers
{
    using System;
    using System.Web.Http;

    using Lbl.Model;
    using Lbl.RequestModel;
    using Lbl.Service;
    using Lbl.ViewModel;

    public class BaseController<T, TR, TV> : ApiController where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T>
    {
        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Add(T model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(ModelState);
            }

            model.Id = Guid.NewGuid().ToString();
            var service = new BaseService<T, TR, TV>();
            var add = service.Add(model);
            return this.Ok(add);
        }
    }
}