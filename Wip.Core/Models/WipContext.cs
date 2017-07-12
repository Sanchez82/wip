using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Wip.Core.Models
{
    public class WipContext : DbContext
    {
        public string _dbConnection { get; set; }
        public WipContext(IConfigurationRoot config)
        {
            _dbConnection = config["DefaultConnection"];
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_dbConnection); 
        }
    }
}
