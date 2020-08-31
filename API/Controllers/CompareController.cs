using System.Threading.Tasks;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CompareController : BaseApiController
    {
        private readonly ICompareRepository _compareRepository;
        private readonly IMapper _mapper;
        public CompareController(ICompareRepository compareRepository, IMapper mapper)
        {
            _mapper = mapper;
            _compareRepository = compareRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Compare>> GetBasketById(string id)
        {
            var basket = await _compareRepository.GetCompare(id);

            return Ok(basket ?? new Compare(id));
        }

        [HttpPost]
        public async Task<ActionResult<Basket>> UpdateBasket(Compare compare)
        {
            var updateBasket = await _compareRepository.UpdateCompare(compare);

            return Ok(updateBasket);
        }

        [HttpDelete]
        public async Task DeleteBasket(string id)
        {
            await _compareRepository.DeleteCompare(id);
        }
        
    }
}