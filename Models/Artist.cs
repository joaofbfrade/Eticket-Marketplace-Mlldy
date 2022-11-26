using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace Mellody.WebApplication.Models
{
    public class Artist
    {
        public string id_spotify { get; set; }
        public string artistsname { get; set; }
  
        public string img { get; set; }
        
        public string wallet_address { get; set; }
        

    }
}
