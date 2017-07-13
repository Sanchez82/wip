using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Wip.Core.Models;

namespace Wip.Web.DBContext
{

    public class WipContext : DbContext
    {
        public WipContext(DbContextOptions<WipContext> options): base(options){}
        public WipContext() { }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
    }
}
