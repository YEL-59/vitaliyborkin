"use client";

import React, { useState, useEffect } from "react";
import { 
  Settings, 
  Zap, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun,
  Mail,
  Lock,
  ChevronRight,
  Monitor,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarItems = [
    { id: "general", label: "General", icon: Settings },
    { id: "electrical", label: "Electrical Defaults", icon: Zap },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & Access", icon: Shield },
  ];

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 pt-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">System Settings</h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Configure your workspace and calculation preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24 space-y-2 rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-bold transition-all ${
                  activeTab === item.id 
                    ? "bg-[#1877F2] text-white shadow-lg shadow-blue-500/20" 
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          {activeTab === "general" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Region & Language Section */}
              <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Region & Language</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Interface Language</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-4 pr-10 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all">
                        <option>English (United States)</option>
                        <option>Spanish (ES)</option>
                        <option>French (FR)</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Preferred Timezone</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-4 pr-10 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all">
                        <option>(GMT-06:00) Central Time</option>
                        <option>(GMT-05:00) Eastern Time</option>
                        <option>(GMT+00:00) UTC</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Section */}
              <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Interface Theme</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setTheme("light")}
                    className={`flex flex-col items-center gap-4 rounded-3xl border-2 p-6 transition-all relative overflow-hidden ${
                      theme === "light" 
                        ? "border-[#1877F2] bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/5" 
                        : "border-gray-50 dark:border-gray-800 bg-gray-50/20 dark:bg-gray-800/20 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${theme === "light" ? "bg-blue-50 text-[#1877F2]" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                      <Sun className="h-6 w-6" />
                    </div>
                    <span className={`text-sm font-black ${theme === "light" ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>Light Mode</span>
                    {theme === "light" && <Check className="absolute top-2 right-2 h-4 w-4 text-[#1877F2]" />}
                  </button>

                  <button 
                    onClick={() => setTheme("dark")}
                    className={`flex flex-col items-center gap-4 rounded-3xl border-2 p-6 transition-all relative overflow-hidden ${
                      theme === "dark" 
                        ? "border-[#1877F2] bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/5" 
                        : "border-gray-50 dark:border-gray-800 bg-gray-50/20 dark:bg-gray-800/20 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${theme === "dark" ? "bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                      <Moon className="h-6 w-6" />
                    </div>
                    <span className={`text-sm font-black ${theme === "dark" ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>Dark Mode</span>
                    {theme === "dark" && <Check className="absolute top-2 right-2 h-4 w-4 text-[#1877F2]" />}
                  </button>

                  <button 
                    onClick={() => setTheme("system")}
                    className={`flex flex-col items-center gap-4 rounded-3xl border-2 p-6 transition-all relative overflow-hidden ${
                      theme === "system" 
                        ? "border-[#1877F2] bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/5 ring-4 ring-blue-500/5" 
                        : "border-gray-50 dark:border-gray-800 bg-gray-50/20 dark:bg-gray-800/20 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${theme === "system" ? "bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                      <Monitor className="h-6 w-6" />
                    </div>
                    <span className={`text-sm font-black ${theme === "system" ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>System</span>
                    {theme === "system" && <Check className="absolute top-2 right-2 h-4 w-4 text-[#1877F2]" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "electrical" && (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Calculation Defaults</h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Default Voltage (V)</label>
                      <input type="text" defaultValue="120/240" className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 px-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Frequency (Hz)</label>
                      <div className="flex gap-2">
                         <button className="flex-1 rounded-xl bg-[#1877F2] py-3 text-xs font-black text-white shadow-lg shadow-blue-500/20 transition-all">60 Hz</button>
                         <button className="flex-1 rounded-xl bg-gray-50 dark:bg-gray-800 py-3 text-xs font-bold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">50 Hz</button>
                      </div>
                   </div>
                   <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Measurement Unit</label>
                      <div className="flex gap-2">
                         <button className="flex-1 rounded-xl bg-[#1877F2] py-3 text-xs font-black text-white shadow-lg shadow-blue-500/20 transition-all">Imperial (ft/lb)</button>
                         <button className="flex-1 rounded-xl bg-gray-50 dark:bg-gray-800 py-3 text-xs font-bold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">Metric (m/kg)</button>
                      </div>
                   </div>
                </div>

                <div className="h-px bg-gray-50 dark:bg-gray-800 !my-8" />

                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="space-y-1">
                         <p className="text-sm font-black text-gray-900 dark:text-white">Auto-save Calculations</p>
                         <p className="text-[11px] font-medium text-gray-400">Save project state every 60 seconds.</p>
                      </div>
                      <div className="relative h-6 w-11 shrink-0 cursor-pointer overflow-hidden rounded-full bg-[#1877F2] transition-colors">
                         <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div 
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm"
            >
               <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]">
                  <Bell className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Communication Channels</h3>
              </div>

              <div className="space-y-8">
                 {[
                   { label: "Critical Updates", desc: "Security alerts and system maintenance notifications.", checked: true },
                   { label: "Calculation Errors", desc: "Get notified when a load exceeds recommended limits.", checked: true },
                   { label: "Team Activity", desc: "Know when a colleague updates a shared project.", checked: false },
                   { label: "Product News", desc: "Monthly newsletter with new features and system updates.", checked: false }
                 ].map((opt, i) => (
                   <div key={i} className="flex items-start justify-between group">
                      <div className="space-y-1">
                         <p className="text-sm font-black text-gray-900 dark:text-white">{opt.label}</p>
                         <p className="text-xs font-medium text-gray-400 max-w-sm">{opt.desc}</p>
                      </div>
                      <div className={`relative h-6 w-11 shrink-0 cursor-pointer overflow-hidden rounded-full transition-all ${opt.checked ? 'bg-[#1877F2]' : 'bg-gray-200 dark:bg-gray-800'}`}>
                         <div className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${opt.checked ? 'right-1' : 'left-1'}`} />
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div 
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-6"
            >
               <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2]">
                      <Lock className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Security Access</h3>
                  </div>

                  <div className="space-y-6">
                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-gray-50/50 dark:bg-gray-800/50 p-6 border border-gray-100 dark:border-gray-800">
                        <div className="space-y-1 text-center sm:text-left">
                           <p className="text-sm font-black text-gray-900 dark:text-white">Change Password</p>
                           <p className="text-xs font-medium text-gray-400">Keep your account secure by rotation your password.</p>
                        </div>
                        <button className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-6 py-2.5 text-xs font-black text-gray-700 dark:text-white shadow-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95">
                           Update Now
                        </button>
                     </div>

                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-gray-50/50 dark:bg-gray-800/50 p-6 border border-gray-100 dark:border-gray-800">
                        <div className="space-y-1 text-center sm:text-left">
                           <p className="text-sm font-black text-gray-900 dark:text-white">Two-Factor Authentication</p>
                           <p className="text-xs font-medium text-gray-400">Add an extra layer of security using a physical key or app.</p>
                        </div>
                        <button className="rounded-2xl bg-[#1877F2] px-6 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 active:scale-95">
                           Setup 2FA
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Global Save Action */}
      <div className="fixed bottom-10 inset-x-0 mx-auto w-fit z-40">
         <div className="rounded-full bg-black/90 dark:bg-white px-8 py-4 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-8 border border-white/10 dark:border-black/10">
            <span className="text-xs font-black text-gray-300 dark:text-gray-600 tracking-widest uppercase">Unsaved Changes</span>
            <div className="h-4 w-px bg-white/10 dark:bg-black/10" />
            <div className="flex items-center gap-2">
               <button className="rounded-full px-4 py-1.5 text-xs font-black text-gray-400 dark:text-gray-500 transition-all hover:text-white dark:hover:text-black">Reset</button>
               <button className="rounded-full bg-[#1877F2] px-6 py-2 text-xs font-black text-white shadow-lg transition-all active:scale-95">Save Global Settings</button>
            </div>
         </div>
      </div>
    </div>
  );
}
