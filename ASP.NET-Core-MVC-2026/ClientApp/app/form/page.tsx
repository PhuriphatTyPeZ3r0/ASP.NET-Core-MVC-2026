"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/layout";
import "../globals.css";

const positionGroups = [
  {
    label: "Goalkeeper",
    options: [{ value: "GK", label: "GK - Goalkeeper" }],
  },
  {
    label: "Defenders",
    options: [
      { value: "CB", label: "CB - Centre Back" },
      { value: "LB", label: "LB - Left Back" },
      { value: "RB", label: "RB - Right Back" },
      { value: "LWB", label: "LWB - Left Wing Back" },
      { value: "RWB", label: "RWB - Right Wing Back" },
    ],
  },
  {
    label: "Midfielders",
    options: [
      { value: "CDM", label: "CDM - Central Defensive Midfielder" },
      { value: "CM", label: "CM - Central Midfielder" },
      { value: "CAM", label: "CAM - Central Attacking Midfielder" },
      { value: "LM", label: "LM - Left Midfielder" },
      { value: "RM", label: "RM - Right Midfielder" },
    ],
  },
  {
    label: "Forwards",
    options: [
      { value: "ST", label: "ST - Striker" },
      { value: "CF", label: "CF - Centre Forward" },
      { value: "LW", label: "LW - Left Wing" },
      { value: "RW", label: "RW - Right Wing" },
    ],
  },
];

export default function FormPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      position: formData.get("position"),
      matchesPlayed: Number(formData.get("matchesPlayed")) || 0,
      goals: Number(formData.get("goals")) || 0,
      assists: Number(formData.get("assists")) || 0,
      yellowCards: Number(formData.get("yellowCards")) || 0,
      redCards: Number(formData.get("redCards")) || 0,
      rating: Number(formData.get("rating")) || 0,
      club: {
        name: formData.get("clubName"),
        stadiumName: formData.get("stadiumName"),
        city: formData.get("city"),
        league: formData.get("league"),
        managerName: formData.get("managerName"),
      },
      personal: {
        birthDate: formData.get("birthDate"),
        nationality: formData.get("nationality"),
        height: Number(formData.get("height")) || 0,
        weight: Number(formData.get("weight")) || 0,
        preferredFoot: formData.get("preferredFoot"),
        bio: formData.get("bio"),
      },
    };

    try {
      const res = await fetch("/api/CreateFootballer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to save");
      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-screen py-8 px-4">
        {/* Background decoration */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full liquid-blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1a73e8]/5 rounded-full liquid-blob blur-3xl pointer-events-none" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-black">
              <span className="text-ucl-gold">★</span> ลงทะเบียนนักฟุตบอล
            </h1>
            <p className="text-white/40 mt-1">กรอกข้อมูลเพื่อเพิ่มนักเตะเข้าสู่ระบบ</p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-[#27ae60]/10 border border-[#27ae60]/30 text-[#27ae60] flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>บันทึกข้อมูลสำเร็จ!</span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-[#e74c3c]/10 border border-[#e74c3c]/30 text-[#e74c3c] flex items-center gap-3">
              <span className="text-xl">✕</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Section: General */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <span className="text-[#d4af37]">⚽</span>
                <h2 className="text-lg font-bold text-ucl-gold uppercase tracking-wider">ข้อมูลทั่วไป (Footballer)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-white/50 mb-1.5">ชื่อนักเตะ</label>
                  <input name="name" required className="glass-input w-full" placeholder="ระบุชื่อ-นามสกุล" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ตำแหน่ง</label>
                  <select name="position" required className="glass-select w-full">
                    <option value="">-- เลือกตำแหน่ง --</option>
                    {positionGroups.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ลงเล่น</label>
                  <input name="matchesPlayed" type="number" min="0" className="glass-input w-full" defaultValue={0} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ประตู</label>
                  <input name="goals" type="number" min="0" className="glass-input w-full" defaultValue={0} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">แอสซิสต์</label>
                  <input name="assists" type="number" min="0" className="glass-input w-full" defaultValue={0} />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Rating</label>
                  <input name="rating" type="number" step="0.01" min="0" max="10" className="glass-input w-full" defaultValue={0} />
                </div>
                <div>
                  <label className="block text-sm text-[#ffd700]/70 mb-1.5">ใบเหลือง</label>
                  <input name="yellowCards" type="number" min="0" className="glass-input w-full" defaultValue={0} />
                </div>
                <div>
                  <label className="block text-sm text-[#e74c3c]/70 mb-1.5">ใบแดง</label>
                  <input name="redCards" type="number" min="0" className="glass-input w-full" defaultValue={0} />
                </div>
              </div>
            </div>

            {/* Section: Club */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <span className="text-[#d4af37]">🏟</span>
                <h2 className="text-lg font-bold text-ucl-gold uppercase tracking-wider">ข้อมูลสโมสร (Club)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ชื่อสโมสร</label>
                  <input name="clubName" className="glass-input w-full" placeholder="เช่น Real Madrid" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ชื่อสนาม</label>
                  <input name="stadiumName" className="glass-input w-full" placeholder="เช่น Santiago Bernabéu" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">เมือง</label>
                  <input name="city" className="glass-input w-full" placeholder="เช่น Madrid" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ลีกการแข่งขัน</label>
                  <input name="league" className="glass-input w-full" placeholder="เช่น La Liga" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ผู้จัดการทีม</label>
                  <input name="managerName" className="glass-input w-full" placeholder="เช่น Carlo Ancelotti" />
                </div>
              </div>
            </div>

            {/* Section: Personal */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <span className="text-[#d4af37]">👤</span>
                <h2 className="text-lg font-bold text-ucl-gold uppercase tracking-wider">ข้อมูลส่วนตัว (Personal)</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">วันเกิด</label>
                  <input name="birthDate" type="date" className="glass-input w-full" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">สัญชาติ</label>
                  <input name="nationality" className="glass-input w-full" placeholder="Thai" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">ส่วนสูง (ซม.)</label>
                  <input name="height" type="number" min="0" className="glass-input w-full" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">น้ำหนัก (กก.)</label>
                  <input name="weight" type="number" min="0" className="glass-input w-full" />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">เท้าที่ถนัด</label>
                  <select name="preferredFoot" className="glass-select w-full">
                    <option value="Right">ขวา</option>
                    <option value="Left">ซ้าย</option>
                    <option value="Both">ทั้งสองข้าง</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-white/50 mb-1.5">ประวัติย่อ</label>
                <textarea name="bio" rows={3} className="glass-input w-full resize-none" placeholder="เขียนประวัติย่อของนักเตะ..." />
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="btn-ucl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#0d1b2a]/30 border-t-[#0d1b2a] rounded-full animate-spin" />
                    กำลังบันทึก...
                  </span>
                ) : (
                  "✓ บันทึกข้อมูล"
                )}
              </button>
              <Link href="/history" className="btn-ucl-outline text-lg">
                ยกเลิก
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
