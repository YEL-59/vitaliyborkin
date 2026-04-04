"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Mail, ArrowLeft, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthImage from "@/assets/images/authentication-image.png";
import LogoImg from "@/assets/images/logo.png"

type ForgotPasswordInputs = {
  email: string;
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ForgotPasswordInputs>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
    console.log("Reset Request for:", data.email);
    router.push("/verify-code");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-[850px] overflow-hidden rounded-[40px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] min-h-[500px] items-stretch relative"
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
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Right Panel: Form Area */}
      <div className="flex flex-1 flex-col justify-center px-12 py-10 lg:pl-10">
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
        <div className="mb-10 flex items-center justify-between pb-2 border-gray-100">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">Forgot Password</h1>
          <Link href="/signin" className="text-gray-400 hover:text-gray-600 transition-colors">
             <X className="h-5 w-5" />
          </Link>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
            })}
            type="text"
            placeholder="Email"
            className="w-full rounded-md bg-white py-3 px-4 text-sm font-medium text-gray-700 border border-gray-200 focus:border-primary focus:ring-0 transition-all outline-none"
          />
          
          <button 
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all select-none"
          >
            Continue
          </button>
          
          <div className="text-left pt-2">
            <p className="text-xs font-medium text-gray-500">
              Back to <Link href="/signin"><span className="text-primary font-semibold hover:underline">Sign in</span></Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
