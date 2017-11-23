using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Lbl.Server.Controllers
{
    using Lbl.Model;
    using Lbl.RequestModel;
    using Lbl.ViewModel;

    [RoutePrefix("api/Content")]
    public class ContentController : BaseController<Content, ContentRequestModel, ContentViewModel>
    {
    }
}