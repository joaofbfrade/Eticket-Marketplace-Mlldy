using System.ComponentModel.DataAnnotations;

namespace Mellody.WebApplication.Models
{
    public class Artist
    {
        
        public string artistsname { get; set; }
        
        public string artistsrole { get; set; }
  
        public string img { get; set; }
        public int id { get; set; }
        public string wallet_address { get; set; }
        

    }
}
