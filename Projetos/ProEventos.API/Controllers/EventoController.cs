using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public EventoController()
        {

        }

        [HttpGet]
        public string Get()
        {
            return "exemploGet";
        }

        [HttpPost]
        public string Post()
        {
            return "exemploPost";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Put com Id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Delete com Id = {id}";
        }
    }
}
