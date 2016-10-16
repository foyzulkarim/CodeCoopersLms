using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ViewModel;

namespace Manager.Test
{
    [TestClass]
    public class AccountManagerTest
    {
        [TestMethod]
        public void SignupTest()
        {
            IAuthenticationService service = new AuthenticationManager(new VirtualtraineesEntities());
            var signupModel = new SignupModel()
            {
                Email = "foyzulkarim@outlook.com", Password = "123", Name = "Foyzul Karim", Phone = "123"
            };
            ResponseModel responseModel = service.Signup(signupModel);
            Assert.IsTrue(responseModel.IsSuccess);
        }
    }
}
