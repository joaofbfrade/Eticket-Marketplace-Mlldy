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
        private SpotifyClient _spotifyClient;
        public ArtistController(IConfiguration configuration)
        {
            
            var AtlasDb = configuration.GetSection(nameof(MongoDbConfig)).Get<MongoDbConfig>();
            dbClient = new MongoClient(AtlasDb.ConnectionString);

            var SpotifyApi = configuration.GetSection(nameof(SpotifyApiConfig)).Get<SpotifyApiConfig>();
            var config = SpotifyClientConfig
                .CreateDefault()
                .WithAuthenticator(new ClientCredentialsAuthenticator(SpotifyApi.CLIENT_ID, SpotifyApi.CLIENT_SECRET_ID));

            _spotifyClient = new SpotifyClient(config);

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
                    wallet_address = artists_data[i]["wallet_address"].ToString(),
                    img = artists_data[i]["img"].ToString()
                });
            }
            return artists;
        }
        [HttpPost]
        public async Task Post([FromBody] Artist artist)
        {
            
            var artistSpotify = await _spotifyClient.Artists.Get(artist.id_spotify);
            var artistBd = new Artist
            {
                artistsname = artistSpotify.Name,
                img = artistSpotify.Images[0].Url,
                wallet_address = artist.wallet_address,
                id_spotify = artist.id_spotify

            };
            var MellodyDb = dbClient.GetDatabase("mellodyDB");
            var Artists = MellodyDb.GetCollection<Artist>("Artists");
            await Artists.InsertOneAsync(artistBd);
           

        }
    }
}
