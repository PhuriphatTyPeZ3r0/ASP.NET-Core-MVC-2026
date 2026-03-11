"use client";

import { FootballerDetail } from "../../types";

interface Props {
  player: FootballerDetail;
  onClose: () => void;
}

export default function PlayerModal({ player, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto mx-4 border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "rgba(13, 27, 42, 0.95)" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#f0d060]/5 px-6 py-4 rounded-t-2xl flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <h2 className="text-xl font-bold text-ucl-gold">ข้อมูลนักเตะ</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white text-lg transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* Name + Rating Banner */}
          <div className="bg-white/5 rounded-xl p-5 mb-6 flex justify-between items-center border border-white/10">
            <div>
              <h2 className="text-2xl font-black text-white">
                {player.name}
              </h2>
              <span className="inline-block mt-2 bg-[#27ae60]/20 text-[#27ae60] text-sm font-semibold px-3 py-1 rounded-full border border-[#27ae60]/30">
                {player.position}
              </span>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-sm">Rating</p>
              <p className="text-3xl font-black text-[#ffd700]">
                {player.rating} ★
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-[#d4af37]/20 to-transparent px-4 py-3 border-b border-white/10">
                <h3 className="font-semibold text-[#d4af37] text-sm uppercase tracking-wider">ข้อมูลส่วนตัว (Personal)</h3>
              </div>
              <div className="p-4">
                {player.personal ? (
                  <>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-white/40 w-2/5">วัน/เดือน/ปีเกิด:</td>
                          <td className="py-2.5 text-white/80">{player.personal.birthDate}</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-white/40">สัญชาติ:</td>
                          <td className="py-2.5 text-white/80">{player.personal.nationality || "-"}</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-white/40">ส่วนสูง / น้ำหนัก:</td>
                          <td className="py-2.5 text-white/80">{player.personal.height} ซม. / {player.personal.weight} กก.</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-white/40">เท้าที่ถนัด:</td>
                          <td className="py-2.5 text-white/80">{player.personal.preferredFoot || "-"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="border-t border-white/10 mt-3 pt-3">
                      <h4 className="text-white/40 font-semibold text-xs uppercase tracking-wider mb-1">ประวัติย่อ (Bio)</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{player.personal.bio || "-"}</p>
                    </div>
                  </>
                ) : (
                  <p className="text-white/30">ไม่มีข้อมูลส่วนตัว</p>
                )}
              </div>
            </div>

            {/* Club + Stats */}
            <div className="space-y-6">
              {/* Club */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="bg-white/5 px-4 py-3 border-b border-white/10">
                  <h3 className="font-semibold text-white/80 text-sm uppercase tracking-wider">สังกัดสโมสร (Club)</h3>
                </div>
                <div className="p-4">
                  {player.club ? (
                    <>
                      <h4 className="text-lg font-bold text-white">{player.club.name}</h4>
                      <div className="mt-2 space-y-1 text-sm">
                        <p><span className="text-white/40">ลีก:</span> <span className="text-white/70">{player.club.league || "-"}</span></p>
                        <p><span className="text-white/40">ผู้จัดการทีม:</span> <span className="text-white/70">{player.club.managerName || "-"}</span></p>
                        <p><span className="text-white/40">สนาม:</span> <span className="text-white/70">{player.club.stadiumName || "-"} ({player.club.city || "-"})</span></p>
                      </div>
                    </>
                  ) : (
                    <p className="text-white/30">ไม่มีข้อมูลสโมสร</p>
                  )}
                </div>
              </div>

              {/* Season Stats */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="bg-gradient-to-r from-[#27ae60]/20 to-transparent px-4 py-3 border-b border-white/10">
                  <h3 className="font-semibold text-[#27ae60] text-sm uppercase tracking-wider">สถิติฤดูกาล (Stats)</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 text-center gap-2 mb-4">
                    <div className="border-r border-white/10">
                      <p className="text-2xl font-black text-[#1a73e8]">{player.matchesPlayed}</p>
                      <p className="text-xs text-white/40">ลงเล่น</p>
                    </div>
                    <div className="border-r border-white/10">
                      <p className="text-2xl font-black text-[#27ae60]">{player.goals}</p>
                      <p className="text-xs text-white/40">ประตู</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#00bcd4]">{player.assists}</p>
                      <p className="text-xs text-white/40">แอสซิสต์</p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="grid grid-cols-2 text-center gap-2">
                      <div className="border-r border-white/10">
                        <p className="text-xl font-bold text-[#ffd700]">{player.yellowCards}</p>
                        <p className="text-xs text-white/40">ใบเหลือง</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-[#e74c3c]">{player.redCards}</p>
                        <p className="text-xs text-white/40">ใบแดง</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
