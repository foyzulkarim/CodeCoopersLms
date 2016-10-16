using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using DataAccess;


namespace ViewModel
{
    public class SignupModel
    {
        public string Name { get; set; }
        public string Email { get; set; }

        public Trainee GetTrainee()
        {
            return new Trainee()
            {

                Email = Email,
                IsActive = false,
                Name = Name,
                Joined = DateTime.Now,
                Expired = DateTime.Now.AddDays(7),
                Phone = Phone,
                Changed = DateTime.Now,
                Token = Convert.ToBase64String(Guid.NewGuid().ToByteArray()),
                Password = Password.CalculateMd5Hash(),
                Point = 0
            };
        }

        public string Phone { get; set; }

        public string Password { get; set; }
    }

    public class SigninModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public static class Utility
    {
        public static string CalculateMd5Hash(this string input)
        {
            MD5 md5 = MD5.Create();
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hash = md5.ComputeHash(inputBytes);

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
    }
}
