using System.ComponentModel.DataAnnotations;
using System.Net.Cache;

namespace ExampleAPI.Models
{
    public class LoginModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}