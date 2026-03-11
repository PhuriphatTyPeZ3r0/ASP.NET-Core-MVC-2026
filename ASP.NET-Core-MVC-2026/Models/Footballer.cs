using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASP.NET_Core_MVC_2026.Models
{
    public class Footballer
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public String Position { get; set; }
        public int MatchesPlayed { get; set; } 
        public int Goals { get; set; }
        public int Assists { get; set; }
        public int YellowCards { get; set; }
        public int RedCards { get; set; }

        [Range(0, 10, ErrorMessage = "Rating must be between 0 and 10.")]
        [Column(TypeName = "decimal(4, 2)")]
        public decimal Rating { get; set; } 

        // Foreign Keys
        public int ClubId { get; set; }
        public Club? Club { get; set; }
        public int PersonalId { get; set; }
        public Personal? Personal { get; set; }
    }
    public class Personal
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        public string Nationality { get; set; } 
        public int Height { get; set; } 
        public int Weight { get; set; } 
        public string PreferredFoot { get; set; } 
        public string Bio { get; set; } 
    }
    public class Club
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string StadiumName { get; set; } 
        public string City { get; set; } 
        public string League { get; set; } 
        public string ManagerName { get; set; } 
        public List<Footballer> Players { get; set; }
    }
}
