"use client";

import React from "react";
import Image from "next/image";
import AuthBg from "@/assets/images/authentication-image.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#4d4d4d] flex items-center justify-center p-4">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left Side: Image with slant */}
        <div className="relative w-full h-full lg:w-[55%]">
          <Image 
            src={AuthBg} 
            alt="Auth Background" 
            fill 
            priority
            className="object-cover opacity-50"
          />
        </div>
        
        {/* Slanted divider for background */}
        <div 
          className="absolute inset-0 z-1 hidden lg:block"
          style={{ 
            background: "#4d4d4d",
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 48% 100%)"
          }} 
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex items-center justify-center max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
