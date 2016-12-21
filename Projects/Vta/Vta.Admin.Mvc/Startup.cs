using Microsoft.Owin;
using Owin;
using Vta.Admin.Mvc;

[assembly: OwinStartup(typeof (Startup))]

namespace Vta.Admin.Mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}