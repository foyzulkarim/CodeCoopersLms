namespace Lbl.Server.Controllers
{
    using System;
    using System.Web.Http;

    using Lbl.Model;
    using Lbl.RequestModel;
    using Lbl.Service;
    using Lbl.ViewModel;

    using Microsoft.AspNet.Identity;

    public class BaseController<T, TR, TV> : ApiController where T : Entity where TR : BaseRequestModel<T> where TV : BaseViewModel<T>
    {
        private BaseService<T, TR, TV> service; 

        public BaseController()
        {
            service = new BaseService<T, TR, TV>();
        }

        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Add(T model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(ModelState);
            }

            model.ModifiedBy = User.Identity.GetUserName();
            model.CreatedBy = User.Identity.GetUserName();

            model.Id = Guid.NewGuid().ToString();
            
            var add = service.Add(model);
            return this.Ok(add);
        }
    }
}