using System.ComponentModel.DataAnnotations;

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
        public decimal Rating { get; set; } 

        // Foreign Keys
        public int ClubId { get; set; } 
        public int PersonalId { get; set; } 
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
