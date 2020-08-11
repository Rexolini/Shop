using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser{
                    DisplayName = "Admin",
                    Email = "admin@test.com",
                    UserName = "admin@test.com",
                    Address = new Address
                    {
                        FirstName = "Admin",
                        LastName = "Admin",
                        Street = "Example Street",
                        City = "Example City",
                        State = " EC ",
                        Zippcode = "15-400"
                    }
                };

                await userManager.CreateAsync(user, "Password123!");
            }
        }
    }
}