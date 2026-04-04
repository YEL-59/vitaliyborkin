"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Mail, ArrowRight, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthImage from "@/assets/images/authentication-image.png";
import LogoImg from "@/assets/images/logo.png"

export default function VerifyCodePage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const isComplete = code.every(digit => digit !== "");

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-[850px] overflow-hidden rounded-[40px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] min-h-[550px] items-stretch relative"
    >
      {/* Left Panel: Image Card with Slant */}
      <div className="relative hidden w-[42%] lg:block overflow-hidden p-4">
        <div 
          className="relative h-full w-full overflow-hidden rounded-[30px] shadow-sm transform"
          style={{ 
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" 
          }}
        >
          <Image 
            src={AuthImage} 
            alt="Security" 
            fill 
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Right Panel: OTP Form Area */}
      <div className="flex flex-1 flex-col justify-center px-12 py-10 lg:pl-10 text-center">
        {/* Logo */}
           <Link href="/" className="flex items-center justify-center gap-2 group shrink-0 mb-8">
          <div className="flex items-center gap-2">
            <Image 
              src={LogoImg} 
              alt="Logo" 
              width={40} 
              height={40} 
              className="md:w-[50px] md:h-[50px] w-[32px] h-[32px] object-contain"
            />
            <div className="flex flex-col">
              <p className="text-lg md:text-xl font-bold tracking-tight text-primary leading-tight">DEMANDEX</p>
              <p className="text-[8px] md:text-xs font-medium text-primary">
                Design · Calculate · Submit
              </p>
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="mb-8 flex items-center justify-between pb-2 border-gray-100">
           <h1 className="text-xl font-bold text-gray-900 leading-tight">Password Reset</h1>
           <Link href="/forgot-password" className="text-gray-400 hover:text-gray-600 transition-colors">
             <X className="h-5 w-5" />
           </Link>
        </div>

        <p className="text-sm font-medium text-gray-400 mb-6">
           Enter the 6-digit code we sent to <br /> <span className="text-gray-500">Jhon@gmail.com</span>
        </p>

        {/* OTP Input Grid */}
        <div className="mb-8">
           <div className="flex justify-center gap-2 mb-4">
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  id={`code-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="h-9 w-7 sm:h-10 sm:w-8 text-center text-sm font-bold text-primary rounded-md border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all"
                />
              ))}
           </div>

           <div className="text-center space-y-1">
              <p className="text-[12px] font-medium text-gray-400">
                 Didn't receive a code? <button className="text-primary font-semibold hover:underline">Resend</button>
              </p>
              <p className="text-[12px] font-bold text-gray-500">
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} min
              </p>
           </div>
        </div>

        {/* Verify Button */}
        <button 
          type="button"
          disabled={!isComplete}
          className={`w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white shadow-md transition-all select-none ${
              isComplete
              ? "hover:opacity-90"
              : "opacity-80 cursor-not-allowed"
          }`}
        >
          Verify
        </button>
        
        <div className="mt-6 text-center">
           <p className="text-xs font-medium text-gray-500">
             Back to <Link href="/signin"><span className="text-primary font-semibold hover:underline">Sign in</span></Link>
           </p>
        </div>
      </div>
    </motion.div>
  );
}
