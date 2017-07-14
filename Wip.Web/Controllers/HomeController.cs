using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Wip.Web.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Wip.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HomeController : Controller
    {
        private IWipRepository _wipRespository;
        private IConfigurationRoot _config;
        
        public HomeController(IWipRepository wipRepository, IConfigurationRoot config)
        {
            _wipRespository = wipRepository;
            _config = config;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult GetWelcome()
        {
            return Ok(_config["Welcome"]);
        }
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_wipRespository.GetAllUsers());
        }
        [HttpGet]
        public IActionResult GetUserById(int userId)
        {
            return Ok(_wipRespository.GetUserById(userId));
        }
        [HttpGet]
        public IActionResult GetTeacherLessons(int teacherId)
        {
            return Ok(_wipRespository.GetTeacherLessons(teacherId));
        }
    }
}
