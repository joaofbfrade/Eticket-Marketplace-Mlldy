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
    public class UserController : ControllerBase
    {
        private MongoClient dbClient;
        public UserController(IConfiguration configuration)
        {
            
            var AtlasDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClient = new MongoClient(AtlasDb.ConnectionString);


        }
        
        [HttpPost]
        public async Task Post([FromBody] User user)
        {
            
            var MellodyDb = dbClient.GetDatabase("mellodyDB");
            var Users = MellodyDb.GetCollection<User>("Users");
            await Users.InsertOneAsync(user);
            
          

        }
    }
}
