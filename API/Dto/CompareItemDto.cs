using System.ComponentModel.DataAnnotations;

namespace API.Dto
{
    public class CompareItemDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string ProductName { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string PictureUrl { get; set; }
        [Required]
        public string Brand { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public int Stock { get; set;}
        [Required]
        public string Colour { get; set; }
        [Required]
        public string Material { get; set; }
        [Required]
        public string Dimensions { get; set; }
    }
}