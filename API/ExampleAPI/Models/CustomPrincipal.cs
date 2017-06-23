using System;
using System.Security.Principal;

namespace ExampleAPI.Models
{
    public class CustomPrincipal : ICustomPrincipal
    {
        public CustomPrincipal(string token)
        {
            // mocking token info    
            Username = "MikeF";
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