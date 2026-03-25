"use client";

import React from "react";
import { 
  ChevronDown,
  PlusCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const tabContentVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

type FormInputs = {
  projectName: string;
  location: string;
  description?: string;
  necCodeYear: string;
  calculationType: string;
  primarySystemVoltage: string;
};

export default function ProjectInfoPage() {
  const router = useRouter();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid } 
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      calculationType: "Single Family Dwelling"
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form Data:", data);
    // Success simulation
    router.push("/create-project/load");
  };

  return (
    <motion.div
      key="info"
      variants={tabContentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Project Information Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-xl font-bold text-gray-900">Project Information</h2>
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Project Name <span className="text-red-500">*</span></label>
              <input
                {...register("projectName", { required: "Project name is required" })}
                type="text"
                placeholder="Enter project name"
                className={`w-full rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent ${errors.projectName ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
                  }`}
              />
              {errors.projectName && <p className="text-[11px] font-bold text-red-500 px-1 italic">*{errors.projectName.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Location <span className="text-red-500">*</span></label>
              <input
                {...register("location", { required: "Location is required" })}
                type="text"
                placeholder="Enter project address or location"
                className={`w-full rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent ${errors.location ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
                  }`}
              />
              {errors.location && <p className="text-[11px] font-bold text-red-500 px-1 italic">*{errors.location.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Description</label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Enter project description (optional)"
                className="w-full rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#1877F2]/20 border border-transparent focus:border-[#1877F2] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Technical Specifications Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-xl font-bold text-gray-900">Technical Specifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">NEC Code Year <span className="text-red-500">*</span></label>
              <div className="relative">
                <select
                  {...register("necCodeYear", { required: "Please select year" })}
                  className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer ${errors.necCodeYear ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
                    }`}
                >
                  <option value="">Select year</option>
                  <option value="2023">2023</option>
                  <option value="2020">2020</option>
                  <option value="2017">2017</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              {errors.necCodeYear && <p className="text-[11px] font-bold text-red-500 px-1 italic">*{errors.necCodeYear.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Calculation Type <span className="text-red-500">*</span></label>
              <div className="relative">
                <select
                  {...register("calculationType", { required: "Calculation type is required" })}
                  className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer font-medium ${errors.calculationType ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
                    }`}
                >
                  <option value="Single Family Dwelling">Single Family Dwelling</option>
                  <option value="Multi-Family Dwelling">Multi-Family Dwelling</option>
                  <option value="Commercial">Commercial</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              {errors.calculationType && <p className="text-[11px] font-bold text-red-500 px-1 italic">*{errors.calculationType.message}</p>}
            </div>
            <div className="space-y-2 md:col-span-1">
              <label className="text-sm font-bold text-gray-700">Primary System Voltage <span className="text-red-500">*</span></label>
              <div className="relative">
                <select
                  {...register("primarySystemVoltage", { required: "Please select voltage" })}
                  className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer ${errors.primarySystemVoltage ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
                    }`}
                >
                  <option value="">Select voltage</option>
                  <option value="120/240V">120/240V</option>
                  <option value="208V/120V">208V/120V</option>
                  <option value="480V/277V">480V/277V</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              {errors.primarySystemVoltage && <p className="text-[11px] font-bold text-red-500 px-1 italic">*{errors.primarySystemVoltage.message}</p>}
            </div>
          </div>
          <button type="button" className="mt-6 flex items-center gap-2 text-sm font-bold text-[#1877F2] transition-all hover:gap-3 hover:opacity-80">
            <PlusCircle className="h-4 w-4" />
            Add Secondary System Voltage
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 mt-8">
          <button 
            type="button" 
            onClick={() => router.push("/")}
            className="w-full md:w-auto min-w-[120px] rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={!isValid}
            className={`w-full md:w-auto min-w-[140px] rounded-xl px-10 py-3.5 text-sm font-bold text-white transition-all active:scale-95 ${isValid
              ? "bg-[#1877F2] shadow-[0_10px_15px_-3px_rgba(24,119,242,0.3)] hover:bg-blue-600" 
              : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save & Next
          </button>
        </div>
      </form>
    </motion.div>
  );
}
