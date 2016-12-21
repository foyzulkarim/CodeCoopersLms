using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Vta.Permission.Mvc.Controllers
{
    [Authorize(Users = "foyzulkarim@gmail.com")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<string> controllers = new List<string>() { "ApplicationResources" };
            
            ViewBag.Controllers = controllers;


            return View();
        }

    }
}