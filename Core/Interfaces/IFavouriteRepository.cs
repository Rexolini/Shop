using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IFavouriteRepository
    {
        Task<Favourite> GetFavourite(string favouriteId);
        Task<Favourite> UpdateFavourite(Favourite favourite);
        Task<bool> DeleteFavourite(string favouriteId);
    }
}