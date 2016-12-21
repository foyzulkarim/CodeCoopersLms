using System.IO;
using System.Net.Http;
using System.Web.Http;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Vta.ApiApp.Helpers;

namespace Vta.ApiApp.Controllers
{
    public class Videos2Controller : ApiController
    {
        public HttpResponseMessage Get(string fileId)
        {
            CloudBlockBlob blob = AzureHelper.GetCloudBlockBlob(fileId + ".mp4");
            string path = Path.GetTempPath() + @"\" + blob.Name;
            if (!File.Exists(path))
            {
                blob.DownloadToFile(path, FileMode.OpenOrCreate);
            }
            FileStream stream = File.OpenRead(path);
            return new ProgressiveDownload(Request).ResultMessage(stream, "video/mp4");
        }
    }
}
