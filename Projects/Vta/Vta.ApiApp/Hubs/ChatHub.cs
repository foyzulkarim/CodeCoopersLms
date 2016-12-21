using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Infrastructure;
using Vta.ApiApp.Filters;

namespace Vta.ApiApp.Hubs
{
    public class ChatHub : Hub
    {
        public void SendMessage(string message)
        {
            string s = Context.QueryString["username"];
            var connectionId = Context.ConnectionId;
            message += ".\n in server. username: "+s + " id:" + connectionId;            
            //Clients.All.hello();
            Clients.All.OnMessage(s, message);            
        }

        public override Task OnConnected()
        {
            StatefulSignalProxy p = Clients.Caller;
            Connection connection = Clients.Caller.Connection;
            string s = Context.QueryString["username"]+":"+Context.ConnectionId;            
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