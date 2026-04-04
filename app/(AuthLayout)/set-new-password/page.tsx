"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, CheckCircle2, X, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthImage from "@/assets/images/authentication-image.png";
import LogoImg from "@/assets/images/logo.png"

type NewPasswordInputs = {
  password: string;
  confirmPassword: string;
};

export default function SetNewPasswordPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitSuccessful }
  } = useForm<NewPasswordInputs>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<NewPasswordInputs> = (data) => {
    console.log("New password set successfully");
  };

  const passwordValue = watch("password");

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
            alt="New Password" 
            fill 
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Right Panel: Form Area */}
      <div className="flex flex-1 flex-col justify-center px-16 py-10 lg:pl-10 text-center lg:text-left">
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
          <h1 className="text-xl font-bold text-gray-900 leading-tight">Set new password</h1>
          <Link href="/signin" className="text-gray-400 hover:text-gray-600 transition-colors">
             <X className="h-5 w-5" />
          </Link>
        </div>

        {isSubmitSuccessful ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center"
           >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 shadow-sm">
                 <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Password reset!</h3>
              <p className="text-xs font-medium text-gray-500 mb-8">You can now sign in with your brand new credentials.</p>
              
              <Link href="/signin">
                <button className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all select-none">
                   Go to Sign In
                </button>
              </Link>
           </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* New Password */}
            <div className="relative group">
              <input
                {...register("password", { 
                  required: true,
                  minLength: 8
                })}
                type={showPass ? "text" : "password"}
                placeholder="Set new password"
                className="w-full rounded-md bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-primary transition-all pr-12"
              />
              <button 
                  type="button" 
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative group">
              <input
                {...register("confirmPassword", { 
                  required: true,
                  validate: (val) => val === passwordValue
                })}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full rounded-md bg-white px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 outline-none focus:border-primary transition-all pr-12"
              />
              <button 
                  type="button" 
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all select-none"
              >
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
