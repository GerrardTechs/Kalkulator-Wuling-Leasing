// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { VEHICLES, TRADE_IN_ELIGIBLE_CARS, LEASING_RATES } from './data/wulingData';
import {
  Car,
  CheckCircle2,
  AlertCircle,
  Calculator,
  Tag,
  ShieldCheck,
  TrendingDown,
  Info,
  Building2,
  Calendar,
  Gift,
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';

const formatRp = (num) => {
  const n = Math.round(Number(num) || 0);
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
};

export default function App() {
  const [selectedId, setSelectedId] = useState(VEHICLES[0].id);
  const [nik, setNik] = useState('2026');
  const [payment, setPayment] = useState('kredit');
  const [leasing, setLeasing] = useState('ADIRA');
  const [royalis, setRoyalis] = useState(false);
  const [tradeIn, setTradeIn] = useState(false);

  // Mode Simulasi DP
  const [dpMode, setDpMode] = useState('NETT');
  const [dpInput, setDpInput] = useState('');
  const [isCustomSim, setIsCustomSim] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const vehicle = useMemo(
    () => VEHICLES.find((v) => v.id === selectedId) || VEHICLES[0],
    [selectedId]
  );

  // Reset promo & simulasi saat berganti unit atau NIK
  useEffect(() => {
    if (!vehicle.canRoyalis) setRoyalis(false);
    if (!vehicle.canTradeIn) setTradeIn(false);
    setIsCustomSim(false);
    setDpInput('');
  }, [vehicle, leasing, nik]);

  const handleToggleRoyalis = () => {
    const next = !royalis;
    setRoyalis(next);
    if (next) setTradeIn(false);
  };

  const handleToggleTradeIn = () => {
    const next = !tradeIn;
    setTradeIn(next);
    if (next) setRoyalis(false);
  };

  // Fungsi yang tadi hilang untuk menangani input DP manual
  const handleDpChange = (val) => {
    setDpInput(val);
    setIsCustomSim(val !== '' && Number(val) > 0);
  };

  // 1. Hitung Diskon, Subvention, dan Total Potongan
  const calculation = useMemo(() => {
    let dealerDisc = vehicle.disc[nik] || 0;

    // Pengecualian Diskon Confero NIK 25 di luar CIMB
    if (vehicle.id === 'confero_db' && nik === '2025' && leasing !== 'CIMB') {
      dealerDisc = 57000000;
    }

    // Pengecualian Darion EV EX Cash (All Risk)
    if (vehicle.cashNoDiscAllRisk && payment === 'cash') {
      dealerDisc = 0;
    }

    let subvention = 0;
    if (payment === 'kredit') {
      const subData = vehicle.subvention;
      if (subData && subData[nik]) {
        subvention = subData[nik][leasing] || 0;
      }
    }

    let extraPromo = 0;
    if (royalis && vehicle.canRoyalis) extraPromo = 8000000;
    else if (tradeIn && vehicle.canTradeIn) extraPromo = 8000000;

    const totalPotongan = dealerDisc + subvention + extraPromo;

    return {
      dealerDisc,
      subvention,
      extraPromo,
      totalPotongan,
    };
  }, [vehicle, nik, payment, leasing, royalis, tradeIn]);

  // 2. Bangun Tabel Angsuran Dinamis
  const simulatedRows = useMemo(() => {
    const rateConfig = LEASING_RATES[leasing] || LEASING_RATES.ADIRA;
    let baseList = vehicle.pricelist[leasing] || [];

    let isFallback = false;
    if (baseList.length === 0) {
      isFallback = true;
      let tenors = leasing === 'CIMB' ? [11, 23, 35, 47, 59] : [12, 24, 36, 48, 60];
      if (leasing === 'SGMW') {
        tenors = vehicle.type === 'ICE' ? [12, 24] : [12, 24, 36];
      }
      baseList = tenors.map((t) => {
        const years = Math.ceil(t / 12);
        const flatRate = rateConfig[t] || 0.07;
        const principal = vehicle.otr * 0.80; 
        const totalLoan = principal * (1 + flatRate * years);
        const angsuran = Math.round(totalLoan / t / 1000) * 1000;
        const tdp = Math.round((vehicle.otr * 0.20 + 6500000) / 10000) * 10000;
        return { tenor: t, tdp, angsuran, label: 'Estimasi Sistem' };
      });
    }

    const rawInput = Number(String(dpInput).replace(/\D/g, '')) || 0;

    return baseList.map((row) => {
      const years = Math.ceil(row.tenor / 12);
      const flatRate = rateConfig[row.tenor] || 0.07;
      const brochureTdpKotor = row.tdp;
      
      // Hitung DP Nett Brosur Asli
      const brochureDpNett = row.isNettPromo
        ? row.tdp
        : Math.max(0, brochureTdpKotor - calculation.totalPotongan);

      // Jika user belum mengisi simulasi, tampilkan default brosur
      if (!isCustomSim || rawInput <= 0) {
        return {
          ...row,
          years,
          simTdpKotor: brochureTdpKotor,
          simDpNett: brochureDpNett,
          simAngsuran: row.angsuran,
          diffAngsuran: 0,
          belowMinDp: false,
          isFallback
        };
      }

      // Mode Hitung Dinamis berdasarkan input User
      let targetTdpKotor = 0;
      let targetDpNett = 0;

      if (dpMode === 'NETT') {
        targetDpNett = rawInput;
        targetTdpKotor = row.isNettPromo
          ? rawInput
          : rawInput + calculation.totalPotongan;
      } else {
        targetTdpKotor = rawInput;
        targetDpNett = row.isNettPromo
          ? rawInput
          : Math.max(0, rawInput - calculation.totalPotongan);
      }

      // Hitung selisih angsuran akibat perubahan DP
      const deltaDp = targetTdpKotor - brochureTdpKotor;
      const deltaAngsuran = Math.round((deltaDp * (1 + flatRate * years)) / row.tenor / 1000) * 1000;
      const newAngsuran = Math.max(500000, row.angsuran - deltaAngsuran);

      return {
        ...row,
        years,
        simTdpKotor: targetTdpKotor,
        simDpNett: targetDpNett,
        simAngsuran: newAngsuran,
        diffAngsuran: newAngsuran - row.angsuran,
        belowMinDp: targetTdpKotor < brochureTdpKotor,
        isFallback
      };
    });
  }, [vehicle, leasing, dpInput, dpMode, isCustomSim, calculation.totalPotongan]);

  const handleCopyWA = (row, idx) => {
    const text = `*SIMULASI KREDIT WULING ARISTA LAMPUNG*
-----------------------------------------
*Unit:* ${vehicle.name} (NIK ${nik})
*Harga OTR:* ${formatRp(vehicle.otr)}
*Leasing:* ${leasing}

*RINCIAN DP & DISKON:*
• Total DP Kotor: ${formatRp(row.simTdpKotor)}
• Total Potongan/Subsidi: - ${formatRp(calculation.totalPotongan)}
• *Setor DP (Nett): ${formatRp(row.simDpNett)}*

*ANGSURAN & TENOR:*
• Tenor: *${row.tenor} Bulan (${row.years} Tahun)*
• Angsuran: *${formatRp(row.simAngsuran)} / bulan*

*SALES PROGRAM & BENEFIT KONSUMEN:*
${(vehicle.salesProgram || []).map((b) => `✅ ${b}`).join('\n')}

_Info & Pemesanan Test Drive:_
*Alessandro Farrel — Wuling Arista Lampung*
📍 Jl. ZA Pagar Alam No. 99, Rajabasa, Bandar Lampung
📱 WA: 0857-6839-0480`;

    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const currentStock = vehicle.stock[nik] || [];
  const isAvailable = currentStock.length > 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <header className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-blue-600/20 border border-blue-500/40 rounded-xl text-blue-400">
              <Calculator size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Wuling Leasing Calculator Pro
              </h1>
              <p className="text-slate-400 text-sm">
                Kalkulasi Otomatis DP Konsumen, Angsuran & Sales Program — Wuling Arista Lampung
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-4 py-2 rounded-xl text-xs font-medium text-slate-300">
            <Car size={16} className="text-blue-400" />
            <span>Update Oktober–November 2026</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-5">
              <h2 className="text-lg font-semibold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Car size={20} className="text-blue-400" />
                1. Pilih Unit & NIK
              </h2>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Model Kendaraan
                </label>
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white font-medium focus:outline-none focus:border-blue-500 transition"
                >
                  <optgroup label="Kendaraan Listrik (EV & PHEV)">
                    {VEHICLES.filter((v) => v.type !== 'ICE').map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} ({v.type}) — {formatRp(v.otr)}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Kendaraan Bensin (ICE)">
                    {VEHICLES.filter((v) => v.type === 'ICE').map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} (ICE) — {formatRp(v.otr)}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Tahun NIK
                  </label>
                  <select
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="2026">NIK 2026</option>
                    <option value="2025">NIK 2025</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Metode Pembelian
                  </label>
                  <select
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white font-medium focus:outline-none focus:border-blue-500"
                  >
                    <option value="kredit">Kredit (Leasing)</option>
                    <option value="cash">Cash (Tunai)</option>
                  </select>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border ${
                  isAvailable
                    ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-200'
                    : 'bg-rose-950/40 border-rose-700/60 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm">
                  {isAvailable ? (
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="text-rose-400 shrink-0" />
                  )}
                  <span>
                    {isAvailable
                      ? `Stok Ready di Lampung (${currentStock.length} Data)`
                      : `Stok NIK ${nik} Habis di Lampung (Perlu PO)`}
                  </span>
                </div>
                {isAvailable && (
                  <ul className="mt-2 space-y-1 text-xs text-emerald-300/90 pl-6 list-disc">
                    {currentStock.map((s, idx) => (
                      <li key={idx}>
                        <strong>{s.color}</strong> — Posisi: {s.loc} ({s.note})
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {payment === 'kredit' && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Pilih Perusahaan Leasing
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['ADIRA', 'CIMB', 'SGMW', 'MTF', 'INDOMOBIL'].map((ls) => (
                      <button
                        key={ls}
                        type="button"
                        onClick={() => setLeasing(ls)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                          leasing === ls
                            ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {ls === 'SGMW' ? 'SGMW (WuFi)' : ls}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Tag size={14} className="text-blue-400" />
                  2. Promo Tambahan
                </h3>

                <label
                  className={`flex items-start gap-3 p-3 rounded-xl border transition ${
                    !vehicle.canRoyalis
                      ? 'opacity-40 cursor-not-allowed bg-slate-950 border-slate-800'
                      : royalis
                      ? 'bg-blue-950/40 border-blue-500/60 cursor-pointer'
                      : 'bg-slate-950 border-slate-800 cursor-pointer hover:border-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    disabled={!vehicle.canRoyalis}
                    checked={royalis}
                    onChange={handleToggleRoyalis}
                    className="mt-1 h-4 w-4 accent-blue-500"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-200">
                      Program Royalis (+ Diskon Rp 8 Juta)
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-3 rounded-xl border transition ${
                    !vehicle.canTradeIn
                      ? 'opacity-40 cursor-not-allowed bg-slate-950 border-slate-800'
                      : tradeIn
                      ? 'bg-blue-950/40 border-blue-500/60 cursor-pointer'
                      : 'bg-slate-950 border-slate-800 cursor-pointer hover:border-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    disabled={!vehicle.canTradeIn}
                    checked={tradeIn}
                    onChange={handleToggleTradeIn}
                    className="mt-1 h-4 w-4 accent-blue-500"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-200">
                      Subsidi Trade-In (+ Diskon Rp 8 Juta)
                    </p>
                  </div>
                </label>
              </div>

              {/* AREA INPUT YANG TADI ERROR */}
              {payment === 'kredit' && (
                <div className="pt-3 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Calculator size={14} />
                      3. Kalkulator DP Konsumen
                    </label>
                    {isCustomSim && (
                      <button
                        type="button"
                        onClick={() => {
                          setDpInput('');
                          setIsCustomSim(false);
                        }}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg transition"
                      >
                        <RotateCcw size={12} />
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setDpMode('NETT')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition ${
                        dpMode === 'NETT'
                          ? 'bg-emerald-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Budget DP Nett
                    </button>
                    <button
                      type="button"
                      onClick={() => setDpMode('GROSS')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition ${
                        dpMode === 'GROSS'
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      TDP Kotor Brosur
                    </button>
                  </div>

                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-slate-400 font-bold text-sm">
                      Rp
                    </span>
                    <input
                      type="number"
                      value={dpInput}
                      onChange={(e) => handleDpChange(e.target.value)}
                      placeholder={
                        dpMode === 'NETT'
                          ? 'Ketik uang DP bersih...'
                          : 'Ketik TDP kotor brosur...'
                      }
                      className="w-full bg-slate-950 border-2 border-emerald-500/50 rounded-xl py-3 pl-10 pr-4 text-lg font-bold text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">
                    Spesifikasi & Subsidi
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-0.5">{vehicle.name}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl">
                  <p className="text-slate-400 text-xs">Harga OTR Lampung</p>
                  <p className="text-xl font-bold text-white mt-1">{formatRp(vehicle.otr)}</p>
                </div>
                <div className="bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl">
                  <p className="text-slate-400 text-xs">Total Potongan</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">
                    - {formatRp(calculation.totalPotongan)}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Diskon (NIK {nik})</span>
                  <span className="font-semibold text-rose-400">
                    - {formatRp(calculation.dealerDisc)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Subvention ({payment === 'cash' ? '-' : leasing})
                  </span>
                  <span className="font-semibold text-rose-400">
                    - {formatRp(calculation.subvention)}
                  </span>
                </div>
                {calculation.extraPromo > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Promo Khusus</span>
                    <span className="font-semibold text-rose-400">
                      - {formatRp(calculation.extraPromo)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {payment === 'kredit' && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Building2 size={20} className="text-blue-400" />
                    Simulasi Angsuran {leasing}
                  </h3>
                  {isCustomSim && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 animate-pulse">
                      Mode Kalkulasi Real-Time
                    </span>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                        <th className="py-3 px-3">Tenor</th>
                        <th className="py-3 px-3">TDP Kotor</th>
                        <th className="py-3 px-3 text-emerald-400">Setor DP (Nett)</th>
                        <th className="py-3 px-3 text-right">Angsuran / Bln</th>
                        <th className="py-3 px-2 text-center">WA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70">
                      {simulatedRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/50 transition">
                          <td className="py-3.5 px-3 font-medium text-white">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-blue-400 shrink-0" />
                              <span>{row.tenor} Bln ({row.years} Thn)</span>
                            </div>
                            {row.label && (
                              <span className="inline-block mt-1 text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                                {row.label}
                              </span>
                            )}
                          </td>
                          
                          <td className="py-3.5 px-3 text-slate-300">
                            {formatRp(row.simTdpKotor)}
                          </td>
                          
                          <td className="py-3.5 px-3 font-bold text-emerald-400 text-base">
                            {formatRp(row.simDpNett)}
                          </td>
                          
                          <td className="py-3.5 px-3 text-right">
                            <div className="font-extrabold text-white text-base">
                              {formatRp(row.simAngsuran)}
                            </div>
                            {isCustomSim && row.diffAngsuran !== 0 && (
                              <span className={`text-[11px] font-medium ${row.diffAngsuran < 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                {row.diffAngsuran < 0 ? `Hemat ${formatRp(Math.abs(row.diffAngsuran))}/bln` : `+${formatRp(row.diffAngsuran)}/bln`}
                              </span>
                            )}
                          </td>
                          
                          <td className="py-3.5 px-2 text-center">
                            <button
                              onClick={() => handleCopyWA(row, idx)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition"
                            >
                              {copiedIndex === idx ? <Check size={15} /> : <Copy size={15} />}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-slate-900 to-blue-950/60 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Gift size={20} className="text-amber-400" /> Benefit Konsumen
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {(vehicle.salesProgram || []).map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl text-sm text-slate-200">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}