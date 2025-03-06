using Microsoft.EntityFrameworkCore;

namespace UserManagementApp
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\Vihanga\Documents\GitHub\GUI\Recipe Finder\backend\users.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(u => u.username)
                .HasMaxLength(50);

            modelBuilder.Entity<User>()
                .Property(u => u.email)
                .HasMaxLength(100);
        }
    }
}