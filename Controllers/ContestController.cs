
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using SpotifyAPI.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using WebApplication3.Settings;
using WebApplication3.Models;
using Swan.Formatters;

namespace Mellody.WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContestController : ControllerBase
    {
        private MongoClient dbClient;
        public ContestController(IConfiguration configuration)
        {
            var MongoDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClient = new MongoClient(MongoDb.ConnectionString);

        }
        //[HttpGet]
        //public IList<MusicType> Get()
        //{
        //    List<MusicType> json = new List<MusicType> {
        //        new MusicType
        //        {
        //            musictype = "Best Indie Rock",
        //            img = "https://bit.ly/3SiQAhe",
        //            id = 1
        //        },
        //        new MusicType
        //        {
        //            musictype = "Live Performance",
        //            img = "https://bit.ly/3TrlsNQ",
        //            id = 2
        //        },
        //        new MusicType
        //        {
        //            musictype = "Best HipHop",
        //            img = "https://bit.ly/3F2n5xa",
        //            id = 3
        //        },
        //        new MusicType
        //        {
        //            musictype = "Best PopMusic",
        //            img = "https://bit.ly/3gvVN81",
        //            id = 4
        //        }
        //    };

        //    return json;
        //}
        [HttpGet]
        public IList<ContestM> Get()
        {
            var MellodyDb = dbClient.GetDatabase("parse");
            var Users = MellodyDb.GetCollection<BsonDocument>("Contests");
            var filter = new BsonDocument();
            var contest_data = Users.Find(filter).ToList();
            List<ContestM> contests = new List<ContestM> { };
            for (int i = 0; i < contest_data.Count; i++)
            {
                contests.Add(new ContestM
                {
                    Title = contest_data[i]["title"].ToString(),
                    Competitors = new string[] { contest_data[i]["artists_addresses"][0].ToString() }
                });
            }
            return contests;
        }
    }
}
