using ASP.NET_Core_MVC_2026.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NET_Core_MVC_2026.Controllers
{
    public class FootballerController : Controller
    {
        public IActionResult Index()
        {
            var FB1 = new Footballer();
            FB1.Id = 1;
            FB1.Name = "Cristiano Ronaldo";
            FB1.Position = "ST";
            FB1.Goals = 923;
            FB1.Assists = 200;

            var FB2 = new Footballer();
            FB2.Id = 2;
            FB2.Name = "Lionel Messi";
            FB2.Position = "CF";
            FB2.Goals = 800;
            FB2.Assists = 400;

            var FB3 = new Footballer();
            FB3.Id = 3;
            FB3.Name = "Neymar Jr.";
            FB3.Position = "LW";
            FB3.Goals = 200;
            FB3.Assists = 200;

            List<Footballer> ALLFB = new List<Footballer>();
            ALLFB.Add(FB1);
            ALLFB.Add(FB2);
            ALLFB.Add(FB3);

            return View(ALLFB);
        }
        public IActionResult Static()
        {
            return View();
        }
        public IActionResult History()
        {    
                return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
    }
}
