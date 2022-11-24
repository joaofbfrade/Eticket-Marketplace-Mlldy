using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel.DataAnnotations;

namespace Mellody.WebApplication.Models
{
    public class ContestMoralis
    {
        public string Title { get; set; }

        public string[] Competitors { get; set; }

     


    }
}
