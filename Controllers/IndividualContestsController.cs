
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using SpotifyAPI.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using Mellody.WebApplication.Settings;
using Mellody.WebApplication.Models;
using Swan.Formatters;

namespace Mellody.WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IndividualContestsController : ControllerBase
    {
        //private MongoClient dbClient;
        //public IndividualContestsController(IConfiguration configuration)
        //{
        //    var MongoDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
        //    dbClient = new MongoClient(MongoDb.ConnectionString);

        //}
        //[HttpGet]
        
        [HttpGet("{id}")]
        public IList<Artist> Get(string id)
        {

       
            List<Artist> json = new List<Artist> {
                new Artist
                {
                    artistsname = "Artist"+id,
                    artistsrole = "Producer",
                    img = "https://64.media.tumblr.com/e775f7195176c4e70f2654f1d5ff0bfe/tumblr_inline_phvike3zgg1t0myks_500.png",
                    id = 10
             
                },
                new Artist
                {
                    artistsname = "Artist2",
                    artistsrole = "Producer",
                    img = "https://cdna.artstation.com/p/assets/images/images/017/787/280/large/annika-soljander-icons2.jpg?1557336279",
                    id = 20
              
                },
                new Artist
                {
                    artistsname = "Artist3",
                    artistsrole = "Producer",
                    img = "https://i.pinimg.com/564x/b3/f7/00/b3f70014d73b6ad9311a0f197976b555.jpg",
                    id=30
                  
                },
                new Artist
                {
                    artistsname = "Artist4",
                    artistsrole = "Producer",
                    img = "https://uploads.scratch.mit.edu/users/avatars/58329667.png",
                    id = 40
         
                },
                
            };

            return json;
        }
    
    }
}
