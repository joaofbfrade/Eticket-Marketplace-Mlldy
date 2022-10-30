using System.ComponentModel.DataAnnotations;

namespace WebApplication3.Models
{
    public class Artist
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string Name { get; set; }
        public string[] Wallet { get; set; }
        public string Id_spotify { get; set; }
        public string Type_artist { get; set; }
        //public string img { get; set; }

    }
}
