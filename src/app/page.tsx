'use client';

import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight, X, Heart, Coffee, ChevronDown } from "lucide-react";

export default function UltraPremiumPortfolio() {
  const [activeCase, setActiveCase] = useState(null);

  const prevWorks = [
    {
      company: "PT. Tees Pratama Indonesia",
      title: "Tees.co.id",
      subtitle: "On-Demand Merchandise Platform",
      image: "/images/tees.png",
      tag: "Web Application, E‑Commerce, B2C Platform",
      url: "https://tees.co.id",
      tools: ['AngularJS', 'React in AngularJS', 'SCSS', 'REST API'],
      role: "For Tees.co.id, an on-demand e-commerce merchandise platform, I developed and maintained core frontend features, translated business and user requirements into scalable implementations, enhanced UI/UX to improve the overall customer shopping experience, and optimized performance to ensure faster browsing and smoother checkout interactions.",
    },
    {
      company: "PT. Tees Pratama Indonesia",
      title: "OfficeBee.co",
      subtitle: "B2B eProcurement & Marketplace SaaS",
      image: "/images/officebee.png",
      tag: "B2B eProcurement, Marketplace",
      url: "https://officebee.co",
      tools: ['AngularJS', 'React in AngularJS', 'SCSS', 'REST API'],
      role: "For Officebee, a corporate merchandise solution platform, I supported the development of web features tailored for B2B clients, implemented interface improvements for internal dashboards and order management systems, and collaborated closely with cross-functional teams to deliver scalable and reliable digital solutions aligned with company initiatives.",
    },
  ];

  const caseStudies = [
    {
      title: "Finance Track",
      subtitle: "Behavior-Driven Finance Platform",
      image: "/images/Budgetify.png",
      tag: "web application",
      metric: "An interactive personal finance planner to track income, expenses, and savings goals in one simple dashboard. Built to help users manage cash flow, plan budgets, and make smarter financial decisions with clarity and ease.",
      problem:
        "Young professionals often lack clarity into their financial patterns, causing reactive decision-making.",
      solution:
        "Crafted a minimal, insight-focused dashboard that transforms raw expense data into meaningful behavioral signals.",
      impact:
        "Encourages intentional spending and supports smarter monthly planning.",
      role:
        "Led strategy, product thinking, UX decisions, and full frontend architecture.",
    },
    {
      title: "Smart Factory",
      subtitle: "Factory Operations Dashboard",
      image: "/images/Smart-Factory.png",
      tag: "web application",
      metric: "An interactive dashboard for monitoring and managing factory operations using real-time data. Built to visualize sensor input, track production metrics, and optimize manufacturing workflows with clarity and efficiency.",
      problem:
        "Teams slow down when priorities are unclear and tools are fragmented.",
      solution:
        "Built a clarity-first task environment emphasizing hierarchy, urgency, and cognitive simplicity.",
      impact:
        "Creates faster alignment and improves operational momentum.",
      role:
        "Owned product direction and engineered scalable UI systems.",
    },
  ];

  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = ["work", "about", "contact"]

    const handleScroll = () => {
      let found = false

      sections.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id)
            found = true
          }
        }
      })

      // Kalau tidak ada section yang aktif (misalnya masih di hero)
      if (!found) {
        setActive(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // cek posisi awal
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItem = (id, label) => (
    <button
      onClick={() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
      className={`transition-colors duration-300 ${active === id
        ? "text-pink-600"
        : "text-slate-700 hover:text-pink-500"
        }`}
    >
      {label}
    </button>
  )

  const fullText = "I Build in Code.";

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    setTypedText("");
    setIsTyping(true);

    let index = 0;

    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 65);

      return () => clearInterval(typingInterval);
    }, 600);

    return () => clearTimeout(startDelay);

  }, [isInView]);

  return (
    <div className="min-h-screen bg-[#fffafd] text-slate-900 overflow-x-hidden selection:bg-pink-200">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-200 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] bg-rose-200 rounded-full blur-[140px] opacity-40" />
      </div>

      {/* FLOATING NAV */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-0 right-0 flex justify-center z-50"
      >
        <div className="backdrop-blur-2xl bg-white/60 border border-white/40 shadow-xl rounded-full px-8 py-3 flex gap-8 text-sm font-medium">
          {navItem("work", "Work")}
          {navItem("about", "About")}
          {navItem("contact", "Contact")}
        </div>
      </motion.div>

      {/* HERO */}
      <section id="hi" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl space-y-10"
        >

          {/* STATUS */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
            {/* <span className="h-2 w-2 rounded-full bg-emerald-500"></span> */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for collaborations
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-slate-900">
            I Think in{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-pink-200/60 rounded-lg -rotate-1"></span>
              <span className="relative z-10 px-2">Product.</span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-pink-200/60 rounded-lg rotate-1"></span>

              <span className="relative z-10 px-2 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                {typedText}
                <span className="ml-1 inline-block w-[2px] h-[1em] bg-pink-500 align-middle blink-cursor"></span>
              </span>
            </span>
          </h1>

          {/* SUB-HEADLINE */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            From strategy to scalable frontend architecture,
            I turn complex ideas into intuitive digital products that perform.
          </p>

          {/* TRUST SIGNAL */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium pt-2">
            <span>Product Strategy → UI → Production</span>
            <span>Scalable Frontend Systems</span>
            <span>Performance & UX Focused</span>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button
              className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white px-12 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Selected Work
            </Button>
          </div>

        </motion.div>

        {/* SCROLL DOWN BUTTON */}
        <div className="mt-4 pb-8 flex justify-center">
          <button
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-slate-400 hover:text-pink-500 transition"
          >
            <ChevronDown className="w-7 h-7 animate-bounce" />
          </button>
        </div>

      </section>

      {/* PREVIOUS WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-semibold mb-20 tracking-tight">
          Previous Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {prevWorks.map((work) => (
            <Link
              key={work.title}
              href={work.url}
              target="_blank"
              className="group"
            >
              <motion.div whileHover={{ y: -10 }}>
                <Card className="rounded-[40px] border-0 shadow-lg hover:shadow-2xl transition overflow-hidden bg-white/80 backdrop-blur h-full cursor-pointer">

                  <CardContent className="p-12 flex flex-col gap-8">

                    {/* IMAGE */}
                    <div className="w-full h-56 rounded-3xl relative overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-rose-100/60 to-pink-60/70" />
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-4">
                      {/* <p className="text-pink-500 text-xs font-semibold">{work.company}</p> */}

                      <div className="flex items-start justify-between">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                          {work.title}
                        </h3>

                        {/* <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium w-fit leading-snug">
                          {work.tag}
                        </span> */}
                      </div>

                      <p className="text-pink-500 font-semibold">
                        {work.subtitle}
                      </p>

                      <p className="text-slate-600 leading-relaxed">
                        {work.role}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {work.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-pink-500 font-semibold pt-2 group-hover:gap-3 transition-all">
                        Visit Website <ArrowUpRight size={18} />
                      </div>

                    </div>

                  </CardContent>

                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

      </section>

      {/* SELECTED WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-semibold mb-20 tracking-tight">Projects</h2>

        <div className="space-y-14">
          {caseStudies.map((study) => (
            <motion.div key={study.title} whileHover={{ y: -10 }} onClick={() => setActiveCase(study)} className="cursor-pointer group">
              <Card className="rounded-[40px] border-0 shadow-lg hover:shadow-2xl transition overflow-hidden bg-white/80 backdrop-blur">
                <CardContent className="p-12 flex flex-col md:flex-row gap-12 items-center">
                  {/* PREMIUM PREVIEW */}
                  <div className="w-full md:w-1/2 h-64 rounded-3xl relative overflow-hidden">
                    {/* IMAGE */}
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 
bg-gradient-to-br from-pink-100/70 via-rose-100/60 to-pink-60/70" />

                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                        {study.title}
                      </h3>

                      <span className="text-xs mt-1 px-3 py-1 rounded-full bg-pink-100 text-pink-600 font-medium">
                        {study.tag}
                      </span>
                    </div>

                    <p className="text-pink-500 font-semibold">{study.subtitle}</p>

                    <p className="text-slate-600 max-w-md leading-relaxed">
                      {study.metric}
                    </p>

                    <div className="flex items-center gap-2 text-pink-500 font-semibold pt-2">
                      View Case Study <ArrowUpRight />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ABOUT — AUTHORITY BUILDING */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-28" >
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-7">
            <h2 className="text-5xl font-semibold tracking-tight">About</h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in turning complex ideas into structured digital products.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              My approach combines product thinking, analytical clarity, and scalable frontend engineering. I care about building systems that are intuitive for users and sustainable for teams.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Rather than focusing on isolated features, I aim to create cohesive experiences that align user needs with business goals.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/verinverdian" target="_blank"><Button variant="outline" className="rounded-full"><Github className="mr-2 h-4 w-4" />Github</Button></Link>
              <Link href="https://www.linkedin.com/in/verdiandesya/" target="_blank"><Button variant="outline" className="rounded-full"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button></Link>
              <Link href="mailto:verdiandesya@gmail.com" target="_blank"><Button variant="outline" className="rounded-full"><Mail className="mr-2 h-4 w-4" />Email</Button></Link>
            </div>
          </div>

          {/* AUTHORITY CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-200 blur-3xl opacity-30 rounded-full" />
            <div className="relative bg-white rounded-[40px] p-12 shadow-2xl">
              <h3 className="font-semibold mb-6 text-xl">Core Advantages</h3>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li>⚡ Product-Oriented Thinking</li>
                <li>📊 Structured Frontend Architecture</li>
                <li>🎯 Intentional UX Decisions</li>
                <li>🧠 Performance & Practicality Focus</li>
                <li>🤝 Clear Technical Communication</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section >

      {/* CONTACT */}
      <section id="contact" className="text-center py-36 px-6" >
        <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-semibold tracking-tight mb-8">
            Let’s Build The Next
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent"> Category-Defining Product</span>
          </h2>

          <p className="text-xl text-slate-600 mb-10">
            Currently open to high-impact roles in digital transformation, product-driven organizations, and ambitious technology teams.
          </p>

          <Link href="mailto:verdiandesya@gmail.com" target="_blank">
            <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white px-10 py-7 text-xl shadow-2xl hover:scale-105 transition">
              Start a Conversation
            </Button>
          </Link>
        </motion.div>
      </section >

      {/* CASE MODAL */}
      <AnimatePresence>
        {
          activeCase && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
              <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} className="bg-white max-w-3xl w-full rounded-[40px] p-12 relative shadow-2xl">
                <button onClick={() => setActiveCase(null)} className="absolute right-8 top-8 text-slate-400 hover:text-slate-700"><X size={28} /></button>

                <h3 className="text-4xl font-semibold mb-2">{activeCase.title}</h3>
                <p className="text-pink-500 font-semibold mb-8 text-lg">{activeCase.subtitle}</p>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                  <p><strong>Problem → </strong>{activeCase.problem}</p>
                  <p><strong>Solution → </strong>{activeCase.solution}</p>
                  <p><strong>Impact → </strong>{activeCase.impact}</p>
                  <p><strong>Role → </strong>{activeCase.role}</p>
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence >

      {/* FOOTER */}
      <footer className="py-8 md:py-12 text-center text-slate-500 
flex flex-wrap items-center justify-center gap-1 md:gap-2
text-xs md:text-sm">

        <span>© {new Date().getFullYear()} Verdian Dee </span>

        <span className="hidden sm:inline">•</span>

        <span className="flex items-center gap-1">
          Made with
          <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 fill-red-500" />
          &
          <Coffee className="w-3 h-3 md:w-4 md:h-4 text-yellow-700" />
        </span>

        <span className="hidden sm:inline">•</span>

        <span>Fueled by curiosity</span>

      </footer>

    </div >
  );
}