using System.ComponentModel.DataAnnotations;

namespace Mellody.WebApplication.Models
{
    public class User
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


    }
}
