using System.Web.Http;
using ExampleAPI.Models;

namespace ExampleAPI.Controllers
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [Route("login")]
        public IHttpActionResult Login(LoginModel model)
        {
            if (model != null && !string.IsNullOrEmpty(model.Username) && !string.IsNullOrEmpty(model.Password))
            {
                // construct and return a token here
                return Ok(new
                          {
                              token = new CustomPrincipal(model.Username)
                          });
            }

            return BadRequest("Incorrect credentials");
        }
    }
}
