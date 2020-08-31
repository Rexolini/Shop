namespace Core.Entities
{
    public class CompareItem
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
        public int Stock { get; set;}
        public string Colour { get; set; }
        public string Material { get; set; }
        public string Dimensions { get; set; }
        public int Quantity { get; set; }
    }
}