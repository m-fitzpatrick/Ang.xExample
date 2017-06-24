using System;
using System.Security.Principal;

namespace ExampleAPI.Models
{
    public class CustomPrincipal : ICustomPrincipal
    {
        public CustomPrincipal(string username)
        {
            // mocking token info    
            Username = username;
            UserId = Guid.NewGuid();
            Identity = new GenericIdentity(Username);
        }
        
        public bool IsInRole(string role)
        {
            return false;
        }

        public IIdentity Identity { get; }

        public string Username { get; set; }

        public Guid UserId { get; set; }
    }
}