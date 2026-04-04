"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import LogoImg from "@/assets/images/logo.png";
import {
  CheckCircle2,
  Calculator,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import ScrambleText from "@/components/ScrambleText";
import GlowCursor from "@/components/GlowCursor";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const platformFeatures = [
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "NEC-Compliant Calculations",
      description:
        "Standard and Optional methods per NEC 2020/2023 with demand factors applied automatically.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Permit-Ready Documents",
      description:
        "One-line diagrams, panel schedules, and load summaries formatted exactly for plan check.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "AHJ Presets Built-In",
      description:
        "Jurisdiction-specific amendments pre-loaded so you never miss a local requirement.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black font-roboto select-none overflow-x-hidden">
      <GlowCursor />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Image / Hero Video */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Professional Electrician"
            fill
            priority
            className="object-cover opacity-60 brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 container mx-auto px-6"
        >
          <div className="max-w-4xl">
            <motion.p
              variants={itemVariants}
              className="text-[14px] font-black uppercase tracking-[0.4em] text-primary mb-4"
            >
              NEC 2020 · 2023 COMPLIANT
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-9xl font-bold  text-white leading-[0.95] tracking-tighter mb-12"
            >
              <ScrambleText text="Electrical Load" duration={1.5} delay={0.2} /> <br />
              <ScrambleText text="Calculations," duration={1.5} delay={0.2} /> <br />
              <ScrambleText text="Done Right." duration={1.5} delay={0.2} className="text-primary" />
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap flex-col gap-4 mb-16"
            >
              <Link href="/signin">
                <button className="group cursor-pointer flex items-center gap-4 text-white  hover:text-primary transition-all font-bold text-lg tracking-widest uppercase">
                  <div className="h-0.5 w-6 bg-white group-hover:bg-primary transition-all" />
                  Start Your First Project
                </button>
              </Link>
              <button className="group flex items-center gap-4 text-white opacity-60 hover:text-white/70 transition-all font-bold text-lg tracking-widest uppercase">
                <div className="h-0.5 w-6 bg-white/50" />
                See How It Works
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Corner Features */}
        <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col gap-3">
          {["PERMIT-READY PDFS", "AHJ PRESETS", "PANEL SCHEDULING"].map(
            (feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                className="flex items-center gap-3 group cursor-default justify-end"
              >
                <CheckCircle2 className="h-4 w-4 text-primary transition-transform group-hover:scale-125" />
                <span className="text-[11px] font-black tracking-[0.2em] text-white/60 group-hover:text-white uppercase transition-colors">
                  {feature}
                </span>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* Platform Section */}
      <section className="relative z-10 w-full py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-500 mb-6">
              PLATFORM
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-2xl">
              Everything you need to submit.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {platformFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`group px-8 md:px-12 py-8 ${idx !== 2 ? "md:border-r border-white/10" : ""}`}
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 transition-all group-hover:bg-teal-400/20">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-black text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative z-10 w-full py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-500 mb-6">
              GET STARTED
            </p>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Ready to submit <br /> faster?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link href="/register">
              <button className="group flex items-center gap-4 text-white hover:text-primary transition-all font-black text-xl tracking-[0.2em] uppercase">
                Start Free
                <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
            DEMANDEX
          </div>
          <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase text-center">
            © 2026 DemandEX. Professional Electrical Load Calculations.
          </div>
          <Link
            href="/dashboard"
            className="text-[10px] font-black tracking-[0.3em] text-white/40 hover:text-teal-400 transition-colors uppercase flex items-center gap-2"
          >
            Dashboard
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
