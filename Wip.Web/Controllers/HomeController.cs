using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Wip.Core.Models;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WipWeb.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HomeController : Controller
    {
        private WipContext _wipcontext;
        private IConfigurationRoot _config;
        
        public HomeController(WipContext wipcontext, IConfigurationRoot config)
        {
            _wipcontext = wipcontext;
            _config = config;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult GetWelcome()
        {
            //Testing context
            var users = _wipcontext.Users.ToList();

            return Ok(_config["Welcome"]);
        }
        [HttpGet]
        public IActionResult GetNiente2()
        {

            return Ok("Niente2");
        }
    }
}
