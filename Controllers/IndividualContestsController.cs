
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
        private MongoClient dbClient;
        public IndividualContestsController(IConfiguration configuration)
        {
            var MongoDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClient = new MongoClient(MongoDb.ConnectionString);

        }
        //[HttpGet]

        [HttpGet("{id}")]
        public IList<Artist> Get(string id)
        {
            var MellodyDb = dbClient.GetDatabase("mellodyDB");
            var Artists = MellodyDb.GetCollection<BsonDocument>("Artists");
            var filter = new BsonDocument();
            var artists_data = Artists.Find(filter).ToList();
            List<Artist> artists = new List<Artist> { };
            for (int i = 0; i < artists_data.Count; i++)
            {
                artists.Add(new Artist
                {
                    artistsname = artists_data[i]["artistsname"].ToString(),
                    wallet_address = artists_data[i]["wallet_address"].ToString(),
                    img = artists_data[i]["img"].ToString()
                });
            }
            return artists;
        }

    }
}
