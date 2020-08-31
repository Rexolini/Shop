using System.Collections.Generic;

namespace Core.Entities
{
    public class Favourite
    {
        public Favourite()
        {
        }

        public Favourite(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<FavouriteItem> Items { get; set; } = new List<FavouriteItem>();
        public string ClientSecret { get; set; }
        
    }
}