namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered itemOrdered, decimal price, int quanity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quanity = quanity;
        }

        public ProductItemOrdered ItemOrdered { get; set; }   
        public decimal Price { get; set; }
        public int Quanity { get; set; }
    }
}