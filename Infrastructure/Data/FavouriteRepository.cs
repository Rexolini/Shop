using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class FavouriteRepository : IFavouriteRepository
    {
        private readonly IDatabase _database;
        public FavouriteRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteFavourite(string favouriteId)
        {
            return await _database.KeyDeleteAsync(favouriteId);
        }

        public async Task<Favourite> GetFavourite(string favouriteId)
        {
            var data = await _database.StringGetAsync(favouriteId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Favourite>(data);
        }

        public async Task<Favourite> UpdateFavourite(Favourite favourite)
        {
             var created = await _database.StringSetAsync(favourite.Id, JsonSerializer.Serialize(favourite), TimeSpan.FromDays(20));

            if (!created)
            {
                return null;
            }

            return await GetFavourite(favourite.Id);
        }
    }
}