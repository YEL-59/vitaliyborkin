"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Bell, LogOut, Settings, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoImg from "@/assets/images/logo.png"
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white px-4 py-3 border-b border-gray-100/50 shadow-sm">
      <div className="mx-auto flex w-full container items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image className="object-contain" src={LogoImg} alt="Logo" width={130} height={100} />
        </Link>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-6 hidden max-w-md flex-1 items-center gap-2 rounded-full bg-[#F3F7FF] px-4 py-2.5 md:flex"
        >
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects, addresses, calculations..."
            className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400 font-medium"
          />
        </motion.div>

        {/* User Profile */}
        <div className="flex items-center gap-4 relative">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-full bg-white p-1 pr-3 border border-gray-100 hover:bg-gray-50 transition-all cursor-pointer select-none shadow-sm"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E7EB] text-xs font-bold text-gray-600">
              AD
            </div>
            <span className="hidden text-sm font-semibold text-gray-700 md:inline-block">
              Alexandra Daddario
            </span>
            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </motion.button>

          {/* Simple Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl z-20"
                >
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">My Account</p>
                  <div className="h-px bg-gray-50 my-1 mx-2" />
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors border-t border-gray-50 mt-1 pt-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    Log out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


