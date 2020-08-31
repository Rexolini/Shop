using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.Dto
{
    public class CompareDto
    {
        [Required]
        public string Id { get; set; }
        public List<CompareItem> Items { get; set; } = new List<CompareItem>();
        public string ClientSecret { get; set; }
    }
}