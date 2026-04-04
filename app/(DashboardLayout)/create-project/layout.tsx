"use client";

import React from "react";
import { 
  Info, 
  Calendar, 
  Layers, 
  BarChart3, 
  FileText,
  ChevronLeft
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const tabs = [
  { id: "info", label: "Project & System info", icon: <Info className="h-4 w-4" />, href: "/create-project/info" },
  { id: "load", label: "Load calculations", icon: <Calendar className="h-4 w-4" />, href: "/create-project/load" },
  { id: "panel", label: "Panel schedules", icon: <Layers className="h-4 w-4" />, href: "/create-project/panel" },
  { id: "design", label: "System Design", icon: <BarChart3 className="h-4 w-4" />, href: "/create-project/design", comingSoon: true },
  { id: "reports", label: "Reports", icon: <FileText className="h-4 w-4" />, href: "/create-project/reports", comingSoon: true },
];

export default function CreateProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";

  const activeTab = tabs.find((tab) => pathname.includes(tab.id))?.id || "info";

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 transition-colors duration-300">
      {/* Header & Back Link */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={itemVariants} 
        className="mb-6"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Dashboard
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Projects</h1>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="mb-8 flex flex-wrap gap-2 rounded-2xl bg-white dark:bg-gray-900 p-2 shadow-sm border border-gray-100 dark:border-gray-800 items-center overflow-hidden"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 z-10 ${
                isActive
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              }`}
            >
              <span className="relative z-20 flex items-center gap-2 whitespace-nowrap">
                {tab.icon}
                {tab.label}
                {tab.comingSoon && (
                  <span className={`ml-1 flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight text-primary`}>
                    Soon
                  </span>
                )}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl z-0 shadow-md"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          );
        })}
      </motion.div>

      {/* Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
