using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Vta.ApiApp.Helpers
{
   public class ProgressiveDownload
    {
        public bool IsRangeRequest
        {
            get
            {
                return _Request.Headers.Range != null && _Request.Headers.Range.Ranges.Count > 0;
            }
        }

        public HttpResponseMessage ResultMessage(Stream stream, string mediaType)
        {
            try
            {
                if (IsRangeRequest)
                {
                    var content = new ByteRangeStreamContent(stream, _Request.Headers.Range, mediaType);
                    var response = _Request.CreateResponse(HttpStatusCode.PartialContent);
                    response.Content = content;
                    Debug.WriteLine("in range req");
                    Debug.WriteLine(response);
                    return response;
                }
                else
                {
                    var content = new StreamContent(stream);
                    var response = _Request.CreateResponse(HttpStatusCode.OK);
                    response.Content = content;
                    response.Content.Headers.ContentType = MediaTypeHeaderValue.Parse(mediaType);
                    Debug.WriteLine("not in range");
                    Debug.WriteLine(response);
                    return response;
                }
            }
            catch (InvalidByteRangeException ibr)
            {
                return _Request.CreateErrorResponse(ibr);
            }
            catch (Exception e)
            {
                return _Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
            }
        }

        public ProgressiveDownload(HttpRequestMessage request)
        {
            Debug.WriteLine("test");
            _Request = request;
            if (!IsRangeRequest)
            {
                _Request.Headers.Range = new RangeHeaderValue(0, 5);
                Debug.WriteLine(_Request.Headers.Range);
            }
            

        }

        HttpRequestMessage _Request;
    }

}