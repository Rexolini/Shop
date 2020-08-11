using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IBasketRepository
    {
        Task<Basket> GetBasket(string basketId);
        Task<Basket> UpdateBasket(Basket basket);
        Task<bool> DeleteBasket(string basketId);
    }
}