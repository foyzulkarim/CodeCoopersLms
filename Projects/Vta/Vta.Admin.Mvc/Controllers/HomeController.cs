using System.Collections.Generic;
using System.Web.Mvc;

namespace Vta.Admin.Mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Controllers = new List<string>() { "Courses", "Levels","Contents","Questions", "Options"};
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