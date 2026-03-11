"use client";

import { useEffect, useState } from "react";
import { FootballerSummary, FootballerDetail } from "../types";
import PlayerModal from "../components/PlayerModel/PlayerModal";
import Layout from "../components/layout/layout";
import "../globals.css";

export default function HistoryPage() {
  const [players, setPlayers] = useState<FootballerSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState<FootballerDetail | null>(
    null
  );
  const [modalLoading, setModalLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/GetAllFootballers")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handlePlayerClick = async (id: number) => {
    setModalLoading(true);
    setSelectedPlayer(null);
    try {
      const res = await fetch(`/api/GetFootballerDetail/${id}`);
      if (!res.ok) throw new Error("Not found");
      const data: FootballerDetail = await res.json();
      setSelectedPlayer(data);
    } catch {
      setSelectedPlayer(null);
    } finally {
      setModalLoading(false);
    }
  };

  const filteredPlayers = players.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.clubName && p.clubName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="relative min-h-screen py-8 px-4">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full liquid-blob blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1a73e8]/5 rounded-full liquid-blob blur-3xl pointer-events-none" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black">
                <span className="text-ucl-gold">★</span> รายชื่อนักฟุตบอล
              </h1>
              <p className="text-white/40 mt-1">คลิกที่ชื่อนักเตะเพื่อดูรายละเอียด</p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="ค้นหานักเตะ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input w-full pl-10 pr-4"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Player Count Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-white/50">
            ⚽ ทั้งหมด {filteredPlayers.length} คน
          </div>

          {/* Table */}
          <div className="glass-card overflow-hidden">
            {loading ? (
              <div className="py-20 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-14 mx-6 rounded-lg animate-shimmer" />
                ))}
              </div>
            ) : filteredPlayers.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">⚽</div>
                <p className="text-white/40">ไม่พบข้อมูลนักเตะ</p>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#d4af37]/20 to-[#f0d060]/5 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#d4af37] uppercase tracking-wider">#</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#d4af37] uppercase tracking-wider">ชื่อนักเตะ</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#d4af37] uppercase tracking-wider">ตำแหน่ง</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#d4af37] uppercase tracking-wider">สโมสร</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.map((player, index) => (
                    <tr
                      key={player.id}
                      className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-all duration-300 group"
                      onClick={() => handlePlayerClick(player.id)}
                    >
                      <td className="px-6 py-4 text-white/30 text-sm">{index + 1}</td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-white group-hover:text-[#f0d060] transition-colors">
                          {player.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-[#27ae60]/20 text-[#27ae60] text-xs font-semibold px-3 py-1 rounded-full border border-[#27ae60]/30">
                          {player.position}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60 text-sm">
                        {player.clubName || "-"}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#ffd700] font-bold">
                          {player.rating} ★
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Loading Modal */}
        {modalLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="glass-card p-10 text-center">
              <div className="w-12 h-12 border-2 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin mx-auto" />
              <p className="mt-4 text-white/50 text-sm">กำลังโหลดข้อมูล...</p>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedPlayer && (
          <PlayerModal
            player={selectedPlayer}
            onClose={() => setSelectedPlayer(null)}
          />
        )}
      </div>
    </Layout>
  );
}
