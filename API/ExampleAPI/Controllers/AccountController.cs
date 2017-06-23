using System.Web.Http;
using ExampleAPI.Models;

namespace ExampleAPI.Controllers
{
    public class AccountController : ApiController
    {
        public IHttpActionResult Login(LoginModel model)
        {
            if (model != null && !string.IsNullOrEmpty(model.UserName) && !string.IsNullOrEmpty(model.Password))
            {
                // construct and return a token here
                return Ok(new
                          {
                              message = "You got logged in"
                          });
            }

            return BadRequest("Incorrect credentials");
        }
    }
}
