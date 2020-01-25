using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PintaAPI.Data;

namespace PintaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlacesController : ControllerBase
    {
        private readonly DataContext _context;

        public PlacesController(DataContext context)
        {
            _context = context;
        }

        // GET api/places
        [HttpGet]
        public IActionResult GetPlaces()
        {
            // var places = _context.Places.ToList();
            var places = _context.Places;

            return Ok(places);
        }

        // GET api/places/5
        [HttpGet("{id}")]
        public IActionResult GetPlace(int id)
        {
            var place = _context.Places.FirstOrDefault(x => x.Id == id);

            return Ok(place);
        }

        // POST api/places
        [HttpPost]
        public void Post([FromBody] string place)
        {
        }

        // PUT api/places/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string place)
        {
        }

        // DELETE api/places/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
