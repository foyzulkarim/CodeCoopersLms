using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace Vta.ApiApp.Controllers
{
    public abstract class CommandController : ApiController
    {
        public override Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext, CancellationToken cancellationToken)
        {

            return base.ExecuteAsync(controllerContext, cancellationToken);
        }
    }
}