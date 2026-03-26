"use client";

import React from "react";
import { Zap, Flame, Plus, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const dashboardStats = [
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    value: "216",
    label: "In Progress",
    trend: "+8.3%",
    chart: "line",
    color: "bg-[#1e1e76] dark:bg-blue-900/40",
  },
  {
    icon: <Flame className="h-6 w-6 text-white" />,
    value: "3,482",
    label: "Completed Project",
    trend: "+15.7%",
    chart: "donut",
    color: "bg-[#1e1e76] dark:bg-blue-900/40",
  },
];

const projects = [
  {
    id: "PRJ-2023-014",
    name: "Smith Residence",
    location: "123 Elm St, Austin, TX",
    voltage: "120/240V",
    phase: "1Φ 3W",
    nec: "2020",
    lastModified: "Oct 24, 2023",
    status: "In Progress",
  },
  {
    id: "PRJ-2023-011",
    name: "Tech Park Bldg B",
    location: "4500 Tech Blvd, SJ, CA",
    voltage: "480V/277V",
    phase: "3Φ 4W",
    nec: "2023",
    lastModified: "Oct 22, 2023",
    status: "Complete",
  },
  {
    id: "PRJ-2023-009",
    name: "Riverside Medical Clinic",
    location: "88 River Rd, FL",
    voltage: "208V/120V",
    phase: "3Φ 4W",
    nec: "2020",
    lastModified: "Oct 15, 2023",
    status: "In Progress",
  },
  {
    id: "PRJ-2023-004",
    name: "Oakwood Apartments",
    location: "302 Pine St, NY",
    voltage: "120/240V",
    phase: "1Φ 3W",
    nec: "2017",
    lastModified: "Sep 30, 2023",
    status: "Archived",
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-8 md:px-8 transition-colors duration-300"
    >
      {/* Dashboard Header */}
      <motion.h1
        variants={itemVariants}
        className="mb-6 text-2xl font-bold text-gray-900 dark:text-white"
      >
        Dashboard
      </motion.h1>

      {/* Stats Grid */}
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dashboardStats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`${stat.color} relative overflow-hidden rounded-2xl p-6 text-white h-[180px] flex flex-col justify-between shadow-lg shadow-indigo-900/10 dark:shadow-none border border-transparent dark:border-blue-900/20`}
          >
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-lg bg-white/10 p-2"
              >
                {stat.icon}
              </motion.div>
              <span className="text-sm font-medium text-[#FACC15]">
                {stat.trend}
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl font-bold"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm font-light opacity-80">{stat.label}</p>
              </div>

              <div className="h-16 w-24">
                {stat.chart === "line" ? (
                  <svg className="h-full w-full" viewBox="0 0 100 40">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M2,38 C5,38 10,10 22,10 C32,10 38,28 45,28 C52,28 58,38 65,38 C72,38 78,10 88,10 C92,10 98,20 100,15"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2,38 C5,38 10,10 22,10 C32,10 38,28 45,28 C52,28 58,38 65,38 C72,38 78,10 88,10 C92,10 98,20 100,15 V40 H2 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />


                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#A855F7" />
                        <stop
                          offset="100%"
                          stopColor="#A855F7"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg className="h-full w-full" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                    />
                    <motion.circle
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 0.75 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="6"
                      strokeDasharray="100 100"
                      strokeLinecap="round"
                    />

                  </svg>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <Link href="/create-project">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-[12px] bg-[#1877F2] shadow-[0_10px_15px_-3px_rgba(30,30,118,0.20),0_4px_6px_-4px_rgba(30,30,118,0.20)] dark:shadow-none px-5 py-3 text-sm font-semibold text-white transition-all cursor-pointer select-none"
          >
            <Plus className="h-5 w-5" />
            Create New Project
          </motion.button>
        </Link>

      </div>

      <motion.div
        variants={itemVariants}
        className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all"
      >
        <div className="overflow-x-auto scrollbar-hide w-full">
          <table className="w-full text-left border-collapse table-auto md:table-fixed">

            <thead className="bg-[#1877F2] text-white">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[25%] whitespace-nowrap">Project Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[20%] whitespace-nowrap">Location</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[15%] whitespace-nowrap">System Voltage</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[10%] whitespace-nowrap">NEC</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[15%] whitespace-nowrap">Last Modified</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider w-[10%] whitespace-nowrap">Status</th>
                <th className="px-6 py-4 w-[5%]"></th>
              </tr>
            </thead>

            <motion.tbody
              variants={containerVariants}
              className="divide-y divide-gray-50 dark:divide-gray-800"
            >
              {projects.map((project, idx) => (
                <motion.tr
                  key={idx}
                  variants={tableRowVariants}
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  className="group transition-colors cursor-default"
                >
                  <td className="px-6 py-5">
                    <div className="font-medium text-gray-900 dark:text-white leading-tight">
                      {project.name}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 mt-1">
                      {project.id}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {project.location}
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                      {project.voltage}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {project.phase}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {project.nec}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {project.lastModified}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ${
                        project.status === "In Progress"
                          ? "bg-[#EFF6FF] dark:bg-blue-900/40 text-[#3B82F6]"
                          : project.status === "Complete"
                            ? "bg-[#F0FDF4] dark:bg-green-900/40 text-[#22C55E]"
                            : "bg-[#F3F4F6] dark:bg-gray-800 text-[#6B7280] dark:text-gray-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <motion.button
                      whileHover={{ scale: 1.2, color: "#111827" }}
                      className="text-gray-400 dark:text-gray-500 cursor-pointer p-1 rounded-md transition-all"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
