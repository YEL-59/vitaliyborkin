"use client";

import React, { useState } from "react";
import { 
  Info, 
  Flame, 
  X, 
  ThermometerSun, 
  Plus
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const tabContentVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

export default function LoadCalculationsPage() {
  const [isStandard, setIsStandard] = useState(true);
  const router = useRouter();

  return (
    <motion.div
      key="load"
      variants={tabContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-6 transition-colors duration-300"
    >
      {/* Standard/Optional Toggle */}
      <div className="flex items-center gap-3">
        <span className={`text-sm font-bold ${isStandard ? "text-primary" : "text-gray-400 dark:text-gray-500"}`}>Standard</span>
        <button
          type="button"
          onClick={() => setIsStandard(!isStandard)}
          className="relative inline-flex items-center h-5 w-10 shrink-0 cursor-pointer rounded-[4px] transition-colors duration-200 focus:outline-none bg-[#B9D6D1] dark:bg-gray-800"
        >
          <span
            className={`inline-block h-6 w-5 transform rounded-[4px] bg-primary shadow-md ring-0 transition duration-200 ease-in-out ${isStandard ? "translate-x-0" : "translate-x-5"
              }`}
          />
        </button>
        <span className={`text-sm font-bold ${!isStandard ? "text-primary" : "text-gray-400 dark:text-gray-500"}`}>Optional</span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Tables */}
        <div className="lg:col-span-2 space-y-8">
          {/* General load section */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">General load</h2>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 dark:border-gray-800">
                    <th className="pb-4 text-left"></th>
                    <th className="pb-4 text-center">Qty</th>
                    <th className="pb-4 text-center">VA</th>
                    <th className="pb-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    { label: "Total square footage", qty: 2, va: 1500, total: 3000 },
                    { label: "Small appliance circuits", qty: 2, va: 1500, total: 3000 },
                    { label: "Laundry circuits", qty: 1, va: 1500, total: 1500 },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-5 text-sm font-bold text-gray-700 dark:text-gray-300">{row.label}</td>
                      <td className="py-5 px-4 text-center">
                        <input
                          type="text"
                          defaultValue={row.qty}
                          className="w-16 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-3 py-2 text-center text-sm font-bold text-gray-700 dark:text-white outline-none border border-gray-100 dark:border-gray-700 focus:border-primary/30"
                        />
                      </td>
                      <td className="py-5 text-center text-sm font-medium text-gray-400">{row.va}</td>
                      <td className="py-5 text-right text-sm font-bold text-gray-700 dark:text-white">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-right">
              <span className="text-xs font-bold text-gray-900 dark:text-white mr-4">Total: 6,345 VA</span>
            </div>
          </div>

          {/* HVAC section */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">HVAC</h2>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </div>

            {/* Heating subsection */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-4 w-4 text-red-500" />
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Heating</h3>
              </div>
              <table className="w-full">
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    { label: "Central heat - 9,000 W (10.6 at 240V)", qty: 0, va: 9000, total: 0 },
                    { label: "Heat bed - 5,000 W (5.0 at 240V)", qty: 0, va: 8000, total: 0 },
                    { label: "Furnace - 4,200 W (W 30 at 120V)", qty: 0, va: 9700, total: 0 },
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-5 text-sm font-bold text-gray-700 dark:text-gray-300">{row.label}</td>
                      <td className="py-5 px-4 text-center">
                        <input type="text" defaultValue={row.qty} className="w-16 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-3 py-2 text-center text-sm font-bold text-gray-700 dark:text-white outline-none border border-gray-100 dark:border-gray-700" />
                      </td>
                      <td className="py-5 text-center text-sm font-medium text-gray-400">{row.va}</td>
                      <td className="py-5 text-right text-sm font-bold text-gray-700 dark:text-white">{row.total}</td>
                      <td className="py-5 pl-4 text-right">
                        <button type="button" className="text-gray-300 hover:text-red-500">
                          <X className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 text-right">
                <span className="text-xs font-bold text-gray-900 dark:text-white">Total: 0 VA</span>
              </div>
              <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition-all">
                <Plus className="h-4 w-4" />
                Add equipment
              </button>
            </div>

            {/* Cooling subsection */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ThermometerSun className="h-4 w-4 text-orange-400" />
                <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Cooling</h3>
              </div>
              <table className="w-full">
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  <tr>
                    <td className="py-5 text-sm font-bold text-gray-700 dark:text-gray-300">AC conditioner - 8,000 W (33.0 at 240V)</td>
                    <td className="py-5 px-4 text-center">
                      <input type="text" defaultValue="0" className="w-16 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-3 py-2 text-center text-sm font-bold text-gray-700 dark:text-white outline-none border border-gray-100 dark:border-gray-700" />
                    </td>
                    <td className="py-5 text-center text-sm font-medium text-gray-400">8000</td>
                    <td className="py-5 text-right text-sm font-bold text-gray-700 dark:text-white">0</td>
                    <td className="py-5 pl-4 text-right">
                      <button type="button" className="text-gray-300 hover:text-red-500">
                        <X className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 text-right">
                <span className="text-xs font-bold text-gray-900 dark:text-white">Total: 0 VA</span>
              </div>
              <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition-all">
                <Plus className="h-4 w-4" />
                Add equipment
              </button>
            </div>
          </div>

          {/* Other electrical load section */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Other electrical load</h2>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-hide">
              <table className="w-full">
                <thead>
                  <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 dark:border-gray-800 text-center">
                    <th className="pb-4 text-left"></th>
                    <th className="pb-4">Qty</th>
                    <th className="pb-4">Voltage</th>
                    <th className="pb-4">Poles</th>
                    <th className="pb-4">Neutral</th>
                    <th className="pb-4">VA</th>
                    <th className="pb-4 text-right">Total</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {[
                    "Bath / laundry son. - 10 W (0.04 at 12V)",
                    "Kitchen/garage son. - 10 W (0.04 at 12V)",
                    "Disposer - 800 W (3.34 at 120V)",
                    "Other - 8,000 W (33.3 at 240V)",
                    "Trash compactor - 1,200 W (5.0 at 240V)",
                    "Microwave - 800 W (3.34 at 120V)",
                    "Range - 10,000 W (41.7 at 240V)",
                    "Freezer - 1,500 W (6.25 at 240V)",
                    "Freezer / Dryer (typic) - 5000 W (21.3 at 240V)",
                    "Garage / Dryer (typic) - 5000 W (21.3 at 240V)",
                    "Cooktop - 10,000 W (41.67 at 240V)",
                    "Oven - 8,000 W (33.34 at 240V)",
                    "Tankless water heater - 800 W (3.34 at 240V)",
                    "Spa / Hot tub - 8,000 W (33.34 at 240V)",
                    "In Ground Pool - 1,500 W (6.25 at 240V)",
                    "Water heater (+ standby) - 5,500 W (23.0 at 240V)"
                  ].map((label, idx) => (
                    <tr key={idx}>
                      <td className="py-4 text-[12px] font-bold text-gray-700 dark:text-gray-300 min-w-[200px]">{label}</td>
                      <td className="py-4 px-2">
                        <input type="text" defaultValue="2" className="w-12 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-2 py-2 text-center text-xs font-bold text-gray-700 dark:text-white border border-transparent shadow-sm" />
                      </td>
                      <td className="py-4 px-2">
                        <select className="w-20 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-2 py-2 text-xs font-bold text-gray-700 dark:text-white border border-transparent shadow-sm cursor-pointer appearance-none">
                          <option>220 V</option>
                          <option>110 V</option>
                        </select>
                      </td>
                      <td className="py-4 px-2">
                        <input type="text" defaultValue="2" className="w-10 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-1 py-2 text-center text-xs font-bold text-gray-700 dark:text-white border border-transparent shadow-sm" />
                      </td>
                      <td className="py-4 px-2 text-center">
                        <div className="relative inline-flex items-center h-5 w-10 cursor-pointer rounded-[4px] bg-[#B9D6D1] dark:bg-gray-800 transition-colors">
                          <span className="h-6 w-5 translate-x-5 rounded-[4px] bg-primary transition-transform shadow-md" />
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <input type="text" defaultValue="50" className="w-16 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-2 py-2 text-center text-xs font-bold text-gray-700 dark:text-white border border-transparent shadow-sm" />
                      </td>
                      <td className="py-4 text-right text-xs font-bold text-gray-700 dark:text-white">150</td>
                      <td className="py-4 pl-3">
                        <button type="button" className="text-gray-200 hover:text-red-500 transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-right">
              <span className="text-xs font-bold text-gray-900 dark:text-white">Total: 8,099 VA</span>
            </div>
            <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition-all">
              <Plus className="h-4 w-4" />
              Add equipment
            </button>
          </div>

          {/* EV charging section */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">EV charging</h2>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 dark:border-gray-800 text-center">
                  <th className="pb-4 text-left"></th>
                  <th className="pb-4">Qty</th>
                  <th className="pb-4">VA</th>
                  <th className="pb-4 text-right">Total</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                <tr>
                  <td className="py-5 text-sm font-bold text-gray-700 dark:text-gray-300">EV charger - 30,000V (2.0A at 240V x 1230V)</td>
                  <td className="py-5 px-4 text-center">
                    <input type="text" defaultValue="1" className="w-16 rounded-lg bg-[#F8F9FA] dark:bg-gray-800 px-3 py-2 text-center text-sm font-bold text-gray-700 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" />
                  </td>
                  <td className="py-5 text-center text-sm font-medium text-gray-400">9600</td>
                  <td className="py-5 text-right text-sm font-bold text-gray-700 dark:text-white">9600</td>
                  <td className="py-5 pl-4 text-right">
                    <button type="button" className="text-gray-200 hover:text-red-500">
                      <X className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 text-right">
              <span className="text-xs font-bold text-gray-900 dark:text-white">Total: 9,600 VA</span>
            </div>
            <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition-all">
              <Plus className="h-4 w-4" />
              Add equipment
            </button>
          </div>
        </div>

        {/* Right Column: Final calculation Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl md:p-8">
            <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">Final calculation</h2>

            <div className="space-y-6">
              {[
                { label: "General lighting load", value: "0 VA" },
                { label: "Receptacle load", value: "0 VA" },
                { label: "HVAC load", value: "0 VA" },
                { label: "Cooking equipment", value: "0 VA" },
                { label: "Other lighting load", value: "0 VA" },
                { label: "All other loads", value: "0 VA" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50 p-3 rounded-lg border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all">
                  <span className="text-sm font-medium text-gray-500">{item.label}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{item.value}</span>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400">Primary Sysyem Largest motor</span>
                  <div className="flex items-center gap-2">
                    <input type="text" defaultValue="600VA" className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-bold text-gray-700 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" />
                    <span className="text-[10px] font-bold text-gray-400">at</span>
                    <input type="text" defaultValue="25 %" className="w-16 rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-bold text-gray-700 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white ml-auto transition-all">150 VA</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400">secondary Sysyem Largest motor</span>
                  <div className="flex items-center gap-2">
                    <input type="text" defaultValue="600VA" className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-bold text-gray-700 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" />
                    <span className="text-[10px] font-bold text-gray-400">at</span>
                    <input type="text" defaultValue="25 %" className="w-16 rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-bold text-gray-700 dark:text-white border border-gray-100 dark:border-gray-700 outline-none" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white ml-auto">150 VA</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-400">Total calculated load</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">150 VA</span>
              </div>

              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-4 flex justify-between items-center border border-gray-100 dark:border-gray-700 shadow-inner">
                <span className="text-xs font-bold text-gray-900 dark:text-white">Calculated amperage (load / 240V)</span>
                <span className="text-xs font-black text-gray-900 dark:text-white tracking-tight">1 A</span>
              </div>

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={() => router.push("/create-project/info")}
                  className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-4 text-sm font-bold text-gray-700 dark:text-gray-300 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95"
                >
                  Back
                </button>
                <button 
                  onClick={() => router.push("/create-project/panel")}
                  className="flex-1 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
