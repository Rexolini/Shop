using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ICompareRepository
    {
        Task<Compare> GetCompare(string compareId);
        Task<Compare> UpdateCompare(Compare compare);
        Task<bool> DeleteCompare(string compareId);
    }
}