using System.Collections.Generic;

namespace Core.Entities
{
    public class Compare
    {
        public Compare()
        {
        }

        public Compare(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<CompareItem> Items { get; set; } = new List<CompareItem>();
        public string ClientSecret { get; set; }
    }
}