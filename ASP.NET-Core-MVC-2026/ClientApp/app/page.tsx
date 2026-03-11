"use client";

import Layout from "./components/layout/layout";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full liquid-blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1a73e8]/8 rounded-full liquid-blob blur-3xl pointer-events-none" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-[#f0d060]/5 rounded-full liquid-blob blur-2xl pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Star Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-float">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm text-white/60 font-medium">UEFA Champions League Style</span>
            <span className="text-[#d4af37] text-xl">★</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
            <span className="text-ucl-gold">UCL</span>
            <br />
            <span className="text-white">Football Manager</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            สำรวจประวัติและข้อมูลของนักฟุตบอลที่คุณชื่นชอบ
            <br />
            พร้อมระบบจัดการข้อมูลแบบครบวงจร
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/history" className="btn-ucl text-lg">
              ⚽ ดูรายชื่อนักเตะ
            </Link>
            <Link href="/form" className="btn-ucl-outline text-lg">
              ✚ ลงทะเบียนนักเตะ
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto">
            {[
              { label: "Players Data", icon: "⚽" },
              { label: "Club Info", icon: "🏟" },
              { label: "Live Stats", icon: "📊" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs text-white/50 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
