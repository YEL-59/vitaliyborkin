"use client";

import React from "react";
import { 
  Plus,
  Trash2
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const tabContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

export default function PanelSchedulesPage() {
  const router = useRouter();

  // Generate 42 circuits (21 rows with 2 circuits each)
  const circuits = Array.from({ length: 42 }, (_, i) => i + 1);
  const rows = [];
  for (let i = 0; i < circuits.length; i += 2) {
    rows.push([circuits[i], circuits[i + 1]]);
  }

  return (
    <motion.div
      key="panel"
      variants={tabContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-6"
    >
      {/* Top Action Button */}
      <div className="flex justify-start">
        <button className="flex items-center gap-2 rounded-xl bg-[#1877F2] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_16px_-4px_rgba(24,119,242,0.4)] transition-all hover:bg-blue-600 active:scale-95">
          <Plus className="h-4 w-4" />
          Add panel
        </button>
      </div>

      {/* Panel Details Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Top Header Section */}
        <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50/50">
          <div className="p-4 border-r border-gray-100">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Voltage</label>
            <input type="text" className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none" defaultValue="120/240V" />
          </div>
          <div className="p-4">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Date</label>
            <input type="text" className="w-full bg-transparent text-sm font-bold text-gray-900 outline-none" defaultValue="2026-03-25" />
          </div>
        </div>

        {/* Checkbox Options Section */}
        <div className="flex flex-wrap items-center gap-8 p-6 border-b border-gray-100">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center h-5 w-5 rounded border border-gray-300 transition-all group-hover:border-[#1877F2]">
              <input type="checkbox" className="peer opacity-0 absolute inset-0" />
              <div className="h-2.5 w-2.5 rounded-sm bg-[#1877F2] opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Disconnect</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center h-5 w-5 rounded border border-gray-300 transition-all group-hover:border-[#1877F2]">
              <input type="checkbox" className="peer opacity-0 absolute inset-0" defaultChecked />
              <div className="h-2.5 w-2.5 rounded-sm bg-[#1877F2] opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Main Lug</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center h-5 w-5 rounded border border-gray-300 transition-all group-hover:border-[#1877F2]">
              <input type="checkbox" className="peer opacity-0 absolute inset-0" />
              <div className="h-2.5 w-2.5 rounded-sm bg-[#1877F2] opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Feed Thru</span>
          </label>
        </div>

        {/* Technical Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-400">Phase A :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-400">Phase B :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-400">Phase C :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
        </div>

        {/* Phase Totals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100 bg-gray-50/30">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-500">Total phase VA :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-500">Total phase Amps :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
        </div>

        {/* Neutral Totals Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-gray-50/30">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-500">Total Neutral VA :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-gray-500">Total Neutral Amps :</span>
              <span className="text-xs font-bold text-gray-900">300 VA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit Schedule Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-200">
              <th className="w-16 p-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 text-center border-r border-gray-200">Ckt</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-r border-gray-200">Load Description</th>
              <th className="w-16 p-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 text-center border-r border-gray-200">Ckt</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-gray-500">Load Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                <td className="p-2 text-xs font-bold text-gray-900 text-center border-r border-gray-200 bg-gray-50/20">{row[0]}</td>
                <td className="p-2 border-r border-gray-200">
                  <input type="text" className="w-full bg-transparent px-2 py-1 text-xs text-gray-700 outline-none" placeholder="Enter description..." />
                </td>
                <td className="p-2 text-xs font-bold text-gray-900 text-center border-r border-gray-200 bg-gray-50/20">{row[1]}</td>
                <td className="p-2">
                  <input type="text" className="w-full bg-transparent px-2 py-1 text-xs text-gray-700 outline-none" placeholder="Enter description..." />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 mt-12 pb-10">
        <button 
          onClick={() => router.push("/create-project/load")}
          className="w-full md:w-auto min-w-[120px] rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95"
        >
          Back
        </button>
        <button className="w-full md:w-auto min-w-[140px] rounded-xl bg-[#1877F2] px-10 py-3.5 text-sm font-bold text-white shadow-[0_10px_15px_-3px_rgba(24,119,242,0.3)] hover:bg-blue-600 transition-all active:scale-95">
          Save Project
        </button>
      </div>
    </motion.div>
  );
}
