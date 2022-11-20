using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication3.Models
{
    public class ContestM
    {
        [Required]
        public string Title { get; set; }
        //public DateTime endTime { get; set; }
        public string[] Competitors { get; set; }
        //public string Description { get; set; }
        //public string Category { get; set; }
        //public string[] img { get; set; }


    }
}
