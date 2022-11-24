using Mellody.WebApplication.Settings;
using Mellody.WebApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using SpotifyAPI.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using Swan.Formatters;
using System.Threading.Tasks;

namespace Mellody.WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArtistController : ControllerBase
    {
        private MongoClient dbClient;
        public ArtistController(IConfiguration configuration)
        {
            
            var AtlasDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClient = new MongoClient(AtlasDb.ConnectionString);

        }
        [HttpGet]
        public IList<Artist> Get()
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
                    artistsrole = artists_data[i]["artistsrole"].ToString(),
                    wallet_address = artists_data[i]["wallet_address"].ToString()
                });
            }
            return artists;
        }
        [HttpPost]
        public async Task Post([FromBody] Artist employee)
        {
            var MellodyDb = dbClient.GetDatabase("mellodyDB");
            var Artists = MellodyDb.GetCollection<Artist>("Artists");
            await Artists.InsertOneAsync(employee);

        }
    }
}
