using System.Collections.Generic;
using System.Web.Mvc;

namespace Vta.ApiApp.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Controllers = new List<string>() { "Courses", "Levels","Contents","Questions", "Options","Files","FileUpload","Websites"};
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}