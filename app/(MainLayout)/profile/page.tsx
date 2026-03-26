"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Camera,
  Globe,
  Link2
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Alexandra",
    lastName: "Daddario",
    email: "alexandra.d@voltcalc.io",
    phone: "+1 (555) 000-1234",
    company: "VoltCalc Engineering",
    position: "Senior Electrical Engineer",
    location: "Austin, Texas, USA",
    bio: "Passionate about building safe and efficient electrical systems. 8+ years of experience in industrial load calculations and system design.",
    website: "https://voltcalc.io",
    twitter: "@alex_engineer",
    linkedin: "alexandradaddario",
    github: "alexd"
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 pt-4 px-4 sm:px-6 transition-colors duration-300">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Account Profile</h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Manage your public information and personal details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Bio Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
            <div className="relative mx-auto mb-6 h-32 w-32">
              <div className="h-full w-full rounded-[40px] bg-gradient-to-br from-[#1877F2] to-blue-600 p-1 shadow-xl shadow-blue-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[36px] bg-white dark:bg-gray-800 overflow-hidden">
                  <span className="text-4xl font-black text-[#1877F2]">AD</span>
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 text-[#1877F2] shadow-lg border border-gray-50 dark:border-gray-700 transition-all hover:scale-110 active:scale-95">
                <Camera className="h-5 w-5" />
              </button>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">{formData.firstName} {formData.lastName}</h3>
              <p className="text-sm font-bold text-[#1877F2] mt-1">{formData.position}</p>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                <MapPin className="h-3 w-3" />
                {formData.location}
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-px bg-gray-50 dark:bg-gray-800" />
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">About Me</label>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
                  {formData.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Connected Accounts Card */}
          <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Social Ecosystem</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Twitter</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">{formData.twitter}</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">LinkedIn</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">{formData.linkedin}</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    <Link2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">GitHub</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">{formData.github}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Settings Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-[32px] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 sm:p-10 shadow-[0_25px_50px_rgba(0,0,0,0.04)]">
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Personal Information</h2>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Updates to your profile are reflected across the team dashboard.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.firstName}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Last Name</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.lastName}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Work Email</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    defaultValue={formData.email}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Phone Number</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.phone}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Organization</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.company}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Location / Office</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.location}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 ml-1">Portfolio / Website</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    defaultValue={formData.website}
                    className="w-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 py-3.5 pl-12 pr-4 text-sm font-bold text-gray-900 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-800 focus:ring-4 focus:ring-[#1877F2]/5 focus:border-[#1877F2] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-end gap-4 border-t border-gray-50 dark:border-gray-800 pt-10">
              <button className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 py-3.5 text-sm font-bold text-gray-600 dark:text-gray-400 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95">
                Discard Changes
              </button>
              <button className="rounded-2xl bg-[#1877F2] px-10 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-600 active:scale-95">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
