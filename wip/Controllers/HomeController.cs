﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkInPairs.Controllers
{
    [Route("api/[controller]/[action]")]
    public class HomeController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IActionResult GetWelcome()
        {
            return Ok("Welcome to WIP Digital Portal");
        }
        [HttpGet]
        public IActionResult GetNiente2()
        {

            return Ok("Niente2");
        }
    }
}
