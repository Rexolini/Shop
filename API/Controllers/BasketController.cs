using System.Threading.Tasks;
using API.Dto;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IMapper _mapper;
        public BasketController(IBasketRepository basketRepository, IMapper mapper)
        {
            _mapper = mapper;
            _basketRepository = basketRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Basket>> GetBasketById(string id)
        {
            var basket = await _basketRepository.GetBasket(id);

            return Ok(basket ?? new Basket(id));
        }

        [HttpPost]
        public async Task<ActionResult<Basket>> UpdateBasket(BasketDto basket)
        {
            var customerBasket = _mapper.Map<BasketDto, Basket>(basket);
            var updateBasket = await _basketRepository.UpdateBasket(customerBasket);

            return Ok(updateBasket);
        }

        [HttpDelete]
        public async Task DeleteBasket(string id)
        {
            await _basketRepository.DeleteBasket(id);
        }
    }
}