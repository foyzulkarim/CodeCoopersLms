using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Vta.ApiApp.Models;
using Vta.Models;

namespace Vta.ApiApp.Areas.Admin.Controllers
{
    public class FileUploadController : Controller
    {
        // GET: Admin/FileUpload
        

        public ActionResult Create(string fileId)
        {
            return View(new FileUploadViewModel() { FileId = fileId });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(FileUploadViewModel model)
        {
            if (ModelState.IsValid)
            {

                if (model.ImageUpload != null && model.ImageUpload.ContentLength > 0)
                {
                    VtaDbContext db = new VtaDbContext();
                    var file = await db.Files.FindAsync(model.FileId);
                    string extension = Path.GetExtension(model.ImageUpload.FileName);
                    await AzureHelper.CreateAndConfigureAsync();
                    HttpPostedFileBase photoToUpload = model.ImageUpload;
                    string name = file.Id + extension;
                    string url = await AzureHelper.UploadPhotoAsync(photoToUpload,name);
                    file.SourceUrl = url;
                    file.IsUploaded = true;
                    file.ConvertedUrl = "";
                    file.IsConverted = false;
                    db.Entry(file).State = EntityState.Modified;
                    db.SaveChanges();
                }

                return RedirectToAction("Index", "Files");
            }
            return View(model);
        }

        //[HttpPost]
        //public async Task<ActionResult> UploadFile()
        //{
        //    HttpPostedFileBase file = Request.Files[0];
        //    if (file != null)
        //    {

        //        // Validate the uploaded file if you want like content length(optional)
        //        await AzureHelper.CreateAndConfigureAsync();
        //        string photoAsync = await AzureHelper.UploadPhotoAsync(file); 
        //    }

        //    return Content("Uploaded Successfully");
        //}
    }
}