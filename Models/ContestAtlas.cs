using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System;
using System.ComponentModel.DataAnnotations;

namespace Mellody.WebApplication.Models
{
    public class ContestAtlas
    {
        public ObjectId id { get; set; }

        public string musictype { get; set; }
        public string description { get; set; }

        public string img { get; set; }
        
        public string hash { get; set; }


    }
}
