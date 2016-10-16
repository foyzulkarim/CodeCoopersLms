using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Server.Controllers;
using ViewModel;

namespace Server.Test
{
    [TestClass]
    public class ContentControllerTest
    {
        Guid traineeId = Guid.Parse("8306ef98-c1b3-46f3-8188-680768c11db0");

        [TestMethod]
        public void TestMethod1()
        {
            
            var controller = new LevelController();
            var task = controller.Get();
          //  Assert.IsTrue(task.Result.IsSuccess);
        }

        [TestMethod]
        public void ContentDetailTestMethod()
        {
            var controller = new ClassController();
        }

        [TestMethod]
        public async void UnlockTestMethod()
        {
            ContentController controller = new ContentController();
        //    var task = await controller.Unlock(traineeId, 0);
         //   Assert.IsTrue(task.IsSuccess);
        }
    }
}
