"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoImg from "@/assets/images/logo.png";
import Image from "next/image";

const LandingNavbar = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent px-4 py-4 md:px-6 md:py-8 transition-all duration-300">
      <div className="mx-auto flex w-full container items-center justify-between gap-2 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center gap-2">
            <Image 
              src={LogoImg} 
              alt="Logo" 
              width={40} 
              height={40} 
              className="md:w-[50px] md:h-[50px] w-[32px] h-[32px] object-contain"
            />
            <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">DEMANDEX</p>
              <p className="text-[8px] md:text-xs font-medium text-[#4A9C8E]">
                Design · Calculate · Submit
              </p>
            </div>
          </div>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <Link
            href="/signin"
            className="text-[13px] md:text-sm font-bold text-white/90 hover:text-white transition-colors tracking-wide"
          >
            Log In
          </Link>
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-5 md:px-7 py-2 md:py-2.5 text-[12px] md:text-sm font-black text-black hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
