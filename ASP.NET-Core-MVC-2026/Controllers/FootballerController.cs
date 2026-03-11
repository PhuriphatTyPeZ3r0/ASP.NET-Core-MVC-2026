using ASP.NET_Core_MVC_2026.Data;
using ASP.NET_Core_MVC_2026.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NET_Core_MVC_2026.Controllers
{
    public class FootballerController : Controller
    {
        private readonly ApplicationDBContext _db;

        public FootballerController(ApplicationDBContext db)
        {
            _db = db;
        }

        // ==========================================
        // หน้ารวมรายชื่อนักเตะ
        // ==========================================
        public async Task<IActionResult> Index()
        {
            // ดึงรายชื่อนักเตะ พร้อมดึงข้อมูลสโมสรมาด้วย (เผื่อนำไปแสดงในตาราง)
            IEnumerable<Footballer> allFootballer = await _db.Footballers
                .Include(f => f.Club)
                .ToListAsync();

            return View(allFootballer);
        }

        public IActionResult Static()
        {
            return View();
        }

        // ==========================================
        // หน้าประวัตินักเตะ (History/Profile) - Next.js SPA
        // ==========================================
        public IActionResult History()
        {
            return View();
        }

        // ==========================================
        // API สำหรับดึงข้อมูลนักเตะรายคน (JSON) ใช้กับ popup
        // ==========================================
        [HttpGet]
        public async Task<IActionResult> GetFootballerDetail(int id)
        {
            var footballer = await _db.Footballers
                .Include(f => f.Club)
                .Include(f => f.Personal)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (footballer == null)
            {
                return NotFound();
            }

            return Json(new
            {
                footballer.Id,
                footballer.Name,
                footballer.Position,
                footballer.Rating,
                footballer.MatchesPlayed,
                footballer.Goals,
                footballer.Assists,
                footballer.YellowCards,
                footballer.RedCards,
                Personal = footballer.Personal == null ? null : new
                {
                    BirthDate = footballer.Personal.BirthDate.ToString("dd MMM yyyy"),
                    footballer.Personal.Nationality,
                    footballer.Personal.Height,
                    footballer.Personal.Weight,
                    footballer.Personal.PreferredFoot,
                    footballer.Personal.Bio
                },
                Club = footballer.Club == null ? null : new
                {
                    footballer.Club.Name,
                    footballer.Club.League,
                    footballer.Club.ManagerName,
                    footballer.Club.StadiumName,
                    footballer.Club.City
                }
            });
        }

        // ==========================================
        // API สำหรับดึงรายชื่อนักเตะทั้งหมด (JSON) ใช้กับ Next.js
        // ==========================================
        [HttpGet]
        public async Task<IActionResult> GetAllFootballers()
        {
            var footballers = await _db.Footballers
                .Include(f => f.Club)
                .Select(f => new
                {
                    f.Id,
                    f.Name,
                    f.Position,
                    f.Rating,
                    ClubName = f.Club != null ? f.Club.Name : null
                })
                .ToListAsync();

            return Json(footballers);
        }
        public IActionResult Contact()
        {
            return View();
        }

        // ==========================================
        // API สำหรับเพิ่มนักเตะใหม่ (JSON) ใช้กับ Next.js
        // ==========================================
        [HttpPost]
        public async Task<IActionResult> CreateFootballer([FromBody] Footballer obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Footballers.Add(obj);
            await _db.SaveChangesAsync();
            return Ok(new { success = true, id = obj.Id });
        }

        // ==========================================
        // หน้าฟอร์มสำหรับเพิ่มข้อมูลนักเตะ (GET)
        // ==========================================
        public IActionResult Form()
        {
            return View();
        }

        // Redirect /Footballer/Create → /Footballer/Form
        public IActionResult Create()
        {
            return RedirectToAction("Form");
        }

        // ==========================================
        // รับข้อมูลจากฟอร์มและบันทึกลง Database (POST)
        // ==========================================
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Form(Footballer obj)
        {
            // ตรวจสอบความถูกต้องของข้อมูลตาม Data Annotations ใน Model (เช่น Required, Range)
            if (ModelState.IsValid)
            {
                // Entity Framework จะทำการ Insert ข้อมูลลงทั้ง 3 ตารางให้แบบอัตโนมัติ
                // (Footballers, Clubs, Personals) เพราะมันอยู่ใน Object ก้อนเดียวกัน
                _db.Footballers.Add(obj);
                await _db.SaveChangesAsync();

                return RedirectToAction("Index");
            }

            // ถ้าข้อมูลไม่ถูกต้อง ให้ส่งข้อมูลชุดเดิมกลับไปแสดงที่หน้าฟอร์มพร้อมแจ้งเตือน (Validation)
            return View(obj);
        }
    }
}