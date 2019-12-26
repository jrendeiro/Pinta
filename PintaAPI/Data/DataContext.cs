using PintaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace PintaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
            
        public DbSet<Event> Events { get; set; }
        public DbSet<Place> Places { get; set; }
    }
}