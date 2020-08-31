using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.Dto
{
    public class FavouriteDto
    {
        [Required]
        public string Id { get; set; }
        public List<FavouriteItem> Items { get; set; } = new List<FavouriteItem>();
        public string ClientSecret { get; set; }
    }
}