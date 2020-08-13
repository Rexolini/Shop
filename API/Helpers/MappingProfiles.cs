using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Core.Entities.OrderAggregate;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductDto>()
            .ForMember(x => x.ProductBrand, y => y.MapFrom(z => z.ProductBrand.Name))
            .ForMember(x => x.ProductType, y => y.MapFrom(z => z.ProductType.Name))
            .ForMember(x => x.PictureUrl, y => y.MapFrom<ProductUrlResolver>());
            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<BasketDto, Basket>();
            CreateMap<BasketItemDto, BasketItem>();
            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();
            CreateMap<Order, OrderToReturnDto>()
            .ForMember(x => x.DeliveryMethod, y => y.MapFrom(z => z.DeliveryMethod.ShortName))
            .ForMember(x => x.ShippingPrice, y => y.MapFrom(z => z.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>()
            .ForMember(x => x.ProductId, y => y.MapFrom(z => z.ItemOrdered.ProductItemId))
            .ForMember(x => x.ProductName, y => y.MapFrom(z => z.ItemOrdered.ProductName))
            .ForMember(x => x.PictureUrl, y => y.MapFrom(z => z.ItemOrdered.PictureUrl))
            .ForMember(x => x.PictureUrl, y => y.MapFrom<OrderItemUrlResolver>());
        }
    }
}