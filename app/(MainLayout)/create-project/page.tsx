"use client";

import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronDown,
  Info,
  Calendar,
  Layers,
  FileText,
  BarChart3,
  PlusCircle,
  Flame,
  X,
  Zap,
  ThermometerSun,
  Plus
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const tabContentVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } }
};

const tabs = [
  { id: "info", label: "Project & System info", icon: <Info className="h-4 w-4" /> },
  { id: "load", label: "Load calculations", icon: <Calendar className="h-4 w-4" /> },
  { id: "panel", label: "Panel schedules", icon: <Layers className="h-4 w-4" /> },
  { id: "design", label: "System Design", icon: <BarChart3 className="h-4 w-4" /> },
  { id: "reports", label: "Reports", icon: <FileText className="h-4 w-4" /> },
];

type FormInputs = {
  projectName: string;
  location: string;
  description?: string;
  necCodeYear: string;
  calculationType: string;
  primarySystemVoltage: string;
};

export default function CreateProjectPage() {
  const [activeTab, setActiveTab] = useState("load");
  const [isStandard, setIsStandard] = useState(true);
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
    router.push("/");
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8 md:px-8"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Header & Back Link */}
        <motion.div variants={itemVariants} className="mb-6">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#1877F2]"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 tracking-tight">Projects</h1>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-sm border border-gray-100 items-center overflow-hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 z-10 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-500 hover:text-[#1877F2]"
              }`}
            >
              <span className="relative z-20 flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#1877F2] rounded-xl z-0 shadow-md"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Form Area with Transitions */}
        <div className="relative container mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "info" && (
              <motion.div
                key="info"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-8"
              >
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
                        className={`w-full rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent ${
                          errors.projectName ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
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
                        className={`w-full rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent ${
                          errors.location ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
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
                          className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer ${
                            errors.necCodeYear ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
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
                          className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer font-medium ${
                            errors.calculationType ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
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
                          className={`flex w-full appearance-none items-center justify-between rounded-xl bg-[#F3F4F6] px-4 py-3.5 text-sm outline-none transition-all focus:bg-white focus:ring-2 border border-transparent cursor-pointer ${
                            errors.primarySystemVoltage ? "ring-2 ring-red-500/20 border-red-500" : "focus:ring-[#1877F2]/20 focus:border-[#1877F2]"
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
              </motion.div>
            )}

            {activeTab === "load" && (
              <motion.div
                key="load"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Standard/Optional Toggle */}
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${isStandard ? "text-[#1877F2]" : "text-gray-400"}`}>Standard</span>
                  <button
                    type="button"
                    onClick={() => setIsStandard(!isStandard)}
                    className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none bg-blue-100"
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-[#1877F2] shadow ring-0 transition duration-200 ease-in-out ${
                        isStandard ? "translate-x-0" : "translate-x-5"
                      }`}
                    />
                  </button>
                  <span className={`text-sm font-bold ${!isStandard ? "text-[#1877F2]" : "text-gray-400"}`}>Optional</span>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Left Column: Tables */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* General load section */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                      <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-xl font-bold text-gray-900">General load</h2>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50">
                              <th className="pb-4 text-left"></th>
                              <th className="pb-4 text-center">Qty</th>
                              <th className="pb-4 text-center">VA</th>
                              <th className="pb-4 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {[
                              { label: "Total square footage", qty: 2, va: 1500, total: 3000 },
                              { label: "Small appliance circuits", qty: 2, va: 1500, total: 3000 },
                              { label: "Laundry circuits", qty: 1, va: 1500, total: 1500 },
                            ].map((row, idx) => (
                              <tr key={idx}>
                                <td className="py-5 text-sm font-bold text-gray-700">{row.label}</td>
                                <td className="py-5 px-4 text-center">
                                  <input 
                                    type="text" 
                                    defaultValue={row.qty} 
                                    className="w-16 rounded-lg bg-[#F8F9FA] px-3 py-2 text-center text-sm font-bold text-gray-700 outline-none border border-gray-100 focus:border-[#1877F2]/30"
                                  />
                                </td>
                                <td className="py-5 text-center text-sm font-medium text-gray-400">{row.va}</td>
                                <td className="py-5 text-right text-sm font-bold text-gray-700">{row.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-8 text-right">
                        <span className="text-xs font-bold text-gray-900 mr-4">Total: 6,345 VA</span>
                      </div>
                    </div>

                    {/* HVAC section */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                      <div className="flex items-center gap-2 mb-8">
                        <h2 className="text-xl font-bold text-gray-900">HVAC</h2>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </div>

                      {/* Heating subsection */}
                      <div className="mb-10">
                        <div className="flex items-center gap-2 mb-4">
                          <Flame className="h-4 w-4 text-red-500" />
                          <h3 className="text-sm font-bold text-gray-700">Heating</h3>
                        </div>
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-50">
                            {[
                              { label: "Central heat - 9,000 W (10.6 at 240V)", qty: 0, va: 9000, total: 0 },
                              { label: "Heat bed - 5,000 W (5.0 at 240V)", qty: 0, va: 8000, total: 0 },
                              { label: "Furnace - 4,200 W (W 30 at 120V)", qty: 0, va: 9700, total: 0 },
                            ].map((row, idx) => (
                              <tr key={idx}>
                                <td className="py-5 text-sm font-bold text-gray-700">{row.label}</td>
                                <td className="py-5 px-4 text-center">
                                  <input type="text" defaultValue={row.qty} className="w-16 rounded-lg bg-[#F8F9FA] px-3 py-2 text-center text-sm font-bold text-gray-700 outline-none border border-gray-100" />
                                </td>
                                <td className="py-5 text-center text-sm font-medium text-gray-400">{row.va}</td>
                                <td className="py-5 text-right text-sm font-bold text-gray-700">{row.total}</td>
                                <td className="py-5 pl-4 text-right">
                                  <button type="button" className="text-gray-300 hover:text-red-500">
                                    <X className="h-4 w-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="mt-4 text-right">
                          <span className="text-xs font-bold text-gray-900">Total: 0 VA</span>
                        </div>
                        <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all">
                          <Plus className="h-4 w-4" />
                          Add equipment
                        </button>
                      </div>

                      {/* Cooling subsection */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <ThermometerSun className="h-4 w-4 text-orange-400" />
                          <h3 className="text-sm font-bold text-gray-700">Cooling</h3>
                        </div>
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-50">
                            <tr>
                              <td className="py-5 text-sm font-bold text-gray-700">AC conditioner - 8,000 W (33.0 at 240V)</td>
                              <td className="py-5 px-4 text-center">
                                <input type="text" defaultValue="0" className="w-16 rounded-lg bg-[#F8F9FA] px-3 py-2 text-center text-sm font-bold text-gray-700 outline-none border border-gray-100" />
                              </td>
                              <td className="py-5 text-center text-sm font-medium text-gray-400">8000</td>
                              <td className="py-5 text-right text-sm font-bold text-gray-700">0</td>
                              <td className="py-5 pl-4 text-right">
                                <button type="button" className="text-gray-300 hover:text-red-500">
                                  <X className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mt-4 text-right">
                          <span className="text-xs font-bold text-gray-900">Total: 0 VA</span>
                        </div>
                        <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all">
                          <Plus className="h-4 w-4" />
                          Add equipment
                        </button>
                      </div>
                    </div>
                    {/* Other electrical load section */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                       <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Other electrical load</h2>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </div>

                      <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-hide">
                        <table className="w-full">
                          <thead>
                            <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 text-center">
                              <th className="pb-4 text-left"></th>
                              <th className="pb-4">Qty</th>
                              <th className="pb-4">Voltage</th>
                              <th className="pb-4">Poles</th>
                              <th className="pb-4">Neutral</th>
                              <th className="pb-4">VA</th>
                              <th className="pb-4 text-right">Total</th>
                              <th className="pb-4"></th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {[
                              "Bath / laundry son. - 10 W (0.04 at 12V)",
                              "Kitchen/garage son. - 10 W (0.04 at 12V)",
                              "Disposer - 800 W (3.34 at 120V)",
                              "Other - 8,000 W (33.3 at 240V)",
                              "Trash compactor - 1,200 W (5.0 at 240V)",
                              "Microwave - 800 W (3.34 at 120V)",
                              "Range - 10,000 W (41.7 at 240V)",
                              "Freezer - 1,500 W (6.25 at 240V)",
                              "Freezer / Dryer (typic) - 5000 W (21.3 at 240V)",
                              "Garage / Dryer (typic) - 5000 W (21.3 at 240V)",
                              "Cooktop - 10,000 W (41.67 at 240V)",
                              "Oven - 8,000 W (33.34 at 240V)",
                              "Tankless water heater - 800 W (3.34 at 240V)",
                              "Spa / Hot tub - 8,000 W (33.34 at 240V)",
                              "In Ground Pool - 1,500 W (6.25 at 240V)",
                              "Water heater (+ standby) - 5,500 W (23.0 at 240V)"
                            ].map((label, idx) => (
                              <tr key={idx}>
                                <td className="py-4 text-[12px] font-bold text-gray-700 min-w-[200px]">{label}</td>
                                <td className="py-4 px-2">
                                  <input type="text" defaultValue="2" className="w-12 rounded-lg bg-[#F8F9FA] px-2 py-2 text-center text-xs font-bold text-gray-700 border border-transparent shadow-sm" />
                                </td>
                                <td className="py-4 px-2">
                                  <select className="w-20 rounded-lg bg-[#F8F9FA] px-2 py-2 text-xs font-bold text-gray-700 border border-transparent shadow-sm cursor-pointer appearance-none">
                                    <option>220 V</option>
                                    <option>110 V</option>
                                  </select>
                                </td>
                                <td className="py-4 px-2">
                                  <input type="text" defaultValue="2" className="w-10 rounded-lg bg-[#F8F9FA] px-1 py-2 text-center text-xs font-bold text-gray-700 border border-transparent shadow-sm" />
                                </td>
                                <td className="py-4 px-2 text-center">
                                  <div className="relative inline-flex h-4 w-9 cursor-pointer rounded-full bg-blue-100 transition-colors">
                                    <span className="absolute left-0.5 top-0.5 h-3 w-3 translate-x-5 rounded-full bg-[#1877F2] transition-transform shadow-sm" />
                                  </div>
                                </td>
                                <td className="py-4 px-2">
                                  <input type="text" defaultValue="50" className="w-16 rounded-lg bg-[#F8F9FA] px-2 py-2 text-center text-xs font-bold text-gray-700 border border-transparent shadow-sm" />
                                </td>
                                <td className="py-4 text-right text-xs font-bold text-gray-700">150</td>
                                <td className="py-4 pl-3">
                                  <button type="button" className="text-gray-200 hover:text-red-500 transition-colors">
                                    <X className="h-4 w-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 text-right">
                        <span className="text-xs font-bold text-gray-900">Total: 8,099 VA</span>
                      </div>
                      <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all">
                        <Plus className="h-4 w-4" />
                        Add equipment
                      </button>
                    </div>

                    {/* EV charging section */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                       <div className="flex items-center gap-2 mb-6">
                        <h2 className="text-xl font-bold text-gray-900">EV charging</h2>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </div>

                      <table className="w-full">
                        <thead>
                          <tr className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 text-center">
                            <th className="pb-4 text-left"></th>
                            <th className="pb-4">Qty</th>
                            <th className="pb-4">VA</th>
                            <th className="pb-4 text-right">Total</th>
                            <th className="pb-4"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          <tr>
                            <td className="py-5 text-sm font-bold text-gray-700">EV charger - 30,000V (2.0A at 240V x 1230V)</td>
                             <td className="py-5 px-4 text-center">
                                <input type="text" defaultValue="1" className="w-16 rounded-lg bg-[#F8F9FA] px-3 py-2 text-center text-sm font-bold text-gray-700 border border-gray-100 outline-none" />
                              </td>
                              <td className="py-5 text-center text-sm font-medium text-gray-400">9600</td>
                              <td className="py-5 text-right text-sm font-bold text-gray-700">9600</td>
                              <td className="py-5 pl-4 text-right">
                                <button type="button" className="text-gray-200 hover:text-red-500">
                                  <X className="h-4 w-4" />
                                </button>
                              </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="mt-6 text-right">
                        <span className="text-xs font-bold text-gray-900">Total: 9,600 VA</span>
                      </div>
                      <button type="button" className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all">
                        <Plus className="h-4 w-4" />
                        Add equipment
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Final calculation Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:p-8">
                      <h2 className="mb-8 text-xl font-bold text-gray-900">Final calculation</h2>
                      
                      <div className="space-y-6">
                        {[
                          { label: "General lighting load", value: "0 VA" },
                          { label: "Receptacle load", value: "0 VA" },
                          { label: "HVAC load", value: "0 VA" },
                          { label: "Cooking equipment", value: "0 VA" },
                          { label: "Other lighting load", value: "0 VA" },
                          { label: "All other loads", value: "0 VA" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-gray-50/50 p-3 rounded-lg border border-transparent hover:border-gray-100 transition-all">
                            <span className="text-sm font-medium text-gray-500">{item.label}</span>
                            <span className="text-sm font-bold text-gray-900">{item.value}</span>
                          </div>
                        ))}

                        <div className="pt-6 border-t border-gray-100 space-y-4">
                          <div className="flex flex-col gap-2">
                             <span className="text-xs font-bold text-gray-400">Primary Sysyem Largest motor</span>
                             <div className="flex items-center gap-2">
                                <input type="text" defaultValue="600VA" className="w-full rounded-lg bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 border border-gray-100 outline-none" />
                                <span className="text-[10px] font-bold text-gray-400">at</span>
                                <input type="text" defaultValue="25 %" className="w-16 rounded-lg bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 border border-gray-100 outline-none" />
                                <span className="text-xs font-bold text-gray-900 ml-auto transition-all">150 VA</span>
                             </div>
                          </div>
                          <div className="flex flex-col gap-2">
                             <span className="text-xs font-bold text-gray-400">secondary Sysyem Largest motor</span>
                             <div className="flex items-center gap-2">
                                <input type="text" defaultValue="600VA" className="w-full rounded-lg bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 border border-gray-100 outline-none" />
                                <span className="text-[10px] font-bold text-gray-400">at</span>
                                <input type="text" defaultValue="25 %" className="w-16 rounded-lg bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 border border-gray-100 outline-none" />
                                <span className="text-xs font-bold text-gray-900 ml-auto">150 VA</span>
                             </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-400">Total calculated load</span>
                          <span className="text-sm font-bold text-gray-900">150 VA</span>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-4 flex justify-between items-center border border-gray-100 shadow-inner">
                          <span className="text-xs font-bold text-gray-900">Calculated amperage (load / 240V)</span>
                          <span className="text-xs font-black text-gray-900 tracking-tight">1 A</span>
                        </div>

                        <button type="submit" className="w-full rounded-xl bg-[#1877F2] py-4 text-sm font-bold text-white shadow-[0_10px_20px_-5px_rgba(24,119,242,0.4)] hover:bg-blue-600 transition-all active:scale-95 mt-6">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab !== "info" && activeTab !== "load" && (
              <motion.div
                key="other"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex h-[400px] items-center justify-center rounded-2xl border-2 border-dashed border-gray-100 bg-white"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-gray-400">
                    {tabs.find(t => t.id === activeTab)?.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tabs.find(t => t.id === activeTab)?.label}</h3>
                  <p className="max-w-[200px] text-xs font-medium text-gray-400 mt-1">This section is currently under development.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 mt-12 pb-10"
        >
          <Link href="/" className="w-full md:w-auto">
            <button type="button" className="w-full min-w-[120px] rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95">
              Cancel
            </button>
          </Link>
          <button 
            type="submit"
            disabled={!isValid}
            className={`w-full md:w-auto min-w-[140px] rounded-xl px-10 py-3.5 text-sm font-bold text-white transition-all active:scale-95 ${
              isValid 
                ? "bg-[#1877F2] shadow-[0_10px_15px_-3px_rgba(24,119,242,0.3)] hover:bg-blue-600" 
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}


