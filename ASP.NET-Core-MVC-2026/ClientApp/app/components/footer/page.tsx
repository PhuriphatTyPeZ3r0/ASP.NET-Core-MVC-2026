import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 bg-[#0d1b2a]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f0d060] flex items-center justify-center text-[#0d1b2a] font-black text-xs">
                ★
              </div>
              <span className="font-bold text-ucl-gold">UCL Football</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              ระบบจัดการข้อมูลนักฟุตบอล
              <br />
              ออกแบบตามสไตล์ UEFA Champions League
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#d4af37] mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-[#f0d060] transition-colors">Home</Link></li>
              <li><Link href="/history" className="hover:text-[#f0d060] transition-colors">Players</Link></li>
              <li><Link href="/form" className="hover:text-[#f0d060] transition-colors">Register</Link></li>
              <li><Link href="/contact" className="hover:text-[#f0d060] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#d4af37] mb-3 uppercase tracking-wider">
              Technology
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Next.js 16 + React 19</li>
              <li>ASP.NET Core MVC</li>
              <li>Tailwind CSS v4</li>
              <li>Entity Framework Core</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/30">
            &copy; 2026 UCL Football Manager. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with ★ Next.js &amp; ASP.NET Core
          </p>
        </div>
      </div>
    </footer>
  );
}
