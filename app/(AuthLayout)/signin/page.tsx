"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Mail, Lock, LogIn, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthImage from "@/assets/images/authentication-image.png";
import LogoImg from "@/assets/images/logo.png"

type SignInInputs = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<SignInInputs>({
    mode: "onChange"
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {
    console.log("Sign In Data:", data);
    // Successful login: Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-[960px] overflow-hidden rounded-[40px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] min-h-[580px] items-stretch relative"
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
      <div className="flex flex-1 flex-col justify-center px-16 py-12 lg:pl-10">
        {/* Logo and Brand */}
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
        <div className="mb-8 text-center">
          <h1 className="text-[32px] font-bold text-primary mb-1">Welcome back</h1>
          <p className="text-sm font-medium text-gray-500">Sign in to your account to continue</p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                {...register("email", { required: "Required" })}
                type="text"
                placeholder="Enter email your address"
                className="w-full rounded-lg mt-2 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-gray-700 border border-gray-200 focus:border-primary focus:ring-0 transition-all outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600 ml-1">Password</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="h-4 w-4" />
              </div>
              <input
                {...register("password", { required: "Required" })}
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg mt-2 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-gray-700 border border-gray-200 focus:border-primary focus:ring-0 transition-all outline-none"
              />
            </div>
            
            <div className="flex justify-end pt-0.5">
              <Link href="/forgot-password">
                <span className="text-sm cursor-pointer font-semibold text-primary hover:underline">Forgot Password?</span>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4">
            <button 
              type="submit"
              className="w-full rounded-lg bg-primary shadow-lg py-3.5 text-base font-semibold text-white cursor-pointer hover:opacity-90 transition-all active:scale-[0.99] select-none"
            >
              Sign in
            </button>

            <Link href="/register" className="block">
              <button 
                type="button"
                className="w-full rounded-lg cursor-pointer border border-gray-200 bg-white py-3.5 text-base font-semibold text-primary hover:bg-gray-50 transition-all active:scale-[0.99]"
              >
                Create an account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
