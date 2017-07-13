using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Wip.Core.Models;

namespace Wip.Web.DBContext
{

    public class WipContext : DbContext
    {
        //public string _dbConnection { get; set; }

        public WipContext(DbContextOptions<WipContext> options): base(options){}
        public WipContext() { }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);

        //    if (string.IsNullOrWhiteSpace(_dbConnection)) return;
        //    optionsBuilder.UseSqlServer(_dbConnection);
        //}
    }
}
