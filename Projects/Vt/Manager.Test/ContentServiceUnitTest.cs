using System;
using System.Threading.Tasks;
using DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ViewModel;

namespace Manager.Test
{
    [TestClass]
    public class ContentServiceUnitTest
    {
        Guid contentId = Guid.Parse("44c2b6b6-2c93-40ec-8ab6-c7fb008cb430");
        Guid traineeId = Guid.Parse("d44f91d0-6f9d-46ad-a486-6ba49eda7dd0");

        [TestMethod]
        public  void ContentServiceTestMethod1()
        {
            var contentService = new ContentService(new VirtualtraineesEntities());            
            var detail =  contentService.GetDetail(contentId, traineeId);
            Assert.IsNotNull(detail);
        }

        [TestMethod]
        public void QuizLoadTestMethod()
        {
            var contentService = new ContentService(new VirtualtraineesEntities());
            var detail = contentService.GetQuizDetailForTest(contentId, traineeId);
            Assert.IsNotNull(detail);

        }
    }

    
}
