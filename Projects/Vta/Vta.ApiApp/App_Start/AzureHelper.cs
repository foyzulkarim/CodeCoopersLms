using System;
using System.Configuration;
using System.Threading.Tasks;
using System.Web;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Vta.ApiApp
{
    public static class AzureHelper
    {
        private static CloudStorageAccount CreateStorageAccountFromConnectionString()
        {
            CloudStorageAccount storageAccount;
            try
            {
                string storageConnectionString =
                    ConfigurationManager.ConnectionStrings["StorageConnectionString"].ConnectionString;
                storageAccount = CloudStorageAccount.Parse(storageConnectionString);
            }
            catch (FormatException)
            {
                Console.WriteLine(
                    "Invalid storage account information provided. Please confirm the AccountName and AccountKey are valid in the app.config file - then restart the sample.");
                Console.ReadLine();
                throw;
            }
            catch (ArgumentException)
            {
                Console.WriteLine(
                    "Invalid storage account information provided. Please confirm the AccountName and AccountKey are valid in the app.config file - then restart the sample.");
                Console.ReadLine();
                throw;
            }

            return storageAccount;
        }

        public static async Task CreateAndConfigureAsync()
        {
            try
            {

                CloudStorageAccount storageAccount = CreateStorageAccountFromConnectionString();

                // Create a blob client and retrieve reference to images container
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer container = blobClient.GetContainerReference("input");

                // Create the "images" container if it doesn't already exist.
                if (await container.CreateIfNotExistsAsync())
                {
                    // Enable public access on the newly created "images" container
                    await container.SetPermissionsAsync(
                        new BlobContainerPermissions
                        {
                            PublicAccess =
                                BlobContainerPublicAccessType.Blob
                        });

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<string> UploadPhotoAsync(HttpPostedFileBase photoToUpload, string name)
        {
            if (photoToUpload == null || photoToUpload.ContentLength == 0)
            {
                return null;
            }

            string fullPath = null;

            try
            {
                CloudStorageAccount storageAccount = CreateStorageAccountFromConnectionString();

                // Create the blob client and reference the container
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer container = blobClient.GetContainerReference("input");

                // Create a unique name for the images we are about to upload
                // Upload image to Blob Storage
                
                CloudBlockBlob blockBlob = container.GetBlockBlobReference(name);
                blockBlob.Properties.ContentType = photoToUpload.ContentType;
                await blockBlob.UploadFromStreamAsync(photoToUpload.InputStream);

                // Convert to be HTTP based URI (default storage path is HTTPS)
                var uriBuilder = new UriBuilder(blockBlob.Uri) { Scheme = "https" };
                fullPath = uriBuilder.ToString();


            }
            catch (Exception ex)
            {
                throw ex;
            }

            return fullPath;
        }

        public static CloudBlockBlob GetCloudBlockBlob(string name)
        {
            CloudStorageAccount storageAccount = CreateStorageAccountFromConnectionString();
            // Create the blob client and reference the container
            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer container = blobClient.GetContainerReference("output");
            return container.GetBlockBlobReference(name);
        }
    }
}
