using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly StoreContext __context;
        public GenericRepository(StoreContext _context)
        {
            __context = _context;
        }

        public async Task<T> GetById(int id)
        {
            return await __context.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> ListAll()
        {
            return await __context.Set<T>().ToListAsync();
        }
    }
}