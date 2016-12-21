using Microsoft.VisualStudio.TestTools.UnitTesting;
using Vta.Models;
using Vta.Repository;
using Vta.RequestModels;

namespace Vta.Service.Test
{
    [TestClass]
    public class ContentServiceTest
    {
        [TestMethod]
        public void GetTestMethod1()
        {
            var service = new ContentService(new ContentRepository(new VtaDbContext()));
            string c1 = "080fd28c-41dd-445b-86a3-ee8529e33346";
            string c2 = "a0f4c15e-914c-497a-a46f-67101a0a2d55";
            var request = new ContentDetailRequestModel(c2);
            var contentDetail = service.GetContentDetail(request);
            Assert.IsNotNull(contentDetail);
        }
    }
}