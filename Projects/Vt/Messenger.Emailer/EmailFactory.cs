using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messenger.Emailer
{
    public enum EmailType
    {
        CompleteSignup,
        Welcome,
        PaymentOk,
        Offer,
        News,
    }

    public static class EmailFactory
    {
        private enum Keys
        {
            Subject,
            Html,
            Text,
            SenderName,
            SenderEmail,
            ReplyEmail,
            ReplyName
        }
     

        private static string GetValue(EmailType emailType, Keys keys)
        {
            return ConfigurationManager.AppSettings[string.Format("{0}{1}", emailType, keys)];
        }

        private static string GetSenderInfo(Keys key)
        {
            return ConfigurationManager.AppSettings[string.Format("{0}",  key)];
        }

        public static Message CreateMessage(List<string> names, List<string> emails, EmailType emailType)
        {
            string senderEmail = string.Format("{0} <{1}>", string.Format("{0}", GetValue(emailType, Keys.SenderName)), string.Format("{0}", GetSenderInfo(Keys.SenderEmail)));
            string replyTo = string.Format("{0} <{1}>", string.Format("{0}", GetValue(emailType, Keys.ReplyName)), string.Format("{0}", GetSenderInfo( Keys.ReplyEmail)));
            string replyToName = string.Format("{0}", GetSenderInfo( Keys.ReplyName));


            List<string> recipents = new List<string>();
            for (int i = 0; i < names.Count; i++)
            {
                var email = emails[i];
                recipents.Add(string.Format("{0} <{1}>", names[i], email));
            }
            string subject = string.Format("{0}", GetValue(emailType, Keys.Subject));
            string html = string.Format("{0}", GetValue(emailType, Keys.Html));
            string text = string.Format("{0}", GetValue(emailType, Keys.Text));
        
            return new Message(recipents, senderEmail, subject, html, text, replyTo, replyToName);
        }



    }
}
