using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System;
using System.Net;
using System.Net.Mail;

namespace Messenger.Emailer
{
    public interface IEmailer
    {
        Task<bool> SendEmailAsync(Message message, NetworkCredential credentials);
        bool SendEmail(Message message, NetworkCredential credentials);
    }
}
