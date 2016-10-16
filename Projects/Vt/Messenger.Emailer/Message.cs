using System.Collections.Generic;

namespace Messenger.Emailer
{
    public class Message
    {

        public Message(List<string> recipients, string senderEmail, string subject, string html, string text, string replyTo, string replyToName)
        {
            this.Recipents = recipients;
            this.SenderEmail = senderEmail;
            this.Subject = subject;
            this.Html = html;
            this.Text = text;
            this.ReplyTo = replyTo;
            this.ReplyToName = replyToName;
        }

        public List<string> Recipents { get; set; }

        public string SenderEmail { get; set; }

        public string Subject { get; set; }

        public string Html { get; set; }

        public string Text { get; set; }
        public string SenderName { get; set; }
        public string ReplyTo { get; set; }
        public string ReplyToName { get; set; }
    }
}