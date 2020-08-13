namespace Core.Entities
{
    public class ProductType : BaseEntity
    {
        public string Name { get; set; }
        
        public string ProductName { get; set; }
        public string ProductKey { get; set; }
        public string VersionsForColour { get; set;}
        public string Colour { get; set; }
        public string Material { get; set; }
        public string MuzzleVelocity { get; set; }
        public string GearboxVersion { get; set; }
        public string BearingDiameter { get; set; }
        public string Length { get; set; }
        public string LengthInnerBarrel { get; set; }
        public string Weight { get; set; }
        public string TypeOfMagazine { get; set; }
        public string CapacityOfMagazine { get; set; }
        public string MadeOf { get; set; }
        public string Size { get; set; }
        public string Dimensions { get; set; }
    }
}