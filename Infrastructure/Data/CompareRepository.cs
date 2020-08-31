using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class CompareRepository : ICompareRepository
    {
        private readonly IDatabase _database;
        public CompareRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteCompare(string compareId)
        {
            return await _database.KeyDeleteAsync(compareId);
        }

        public async Task<Compare> GetCompare(string compareId)
        {
            var data = await _database.StringGetAsync(compareId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Compare>(data);
        }

        public async Task<Compare> UpdateCompare(Compare compare)
        {
             var created = await _database.StringSetAsync(compare.Id, JsonSerializer.Serialize(compare), TimeSpan.FromDays(20));

            if (!created)
            {
                return null;
            }

            return await GetCompare(compare.Id);
        }
    }
}