using System.Data.Entity;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using Microsoft.AspNet.SignalR;
using Vta.ApiApp.Models;
using Vta.ApiApp.Providers;

namespace Vta.ApiApp.Hubs
{
    
    public class VtaConnectionHub : Hub
    {
        public void SendMessage(string message)
        {
            string s = Context.QueryString["username"];
            var connectionId = Context.ConnectionId;
            message += ".\n in server. username: " + s + " id:" + connectionId;
            //Clients.All.hello();
            Clients.All.OnMessage(s, message);
        }

        public override Task OnConnected()
        {
            string username = Context.QueryString["username"];
            string authToken = Context.QueryString["authToken"];
            ApplicationDbContext db = new ApplicationDbContext();
            var user =  db.Users.FirstOrDefault(x => x.ApplicationToken == authToken && x.UserName == username);

            string s = Context.QueryString["username"] + ":" + Context.ConnectionId;
            Clients.All.OnMessage(s, "joined");
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            string s = Context.QueryString["username"] + ":" + Context.ConnectionId;
            Clients.All.OnMessage(s, "left");
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            string s = Context.QueryString["username"] + ":" + Context.ConnectionId;
            Clients.All.OnMessage(s, "reconnected");
            return base.OnReconnected();
        }
    }
}