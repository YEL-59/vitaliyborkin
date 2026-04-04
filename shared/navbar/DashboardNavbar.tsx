"use client";

import React, { useState } from "react";
import { Search, ChevronDown, LogOut, Settings, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoImg from "@/assets/images/logo.png"
import Image from "next/image";

const DashboardNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1E26] dark:bg-black px-6 py-4 shadow-lg transition-all duration-300">
      <div className="mx-auto flex w-full container items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center gap-2">
            <Image 
              src={LogoImg} 
              alt="Logo" 
              width={40} 
              height={40} 
              className="md:w-[45px] md:h-[45px] w-[32px] h-[32px] object-contain"
            />
            <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">DEMANDEX</p>
              <p className="text-[8px] md:text-xs font-medium text-[#4A9C8E]">
                Design · Calculate · Submit
              </p>
            </div>
          </div>
        </Link>

        {/* User Profile */}
        <div className="flex items-center gap-4 relative">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-full bg-white px-1.5 py-1.5 pr-4 hover:bg-gray-50 transition-all cursor-pointer select-none shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A9C8E] text-[13px] font-bold text-white">
              AD
            </div>
            <span className="hidden text-sm font-bold text-[#2D3748] md:inline-block">
              Alexandra Daddario
            </span>
            <ChevronDown className={`h-4 w-4 text-[#A0AEC0] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </motion.button>

          {/* Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-2xl z-20"
                >
                  <Link 
                    href="/dashboard/profile" 
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    <User className="h-4 w-4" /> Profile
                  </Link>
                  <Link 
                    href="/dashboard/settings" 
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    <Settings className="h-4 w-4" /> Settings
                  </Link>
                  <div className="h-px bg-gray-50 my-1 mx-2" />
                  <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="h-4 w-4" /> Log out
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
