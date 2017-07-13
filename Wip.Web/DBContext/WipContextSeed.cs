using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wip.Core.Models;

namespace Wip.Web.DBContext
{
    public class WipContextSeed
    {
        public WipContext _context { get; set; }

        public WipContextSeed(WipContext context)
        {
            _context = context;
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }

        public async Task SeedUser()
        {
            if (!_context.Users.Any())
            {
                _context.Users.Add(new User()
                {
                    Name = "WipUser",
                    Lastname = "ForTest",
                    Username = "wip",
                    Password = "wip",
                    LoginRecord = new List<Login>()
                });
            }

            await _context.SaveChangesAsync();
        }
    }
}
