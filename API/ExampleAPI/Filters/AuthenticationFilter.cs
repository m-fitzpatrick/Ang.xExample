using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using ExampleAPI.Models;

namespace ExampleAPI.Filters
{
    public class AuthenticationFilter : AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var token = GetToken(actionContext);
            // probably make this some sort of object that is deserialized from the string
            if (token != null)
            {
                HttpContext.Current.User = new CustomPrincipal(token);
                // now you can have access to all of the user info that was in your token or cached somewhere
            }
            else
            {
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.BadRequest);
                return;
            }
            base.OnAuthorization(actionContext);
        }

        // If you are using JWT, store identity info in the token. Or cache the identity info and store an identifier in the token
        // either way, you need this to populate the thread principal
        private string GetToken(HttpActionContext actionContext)
        {
            string requestToken = null;
            // get the token from the request header -- You have to add this to your ajax requests in your angular project http service
            var authRequest = actionContext.Request.Headers.Authorization;
            if (authRequest != null && !string.IsNullOrEmpty(authRequest.Scheme) && authRequest.Scheme == "Bearer")
            {
                requestToken = authRequest.Parameter;
            }
            return requestToken;
        }
    }
}