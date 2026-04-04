"use client";

import React from "react";
import { Zap, Flame, Plus, MoreVertical, Search } from "lucide-react";
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
    color: "bg-[#4A9C8E] shadow-primary/20",
  },
  {
    icon: <Flame className="h-6 w-6 text-white" />,
    value: "3,482",
    label: "Completed Project",
    trend: "+15.7%",
    chart: "donut",
    color: "bg-[#4A9C8E] shadow-primary/20",
  }
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
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`rounded-[14px] border border-black/10 bg-linear-to-b from-[#4A9C8E] to-[#4B8EA9] relative overflow-hidden p-6 text-white h-[160px] flex flex-col justify-between shadow-xl shadow-primary/10 transition-all`}
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
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 max-w-md w-full relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search projects, addresses, calculations..."
             className="w-full pl-12 pr-4 py-3 bg-[#EEF2FF] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all outline-none"
           />
        </div>
        <Link href="/create-project/info">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl bg-[#4A9C8E] px-6 py-3 text-sm font-bold text-white transition-all shadow-md shadow-primary/20"
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
          <table className="w-full text-left bg-white rounded-xl">

            <thead className="bg-[#4A9C8E] text-white">
              <tr>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-[25%] whitespace-nowrap">Project Name</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-[20%] whitespace-nowrap">Location</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-[15%] whitespace-nowrap">System Voltage</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-[10%] whitespace-nowrap">NEC</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-[15%] whitespace-nowrap">Last Modified</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest w-[10%] whitespace-nowrap">Status</th>
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
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm ${
                        project.status === "In Progress"
                          ? "bg-primary/10 text-primary"
                          : project.status === "Complete"
                            ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
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
