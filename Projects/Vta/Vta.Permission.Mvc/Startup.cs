using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Vta.Permission.Mvc.Startup))]
namespace Vta.Permission.Mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
