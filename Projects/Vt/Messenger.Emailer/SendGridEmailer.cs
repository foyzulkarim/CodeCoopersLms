using System.Configuration;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using SendGrid;

namespace Messenger.Emailer
{
    public class SendGridEmailer : IEmailer
    {
     
        public async Task<bool> SendEmailAsync(Message message, NetworkCredential credentials)
        {
            SendGridMessage sendgrid = new SendGridMessage
            {
                From = new MailAddress(message.SenderEmail, message.SenderName),
                Subject = message.Subject,
                Html = message.Html,
                Text = message.Text,
                ReplyTo = new[] {new MailAddress(message.ReplyTo, message.ReplyToName)}
            };
            sendgrid.EnableClickTracking(true);
            if (message.Recipents.Count>1)
            {
                sendgrid.AddTo(message.SenderEmail);
                foreach (string recipent in message.Recipents)
                {
                    sendgrid.AddBcc(recipent);                    
                }
            }
            else
            {
                sendgrid.AddTo(message.Recipents);                
            }
            
            Web transportWeb = new Web(credentials);
            await transportWeb.DeliverAsync(sendgrid);
            return true;
        }

        public bool SendEmail(Message message, NetworkCredential credentials)
        {
            return SendEmailAsync(message, credentials).Result;
        }
    }
}