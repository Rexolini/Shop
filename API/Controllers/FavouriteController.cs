using System.Threading.Tasks;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class FavouriteController : BaseApiController
    {
        private readonly IFavouriteRepository _favouriteRepository;
        private readonly IMapper _mapper;
        public FavouriteController(IFavouriteRepository favouriteRepository, IMapper mapper)
        {
            _mapper = mapper;
            _favouriteRepository = favouriteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Favourite>> GetFavouriteById(string id)
        {
            var favourite = await _favouriteRepository.GetFavourite(id);

            return Ok(favourite ?? new Favourite(id));
        }

        [HttpPost]
        public async Task<ActionResult<Favourite>> UpdateBasket(Favourite favourite)
        {
            
            var updateFavourite = await _favouriteRepository.UpdateFavourite(favourite);

            return Ok(updateFavourite);
        }

        [HttpDelete]
        public async Task DeleteBasket(string id)
        {
            await _favouriteRepository.DeleteFavourite(id);
        }
    }
}