using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace UserManagementApp
{
    [Index(nameof(email), IsUnique = true)]
    public class User
    {
        [Key]
        public int userid { get; set; }

        [Required]
        [StringLength(50)]
        public string username { get; set; }

        [Required]
        [StringLength(100)]
        public string email { get; set; }

        [Required]
        [StringLength(100)]
        public string password { get; set; }
    }
}