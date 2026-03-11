"use client";

import { useState } from "react";
import Layout from "../components/layout/layout";
import "../globals.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="relative min-h-screen py-8 px-4">
        {/* Background decoration */}
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full liquid-blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#1a73e8]/5 rounded-full liquid-blob blur-3xl pointer-events-none" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-black mb-2">
              <span className="text-ucl-gold">★</span> ติดต่อเรา
            </h1>
            <p className="text-white/40">Contact Us — เราพร้อมรับฟังทุกข้อเสนอแนะ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  detail: "contact@ucl-football.com",
                  sub: "ตอบกลับภายใน 24 ชั่วโมง",
                },
                {
                  icon: "📍",
                  title: "Location",
                  detail: "Bangkok, Thailand",
                  sub: "สำนักงานใหญ่",
                },
                {
                  icon: "📞",
                  title: "Phone",
                  detail: "+66 XX-XXX-XXXX",
                  sub: "จันทร์ - ศุกร์, 09:00 - 18:00",
                },
                {
                  icon: "🌐",
                  title: "Social Media",
                  detail: "@UCLFootballManager",
                  sub: "ติดตามข่าวสารและอัพเดท",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#f0d060]/5 flex items-center justify-center text-xl shrink-0 border border-[#d4af37]/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-[#f0d060] font-medium">{item.detail}</p>
                    <p className="text-white/30 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-ucl-gold mb-6 flex items-center gap-2">
                <span>✉</span> ส่งข้อความถึงเรา
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4 animate-float">✓</div>
                  <h3 className="text-xl font-bold text-[#27ae60] mb-2">ส่งข้อความสำเร็จ!</h3>
                  <p className="text-white/40 text-sm">เราจะติดต่อกลับโดยเร็วที่สุด</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ucl-outline mt-6 text-sm"
                  >
                    ส่งข้อความอีกครั้ง
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">ชื่อ-นามสกุล</label>
                    <input required className="glass-input w-full" placeholder="กรุณาระบุชื่อ" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">อีเมล</label>
                    <input type="email" required className="glass-input w-full" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">หัวข้อ</label>
                    <input required className="glass-input w-full" placeholder="หัวข้อที่ต้องการติดต่อ" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">ข้อความ</label>
                    <textarea
                      required
                      rows={4}
                      className="glass-input w-full resize-none"
                      placeholder="เขียนข้อความของคุณที่นี่..."
                    />
                  </div>
                  <button type="submit" className="btn-ucl w-full">
                    ส่งข้อความ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
