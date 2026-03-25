"use client";

import React from "react";
import { 
  Zap,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const tabContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

export default function ReportsPage() {
  const router = useRouter();

  return (
    <motion.div
      key="reports"
      variants={tabContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-1 shadow-xl"
    >
      <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[22px] bg-gradient-to-br from-white to-gray-50/50 py-16 px-6 text-center">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
          <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-blue-100 blur-[100px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-blue-50 blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-blue-500/10 ring-1 ring-gray-100"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2] to-blue-600 text-white shadow-lg">
              <FileText className="h-8 w-8" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1877F2] ring-1 ring-blue-100">
              <Zap className="h-3 w-3" />
              Coming Soon
            </span>
            <h3 className="mb-3 text-3xl font-black text-gray-900 tracking-tight">
              Reports
            </h3>
            <p className="max-w-md text-base leading-relaxed text-gray-500 font-medium">
              We're putting the finishing touches on this module to ensure you get the best experience. Stay tuned for advanced reporting features!
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-sm"
          >
            <button className="flex-1 rounded-2xl bg-[#1877F2] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-600 active:scale-95">
              Get Notified
            </button>
            <button 
              onClick={() => router.push("/create-project/info")}
              className="flex-1 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-gray-700 ring-1 ring-gray-200 transition-all hover:bg-gray-50 active:scale-95"
            >
              Explore Other Tools
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
