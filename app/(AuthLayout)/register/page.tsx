"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthImage from "@/assets/images/authentication-image.png";
import LogoImg from "@/assets/images/logo.png"

type RegisterInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<RegisterInputs>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-[960px] overflow-hidden rounded-[40px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] min-h-[600px] items-stretch relative"
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
            alt="Authentication" 
            fill 
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-[#1877F2]/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Right Panel: Form Area */}
      <div className="flex flex-1 flex-col justify-center px-16 py-10 lg:pl-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image src={LogoImg} alt="Logo" width={120} height={100} />
        </div>

        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Register in <span className="text-[#1877F2]">VoltCalc</span>
          </h1>
          <Link href="/signin" className="text-gray-400 hover:text-gray-600 transition-colors">
             <X className="h-6 w-6" />
          </Link>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-1">
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First name"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-[#1877F2] transition-all"
              />
            </div>
            {/* Last Name */}
            <div className="space-y-1">
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last name"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-[#1877F2] transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <input
              {...register("email", { 
                required: true,
                pattern: /\S+@\S+\.\S+/
              })}
              type="text"
              placeholder="Email"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-[#1877F2] transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 relative">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-[#1877F2] transition-all pr-12"
            />
            <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full rounded-lg bg-[#1877F2] shadow-[0_10px_15px_-3px_rgba(30,30,118,0.2),0_4px_6px_-4px_rgba(30,30,118,0.2)] py-3 text-base font-semibold text-white cursor-pointer hover:bg-blue-600 transition-all select-none"
            >
              Create my account
            </button>
          </div>

          {/* Agreement & Link */}
          <div className="space-y-4 pt-2">
             <div className="flex items-start gap-2 px-1">
               <input 
                 {...register("agreeTerms", { required: true })}
                 id="agree"
                 type="checkbox" 
                 className="mt-1 h-4 w-4 rounded border-gray-200 text-[#1877F2] focus:ring-[#1877F2]/20 cursor-pointer" 
               />
               <label htmlFor="agree" className="text-[12px] font-medium text-gray-500 leading-tight">
                 I have read and accept the <Link href="#"><span className="text-[#1877F2] hover:underline">Terms and Conditions</span></Link> and <Link href="#"><span className="text-[#1877F2] hover:underline">Privacy Policy</span></Link>
               </label>
             </div>

             <div className="text-center">
               <p className="text-xs font-medium text-gray-400">
                  Already have an account?{" "}
                  <Link href="/signin">
                     <span className="text-[#1877F2] hover:underline cursor-pointer">Sign in</span>
                  </Link>
               </p>
             </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
