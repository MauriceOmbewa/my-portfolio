import React from 'react';
import {
  Github, Linkedin, Mail, Code2, Briefcase, User, GraduationCap,
  Terminal, Phone, MapPin, ExternalLink, X, ArrowDown, Zap,
  BookOpen, Rocket, Users,
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Section from './components/Section';
import CVSection from './components/CVSection';
import BlogsSection from './components/BlogsSection';
import ContactForm from './components/ContactForm';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTypewriter } from './hooks/useTypewriter';

function App() {
  useScrollReveal();

  const typedRole = useTypewriter(
    ['Software Engineer', 'Co-founder @ Trinova Labs', 'Full-Stack Architect', 'Visionary Builder'],
    75,
    2200
  );

  const projects = [
    {
      title: "Sellora",
      description: "Sellora is a SaaS platform built for small and medium-sized businesses to run and grow their operations from one place. Built with a React frontend and a Python backend on PostgreSQL.",
      image: "https://serp-p.pids.gov.ph/media/featured-image/1685338051_647437c361ed2.jpeg",
      tags: ["React", "Python", "PostgreSQL", "SaaS"],
      link: "https://github.com/MauriceOmbewa/sellora.git",
      liveDemo: "https://sellora-one-smoky.vercel.app",
    },
    {
      title: "Garisha",
      description: "Garisha is a business management platform that helps garages, car yards, car hire businesses, and dealerships manage operations, customers, vehicles, finances, and performance analytics in one centralized place.",
      image: "https://hinawierp.com/wp-content/uploads/2026/05/Garage-300x200-2.png.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/garisha-frontend.git",
      liveDemo: "https://garisha-frontend.vercel.app",
    },
    {
      title: "WaziLearn",
      description: "WaziLearn is a learning management system localized for the Kenyan curriculum, giving learners and educators one platform to access and manage curriculum-aligned content. Built with Angular and Java Spring Boot.",
      image: "https://learnademy.com/storage/uploads/users/1_seaq73mzj4m18ejwwqm2.jpg",
      tags: ["Angular", "TypeScript", "Java", "Spring Boot"],
      link: "https://github.com/MauriceOmbewa/wazi.git",
      liveDemo: "https://wazi-ten.vercel.app",
    },
    {
      title: "DawaDash",
      description: "A medicine ordering and delivery platform featuring an Angular frontend and a Spring Boot backend. Supports medicine management, user authentication, order processing, and delivery operations through secure RESTful APIs.",
      image: "https://www.eiosys.com/wp-content/uploads/2022/11/Why-Start-an-Online-Medicine-Delivery-Business.webp",
      tags: ["Angular", "TypeScript", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
      link: "https://github.com/MauriceOmbewa/DawaDash",
      liveDemo: "https://dawa-dash.vercel.app",
    },
    {
      title: "MajiSafi",
      description: "A water ordering and delivery platform built with Angular and Spring Boot. Features secure Google OAuth2 authentication, water ordering, map-based live order tracking, and RESTful APIs backed by a structured database architecture.",
      image: "https://mimaji.co.ke/_next/static/media/Water-Delivery-Nairobi.0014a5d1.png",
      tags: ["Angular", "TypeScript", "Java 21", "Spring Boot", "OAuth2", "PostgreSQL"],
      link: "https://github.com/MauriceOmbewa/MajiPoa",
      liveDemo: "https://maji-poa.vercel.app",
    },
    {
      title: "Zuru TV",
      description: "ZuruTV is a movie recommendation platform that allows users to discover films tailored to their interests, view detailed information about each title, and stream content directly from the platform.",
      image: "https://www.apptuts.net/wp-content/uploads/2020/09/cover-movie-download-apps.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/ZuruTv",
      liveDemo: "https://zuru-tv.vercel.app",
    },
    {
      title: "Soundra",
      description: "Soundra is a music discovery and streaming platform that helps users explore new tracks, view detailed artist and album information, and enjoy seamless music playback.",
      image: "https://devabit.com/uploads/music-app-features-cover-small-devabit.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/Soundra",
      liveDemo: "https://soundra.vercel.app",
    },
    {
      title: "System Monitor",
      description: "A C++ desktop system monitor with a Dear ImGui interface that visualizes real-time CPU, memory, disk, fan, thermal, and network usage by reading data from the Linux /proc and /sys filesystems.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpglKbRHeEmgGEhbpc8sEcy-Cyy3dggH2jGA&s",
      tags: ["C++", "Makefile"],
      link: "https://github.com/MauriceOmbewa/system-monitor",
    },
    {
      title: "TibaTrust",
      description: "TibaTrust is a blockchain-powered healthcare platform providing affordable insurance, medical aid, and community support for underserved patients in Kenya. Features M-Pesa payment integration.",
      image: "https://imgs.search.brave.com/XePZtg4kiOu0TAAS6BnQmbX5AHxMY5Kqo5EIwI3nTq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFsdGgtaW5z/dXJhbmNlLWNsaXBi/b2FyZC1zdGV0aG9z/Y29wZS1oZWFydF8z/NjMyNS0yNzY2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
      tags: ["TypeScript", "React", "Firebase", "M-Pesa"],
      link: "https://github.com/MauriceOmbewa/TibaTrust",
      liveDemo: "https://tibatrust.vercel.app",
    },
    {
      title: "Netfix",
      description: "Netfix connects clients with service providers across various industries such as plumbing and carpentry. Companies can register and list services, making it easy for clients to find, browse, and book trusted professionals.",
      image: "https://imgs.search.brave.com/-dKatE4zsJTdTtVcy0SRz62Xr21J_fizWt8tBW1uNwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODk1Ni84OTU2/MTI0LnBuZw",
      tags: ["Python", "Django", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/netfix",
    },
    {
      title: "Ripple",
      description: "Ripple is a social media platform supporting posts, following, groups, events, real-time chat, and public/private account visibility.",
      image: "https://st5.depositphotos.com/3930295/62029/i/450/depositphotos_620295162-stock-photo-social-media-social-media-background.jpg",
      tags: ["Go", "JavaScript", "Docker", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/ripple",
    },
    {
      title: "Groupie Trackers",
      description: "A Go-based web app that tracks music artists, providing concert details, artist relations, and geolocation visuals with clean architecture and API-driven data.",
      image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_1920,c_limit/GettyImages-125112134.jpg",
      tags: ["Go", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/visualizations-groupie-trackers",
    },
    {
      title: "interactive-qa-llm-app",
      description: "A full-stack Q&A app using Google Gemini API for intelligent answers on international travel documentation. Features real-time chat, markdown rendering, and structured prompts. Built with FastAPI and Next.js.",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=60",
      tags: ["Next.js", "React", "Python", "FastAPI", "Gemini"],
      link: "https://github.com/MauriceOmbewa/interactive-qa-llm-app",
    },
  ];

  // Skills with Devicon classes
  const skills = [
    { title: "React.js",        level: 90, deviconClass: "devicon-react-original colored" },
    { title: "Angular",         level: 95, deviconClass: "devicon-angularjs-plain colored" },
    { title: "Next.js",         level: 80, deviconClass: "devicon-nextjs-plain" },
    { title: "TypeScript",      level: 85, deviconClass: "devicon-typescript-plain colored" },
    { title: "JavaScript",      level: 85, deviconClass: "devicon-javascript-plain colored" },
    { title: "Python",          level: 80, deviconClass: "devicon-python-plain colored" },
    { title: "Java",            level: 75, deviconClass: "devicon-java-plain colored" },
    { title: "Go",              level: 85, deviconClass: "devicon-go-plain colored" },
    { title: "Node.js",         level: 75, deviconClass: "devicon-nodejs-plain colored" },
    { title: "PostgreSQL",      level: 80, deviconClass: "devicon-postgresql-plain colored" },
    { title: "MongoDB",         level: 75, deviconClass: "devicon-mongodb-plain colored" },
    { title: "Docker",          level: 70, deviconClass: "devicon-docker-plain colored" },
    { title: "Git",             level: 90, deviconClass: "devicon-git-plain colored" },
    { title: "AWS",             level: 65, deviconClass: "devicon-amazonwebservices-plain colored" },
    { title: "Tailwind CSS",    level: 90, deviconClass: "devicon-tailwindcss-plain colored" },
    { title: "HTML/CSS",        level: 90, deviconClass: "devicon-html5-plain colored" },
    { title: "Spring Boot",     level: 75, deviconClass: "devicon-spring-plain colored" },
    { title: "FastAPI",         level: 80, deviconClass: "devicon-fastapi-plain colored" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Header />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <ParticleBackground />

        {/* Radial spotlights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">

            {/* ── Text ── */}
            <div className="text-center md:text-left flex-1">

              {/* Identity badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 float-anim">
                <Zap className="w-3.5 h-3.5" />
                Co-founder @ Trinova Labs &nbsp;·&nbsp; Software Engineer
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight">
                <span className="text-white">Maurice</span>{' '}
                <span className="shimmer-text">Ombewa</span>
              </h1>

              {/* Typewriter */}
              <div className="text-xl md:text-2xl text-gray-400 mb-6 h-8 font-light">
                <span className="text-gray-300">{typedRole}</span>
                <span className="type-cursor" />
              </div>

              {/* Tagline */}
              <p className="text-gray-500 max-w-lg mb-8 leading-relaxed text-sm md:text-base">
                I build systems that scale, teams that move fast, and products people love.
                Based in Nairobi — working globally.
              </p>

              {/* CTAs — confident, not needy */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                <a
                  href="#projects"
                  className="btn-glow px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25"
                >
                  See What I've Built
                </a>
                <a
                  href="#contact"
                  className="btn-glow px-6 py-3 rounded-xl bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 hover:text-white font-semibold text-sm transition-all duration-300 border border-gray-700/50 hover:border-gray-600/70"
                >
                  Let's Collaborate
                </a>
              </div>

              {/* Social icons */}
              <div className="flex justify-center md:justify-start gap-3">
                {[
                  { href: 'https://github.com/MauriceOmbewa', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/maurice-ombewa-3631ab223/', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { href: 'mailto:ombewamaurice79@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email' },
                  { href: 'https://x.com/maurice_ombewa', icon: <X className="w-5 h-5" />, label: 'X' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-blue-500/10 text-gray-500 hover:text-blue-400 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Avatar ── */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-4 rounded-full border border-blue-500/10" />

              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden avatar-glow ring-2 ring-blue-500/30">
                <img
                  src="https://avatars.githubusercontent.com/u/124437425?v=4"
                  alt="Maurice Ombewa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat badges */}
              <div className="absolute -bottom-4 -left-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-gray-700/50 float-anim shadow-xl">
                <p className="text-xs text-gray-500">Projects shipped</p>
                <p className="text-xl font-bold text-white">13+</p>
              </div>
              <div className="absolute -top-4 -right-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-gray-700/50 float-anim-delayed shadow-xl">
                <p className="text-xs text-gray-500">Years exp.</p>
                <p className="text-xl font-bold text-white">3+</p>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="flex justify-center mt-16">
            <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <Section id="about" icon={<User className="w-5 h-5" />} title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* Bio */}
          <div className="reveal-left space-y-5">
            <p className="text-gray-400 leading-relaxed">
              I'm Maurice Ombewa — a software engineer, co-founder, and builder at heart. With
              over three years of hands-on experience, I architect and ship full-stack systems
              across Python (FastAPI), TypeScript (React, Angular), Java (Spring Boot), and Go,
              backed by PostgreSQL, Redis, and Docker in production environments.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond writing code, I co-founded <span className="text-violet-400 font-semibold">Trinova Labs</span> — a technology venture focused on
              building products that solve real problems for African businesses and communities.
              I think in systems, not just features, and I care deeply about the why behind every
              product decision.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not building, I'm reading — from systems thinking and product strategy
              to philosophy and history. Books sharpen how I see problems and shape how I lead
              teams. I bring that same curiosity and depth to every collaboration I join.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: <Rocket className="w-4 h-4 text-blue-400" />, label: 'Identity', value: 'Co-founder, Trinova Labs' },
                { icon: <BookOpen className="w-4 h-4 text-violet-400" />, label: 'Beyond code', value: 'Avid reader' },
                { icon: <Users className="w-4 h-4 text-emerald-400" />, label: 'Mindset', value: 'Builder & collaborator' },
                { icon: <MapPin className="w-4 h-4 text-orange-400" />, label: 'Location', value: 'Nairobi, Kenya' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/40 flex items-start gap-2.5">
                  <div className="mt-0.5">{icon}</div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                    <p className="text-sm text-gray-200 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all duration-300 rounded-xl text-white font-medium text-sm shadow-lg shadow-blue-600/20"
            >
              <Mail className="w-4 h-4" />
              Start a Conversation
            </a>
          </div>

          {/* Skills icon grid */}
          <div className="reveal-right">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Technical Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
              {skills.map(({ title, level, deviconClass }) => (
                <SkillBadge key={title} title={title} level={level} deviconClass={deviconClass} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Projects ─────────────────────────────────────────────── */}
      <Section id="projects" icon={<Code2 className="w-5 h-5" />} title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {projects.map((project) => (
            <div key={project.title} className="reveal">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── Education ────────────────────────────────────────────── */}
      <Section id="education" icon={<GraduationCap className="w-5 h-5" />} title="Education">
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              degree: 'Bachelor of Science in Information Technology',
              school: 'KCA University',
              period: '2020 – 2024',
              desc: 'Four-year programme covering software development, database management, networking, and system architecture — the foundation that shaped how I think about building systems at scale.',
            },
            {
              degree: 'Software Development',
              school: 'Power Learn Project (PLP)',
              period: 'April 2022 – December 2022',
              desc: 'Intensive programme covering programming fundamentals, web and mobile development, databases, and software engineering best practices.',
            },
          ].map((edu, i) => (
            <div key={edu.degree} className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
              <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 card-hover gradient-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 text-sm mb-2 font-medium">
                      {edu.school} &middot; {edu.period}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <Section id="experience" icon={<Briefcase className="w-5 h-5" />} title="Experience">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

            <div className="space-y-6">
              {[
                {
                  role: 'Software Engineer',
                  company: 'Softkit Limited',
                  period: 'September 2025 – Present',
                  desc: 'Building full-stack features across React, Angular, and FastAPI in production. Developing reusable UI components, applying Redis caching, implementing background workers, and participating in peer code reviews inside an agile team using Git, Docker, and Linux.',
                  current: true,
                },
                {
                  role: 'Software Engineer',
                  company: 'Zone01 Kisumu',
                  period: 'January 2024 – August 2025',
                  desc: 'Developed and maintained secure REST APIs with FastAPI, built responsive frontends with React and TypeScript, designed and optimized PostgreSQL and MySQL databases, containerized applications with Docker, and integrated AI-powered features into production systems.',
                  current: false,
                },
                {
                  role: 'Full-Stack Developer',
                  company: 'Vuna',
                  period: 'May 2025 – July 2025',
                  desc: 'Customized and extended ERP systems on Odoo and Fleetbase. Configured modules, workflows, and integrations to fit client operations, gathered requirements directly from clients, and provided technical support through deployment.',
                  current: false,
                },
              ].map((exp, i) => (
                <div key={exp.company} className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
                  <div className="relative pl-16">
                    <div className="absolute left-3.5 top-7 w-5 h-5 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center timeline-dot">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>

                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 card-hover gradient-border">
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl flex-shrink-0">
                          <Terminal className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <p className="text-blue-400 text-sm mb-2 font-medium">
                            {exp.company} &middot; {exp.period}
                          </p>
                          <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Blogs ────────────────────────────────────────────────── */}
      <BlogsSection />

      {/* ── CV ───────────────────────────────────────────────────── */}
      <CVSection />

      {/* ── Contact ──────────────────────────────────────────────── */}
      <Section id="contact" icon={<Mail className="w-5 h-5" />} title="Let's Build Together">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Info */}
          <div className="reveal-left space-y-5">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Work with me</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                I'm selective about the projects I take on — I look for work where I can genuinely
                move the needle. If you're building something ambitious, I'd like to hear about it.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Phone className="w-4 h-4 text-blue-400" />, label: 'Phone', value: '+254 714 981 014', href: 'tel:+254714981014' },
                  { icon: <Mail className="w-4 h-4 text-blue-400" />, label: 'Email', value: 'ombewamaurice79@gmail.com', href: 'mailto:ombewamaurice79@gmail.com' },
                  { icon: <MapPin className="w-4 h-4 text-blue-400" />, label: 'Location', value: 'Nairobi, Kenya', href: undefined },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-500/10 rounded-xl">{icon}</div>
                    <div>
                      <p className="text-xs text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-200 hover:text-blue-400 transition-colors text-sm font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-200 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-700/50">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect</h4>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { href: 'https://github.com/MauriceOmbewa', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/maurice-ombewa-3631ab223/', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                    { href: 'https://x.com/maurice_ombewa', icon: <X className="w-4 h-4" />, label: 'X' },
                    { href: 'https://dev.to/maurice_ombewa_21d073ef7a', icon: <ExternalLink className="w-4 h-4" />, label: 'Dev.to' },
                  ].map(({ href, icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="p-2.5 rounded-xl bg-gray-700/50 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 border border-gray-600/50 hover:border-blue-500/30 transition-all duration-300">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Value-add card — confident framing */}
            <div className="bg-gradient-to-br from-blue-600/10 to-violet-600/10 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold text-white">What I bring to your team</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deep technical ownership, the ability to go from idea to working product fast, and
                a founder's eye for what actually matters. I don't just fill a seat — I raise the
                bar of what the team is capable of.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Full-time', 'Remote', 'Contract', 'Co-founder', 'Consulting'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
