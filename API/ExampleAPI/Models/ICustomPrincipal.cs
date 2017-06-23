using System;
using System.Security.Principal;

namespace ExampleAPI.Models
{
    public interface ICustomPrincipal : IPrincipal
    {
        string Username { get; set; }

        Guid UserId { get; set; }
    }
}