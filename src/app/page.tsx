'use client';

import { useState, useEffect } from 'react';
import {
  FaReact, FaJs, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaLaravel, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiSlack, SiTrello
} from 'react-icons/si';
import { Moon, Sun, Heart, Coffee, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    { id: "projects", label: "Project" },
    { id: "career", label: "Career" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact Me" },
  ];


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center px-6 py-10 relative scroll-smooth">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full text-gray-200 dark:text-gray-800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Navbar */}
      <header className="w-full max-w-6xl flex justify-between md:justify-center relative z-50">
        <nav className="flex justify-between md:justify-center items-center gap-6 
  bg-white dark:bg-gray-800 px-6 py-3 rounded-full 
  border-0 md:border md:border-gray-200 dark:md:border-gray-700 md:shadow-md md:shadow">

          <div className="absolute left-4 md:static font-bold text-xl">𝓥</div>

          {/* Hamburger toggle (mobile only) */}
          <button
            className="absolute right-4 md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={18} />
          </button>

          {/* Nav links */}
          <div
            className={`${menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-4 right-4 bg-white dark:bg-gray-800 shadow-md md:shadow-none px-6 py-4 md:p-0 rounded-2xl md:rounded-full`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setMenuOpen(false); // close menu after click
                }}
                className={`px-4 py-2 rounded-full transition ${activeSection === item.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
                  : "hover:text-blue-600"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-0 md:ml-2 p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full flex flex-col items-center text-center mt-10 relative z-10">
        <section className="flex flex-col items-center text-center">
          <span className="text-sm text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full mb-6 bg-blue-100">
            • Available for work
          </span>

          <div className="mb-6">
            <Image
              src="https://cdn.dribbble.com/users/2728123/avatars/normal/40afd457202d9aa4c46aba4fa475bb6f.jpg?1618545415"
              alt="Verin Avatar"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <h1 className="typing md:text-4xl font-bold mb-4 text-xl">Hi, I’m Verin 👋</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            With 3 years of experience as a Frontend Developer, I help product companies
            build responsive, performant, and engaging digital experiences using modern web technologies.
          </p>
        </section>

        {/* Tools & Technologies */}
        <section className="mt-12 text-center w-full">
          <h2 className="uppercase tracking-wider text-gray-700 dark:text-gray-200 mb-8 font-semibold">Tools & Technologies</h2>
          <div className="flex md:gap-10 gap-2 md:text-4xl text-xl justify-center flex-wrap items-center">
            <FaReact className="text-blue-500" />
            <SiTypescript className="text-blue-700" />
            <FaJs className="text-yellow-500" />
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-600" />
            <SiTailwindcss className="text-cyan-500" />
            <SiNextdotjs className="text-black dark:text-white" />
            <FaNodeJs className="text-green-600" />
            <FaLaravel className="text-red-500" />
            <FaGitAlt className="text-orange-600" />
            <SiSlack className="text-pink-500" />
            <SiTrello className="text-blue-400" />
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="mt-20 w-full max-w-4xl text-left">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            A showcase of selected works that highlight my frontend development skills and problem-solving ability.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Highlighted Project - Tees.co.id */}
            <Link
              href="https://www.tees.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group md:col-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <Image
                src="/tees-preview.jpeg"
                alt="Tees.co.id"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 opacity-100 transition flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                    Frontend
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Tees.co.id</h3>
                <p className="text-white dark:text-gray-300 text-sm mb-1"> Built and maintained frontend features for the custom merchandise platform using modern web technologies. (Tech: AngulasJS, SCSS) </p>
                <span className="inline-block text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  View Website
                </span>
              </div>
            </Link>

            {/* Smaller Project - OfficeBee */}
            <Link
              href="https://officebee.co"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <Image
                src="/officebee-preview.jpeg"
                alt="OfficeBee"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 opacity-100 transition flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                    Frontend
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">OffieceBee</h3>
                <p className="text-white dark:text-gray-300 text-sm mb-1"> Developed responsive and performant UI for office management solutions. (Tech: AngulasJS, SCSS)</p>
                <span className="inline-block text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  View Website
                </span>
              </div>
            </Link>

            {/* GitHub Playground */}
            <Link
              href="https://github.com/verinverdian"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group md:col-span-3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <Image
                src="/github-preview.jpeg"
                alt="GitHub Playground"
                width={1200}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 opacity-100 transition flex flex-col justify-center items-center p-4">
                <h3 className="text-white text-xl font-semibold mb-2">More on GitHub</h3>
                <p className="text-white text-sm mb-2 text-center">
                  Explore my open-source projects, experiments, and code samples on GitHub.
                </p>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  Playground
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="mt-20 w-full max-w-4xl text-left space-y-6 text-base">
          <h2 className="text-2xl font-bold mb-6">Career</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            My professional journey and experiences in the tech industry.
          </p>

          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            {/* Career Break */}
            <li className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold md:text-lg sm:text-xs">Career Break / Professional Development</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  2024
                </span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Pursued a professional teaching certification through a scholarship program from Kemendikbud to enhance my educational and professional skills.
              </p>
            </li>

            {/* Tees.co.id */}
            <li className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Frontend Engineer at Tees.co.id</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  2019–2023
                </span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Develop and maintain website platform, create new features, redesign interface, build reusable code and libraries for future use, follow SEO best practices, fix bugs and test for usability.
              </p>
            </li>

            {/* OfficeBee.co */}
            <li className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Frontend Engineer at OfficeBee</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  2022–2023
                </span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Collaborate with teams to develop new user-facing features, write reusable code and libraries, ensure the technical feasibility of UI/UX designs, enhance application for maximum speed and scalability, validate input before submitting to back end, fix bugs and test for usability.
              </p>
            </li>

            {/* Krafthaus.co.id */}
            <li className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Internship at Krafthaus.co.id</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  2016
                </span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Assist the company with tasks set out by various teams, such as managing the official website, writing contents for the blog or website, follow-up and improvement of SEO.
              </p>
            </li>
          </ul>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mt-20 w-full max-w-4xl text-left">
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="text-2xl font-bold">Blog</h2>
            <span className="text-xs px-2 py-1 mt-1 rounded-full bg-orange-100 text-orange-800 dark:bg-green-800 dark:text-green-100">
              Coming Soon
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sharing insights, tutorials, and stories from my journey as a frontend developer.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Blog Post 1 */}
            <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 opacity-50 cursor-not-allowed">
              <h3 className="font-semibold text-lg mb-2">How I Built Dark Mode in Next.js</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A step-by-step guide on implementing a smooth dark mode toggle using Tailwind CSS and React hooks.
              </p>
              <span className="text-sm text-gray-400">Read more →</span>
            </div>

            {/* Blog Post 2 */}
            <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 opacity-50 cursor-not-allowed">
              <h3 className="font-semibold text-lg mb-2">My Journey as a Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lessons learned, tools mastered, and challenges faced while building modern web applications.
              </p>
              <span className="text-sm text-gray-400">Read more →</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 w-full max-w-4xl mb-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let’s work together! Reach out for collaborations or just a friendly chat.
          </p>

          {/* Tombol utama */}
          <Link
            href="mailto:verdiandesya@gmail.com"
            className="inline-block bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition mb-4"
          >
            Send Email
          </Link>

          {/* Ikon Sosial */}
          <div className="flex justify-center gap-6 text-3xl mt-1">
            <Link
              href="mailto:verdiandesya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.linkedin.com/in/verdiandesya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full pt-6 border-t bg-white dark:bg-gray-900 dark:border-gray-700 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
          © {year} 𝓥 • Made with
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          &
          <Coffee className="w-4 h-4 text-yellow-700" />
          • fueled by curiosity
        </p>
      </footer>
    </div>
  );
}
