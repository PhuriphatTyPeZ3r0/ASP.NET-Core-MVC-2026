using ASP.NET_Core_MVC_2026.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NET_Core_MVC_2026.Data
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) 
        { 

        }
        public DbSet<Footballer> Footballers { get; set; }
        public DbSet<Personal> Personals { get; set; }
        public DbSet<Club> Clubs { get; set; }



    }
    
}
