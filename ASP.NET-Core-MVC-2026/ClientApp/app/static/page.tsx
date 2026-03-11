"use client";

import Link from "next/link";
import Layout from "../components/layout/layout";
import "../globals.css";

const techStack = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "Next.js 16", desc: "React Framework with App Router & Turbopack" },
      { name: "React 19", desc: "UI Library with Server Components" },
      { name: "TypeScript 5", desc: "Type-safe JavaScript" },
      { name: "Tailwind CSS v4", desc: "Utility-first CSS Framework" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "ASP.NET Core MVC", desc: "Web Application Framework" },
      { name: "Entity Framework Core", desc: "Object-Relational Mapper (ORM)" },
      { name: "SQL Server", desc: "Relational Database Management" },
      { name: "REST API", desc: "JSON API Endpoints" },
    ],
  },
  {
    category: "Design",
    icon: "✨",
    items: [
      { name: "UCL Theme", desc: "UEFA Champions League Inspired" },
      { name: "Liquid UI", desc: "Glass-morphism & Fluid Animations" },
      { name: "Responsive", desc: "Mobile-first Design Approach" },
      { name: "Dark Mode", desc: "Dark Navy Color Scheme" },
    ],
  },
];

const features = [
  {
    icon: "⚽",
    title: "จัดการข้อมูลนักเตะ",
    desc: "เพิ่ม ดู และจัดการข้อมูลนักฟุตบอลได้ครบวงจร",
  },
  {
    icon: "📊",
    title: "สถิติแบบ Real-time",
    desc: "ดูสถิติการแข่งขัน ประตู แอสซิสต์ และใบเตือนแบบเรียลไทม์",
  },
  {
    icon: "🏟",
    title: "ข้อมูลสโมสร",
    desc: "รายละเอียดสโมสร สนามแข่ง ผู้จัดการทีม และลีก",
  },
  {
    icon: "🔍",
    title: "ค้นหาอัจฉริยะ",
    desc: "ค้นหานักเตะด้วยชื่อ ตำแหน่ง หรือสโมสร",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "ใช้งานได้ทุกอุปกรณ์ ทั้ง Desktop, Tablet และ Mobile",
  },
  {
    icon: "🌙",
    title: "UCL Dark Theme",
    desc: "ธีมสีกรมท่า-ทอง แรงบันดาลใจจาก UEFA Champions League",
  },
];

export default function StaticPage() {
  return (
    <Layout>
      <div className="relative min-h-screen py-8 px-4">
        {/* Background decoration */}
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full liquid-blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-[15%] right-[-5%] w-[400px] h-[400px] bg-[#1a73e8]/5 rounded-full liquid-blob blur-3xl pointer-events-none" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-[#d4af37]">ℹ</span>
              <span className="text-sm text-white/50">About This Project</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-4">
              <span className="text-ucl-gold">UCL</span> Football Manager
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto leading-relaxed">
              ระบบจัดการข้อมูลนักฟุตบอลที่ออกแบบด้วยแรงบันดาลใจจาก UEFA Champions League
              พร้อม Liquid UI ที่สวยงามและใช้งานง่าย
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-ucl-gold mb-6 flex items-center gap-2">
              <span>★</span> คุณสมบัติหลัก
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="glass-card p-5 group">
                  <div className="text-3xl mb-3 group-hover:animate-float">{f.icon}</div>
                  <h3 className="font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-ucl-gold mb-6 flex items-center gap-2">
              <span>★</span> เทคโนโลยีที่ใช้
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((group) => (
                <div key={group.category} className="glass-card overflow-hidden">
                  <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent px-5 py-4 border-b border-white/10 flex items-center gap-2">
                    <span className="text-xl">{group.icon}</span>
                    <h3 className="font-bold text-[#d4af37] uppercase tracking-wider text-sm">
                      {group.category}
                    </h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                        <p className="text-xs text-white/35">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f0d060] flex items-center justify-center text-[#0d1b2a] text-2xl font-black mx-auto mb-4 shadow-lg shadow-[#d4af37]/20">
              ★
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ASP.NET Core MVC 2026</h3>
            <p className="text-white/40 text-sm max-w-lg mx-auto mb-6">
              โปรเจกต์นี้พัฒนาด้วย ASP.NET Core MVC ร่วมกับ Next.js
              เพื่อสร้างประสบการณ์ผู้ใช้ที่ดีที่สุด
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/" className="btn-ucl text-sm">
                กลับหน้าแรก
              </Link>
              <Link href="/history" className="btn-ucl-outline text-sm">
                ดูรายชื่อนักเตะ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
