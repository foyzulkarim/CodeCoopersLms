using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public class ResponseModel
    {
        public ResponseModel(object data = null, bool isSuccess = true, string message = "", Exception exception = null)
        {
            this.Data = data;
            this.IsSuccess = isSuccess;
            this.Message = message;
            this.Exception = exception;
        }

        public Exception Exception { get; set; }

        public string Message { get; set; }

        public bool IsSuccess { get; set; }

        public object Data { get; set; }
    }
}
