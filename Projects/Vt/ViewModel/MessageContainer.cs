using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public static class MessageContainer
    {
        public static string NotYetUnlocked {
            get { return "এই কন্টেন্ট এখনও আপনার জন্য unlocked হয় নি। "; }
        }

        public static string ErrorOccurred {
            get { return "সাইটে কোন সমস্যা হয়েছে। দয়া লগ আউট করে আবার লগ ইন করুন। তারপরেও সমস্যা থাকলে দয়া করে Support এ জানান। "; }
        }

        public static string CouldNotSavePayment
        {
            get { return "আপনার পেমেন্ট এর তথ্য Save করা যায়নি। Either কোনোভাবে Transaction Id অন্য কারো সাথে মিলে গিয়েছে, বা অন্য কোন সমস্যা হয়েছে। আবার চেষ্টা করুন। তারপরেও সমস্যা থাকলে দয়া করে Support এ জানান। "; }
        }

        public static string AnswerIsWrong
        {
            get { return "আপনার দেয়া উত্তরে ভুল আছে। আবার চেষ্টা করুন। প্রয়োজন হলে কিছুক্ষন Google/Bing এ খুঁজে আসুন উত্তরটি। :) "; }
        }

        public static string UnableToUnlock
        {
            get { return "Unlock করা যাচ্ছে না পরের ক্লাসটি। কারণ হতে পারে হয় আপনার টাকা পরিশোধ করা হয় নি, বা আগের ক্লাস এখনও শেষ করেন নি। এসবের কিছুই না হলে দয়া করে Support এ জানান। "; }
        }

        public static string AllAnswersCorrect
        {
            get { return "আপনার সবগুলো উত্তর সঠিক হয়েছে। মাশা আল্লাহ্‌। "; }
        }
        public static string AssignmentIsSubmitted
        {
            get { return "আপনার Assignment টি Save হয়েছে। আমরা আপনার কাজটি দেখবো এবং নাম্বার দিবো। এর পর পরবর্তী লেভেলে আপনাকে উন্নীত করে দিবো। সেই পর্যন্ত দয়া করে ধৈর্য ধরুন। :) "; }
        }
        public static string NoUserFound
        {
            get { return "কোন User পাওয়া যায়নি। "; }
        }

        public static string PreviousContentIsUncompleted
        {
            get { return "আপনার আগের ক্লাসের কুইজ এখনও শেষ হয়নি। "; }
        }

        public static string EmailExists
        {
            get { return "এই Email টি অন্য কারো দ্বারা রেজিস্টার্ড হয়ে গিয়েছে আমাদের System এ। "; }
        }

        public static string Greetings
        {
            get { return "আসসালামু আলাইকুম। "; }
        }

        public static string DeactivatedNotification
        {
            get { return "আপনার Account টি deactivated অবস্থায় রয়েছে। এই অবস্থায় আপনি শুধু আমাদের ফ্রি ক্লাসগুলো করতে পারবেন। "; }
        }

        public static string EmailPasswordMismatch
        {
            get { return "Email এবং Password মিলে নাই। ঠিকমত লিখে আবার চেষ্টা করুন। "; }
        }
    }
}
