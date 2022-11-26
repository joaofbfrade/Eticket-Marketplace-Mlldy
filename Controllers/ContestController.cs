
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
using System.Threading.Tasks;

namespace Mellody.WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContestController : ControllerBase
    {
        private MongoClient dbClientMoralis;
        private MongoClient dbClientAtlas;
        public ContestController(IConfiguration configuration)
        {
            var MoralisDb = configuration.GetSection(nameof(MoralisDbConfig)).Get<MoralisDbConfig>();
            dbClientMoralis = new MongoClient(MoralisDb.ConnectionString);

            var AtlasDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClientAtlas = new MongoClient(AtlasDb.ConnectionString);

        }
        //MORALIS DB

        //[HttpGet]
        //public IList<ContestMoralis> Get()
        //{
        //    var MoralisDb = dbClientMoralis.GetDatabase("parse");
        //    var Contests = MoralisDb.GetCollection<BsonDocument>("Contests");
        //    var filter = new BsonDocument();
        //    var contest_data = Contests.Find(filter).ToList();
        //    List<ContestMoralis> contests = new List<ContestMoralis> { };
        //    for (int i = 0; i < contest_data.Count; i++)
        //    {
        //        contests.Add(new ContestMoralis
        //        {
        //            Title = contest_data[i]["title"].ToString(),
        //            Competitors = new string[] { contest_data[i]["artists_addresses"][0].ToString() }
        //        });
        //    }
        //    return contests;
        //}
        // ATLAS DB
        [HttpGet]
        public IList<ContestAtlas> Get()
        {
            var MellodyDb = dbClientAtlas.GetDatabase("mellodyDB");
            var Contests = MellodyDb.GetCollection<BsonDocument>("Contests");
            var filter = new BsonDocument();
            var contests_data = Contests.Find(filter).ToList();
            List<ContestAtlas> contests = new List<ContestAtlas> { };
            for (int i = 0; i < contests_data.Count; i++)
            {
                contests.Add(new ContestAtlas
                {
                    musictype = contests_data[i]["musictype"].ToString(),
                    description = contests_data[i]["description"].ToString(),
                    hash = contests_data[i]["hash"].ToString(),
                    img = contests_data[i]["img"].ToString(),
                    
                });
            }
            return contests;
        }
            [HttpPost]
        public async Task Post([FromBody] ContestAtlas contest)
        {
            var AtlasDb = dbClientAtlas.GetDatabase("mellodyDB");
            var Contests = AtlasDb.GetCollection<ContestAtlas>("Contests");
            await Contests.InsertOneAsync(contest);

        }
    }
}
