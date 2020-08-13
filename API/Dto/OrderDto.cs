namespace API.Dto
{
    public class OrderDto
    {
        public string BasketId { get; set; }
        public int DeliveryMethod { get; set; }
        public AddressDto ShipToAddress { get; set; }
        
    }
}