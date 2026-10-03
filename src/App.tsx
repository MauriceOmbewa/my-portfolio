import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, GraduationCap, Terminal, Phone, MapPin, ExternalLink, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Section from './components/Section';
import CVSection from './components/CVSection';
import BlogsSection from './components/BlogsSection';
import ContactForm from './components/ContactForm';

function App() {
  const projects = [
    {
      title: "Sellora",
      description: "Sellora is a SaaS platform built for small and medium-sized businesses to run and grow their operations from one place. Built with a React frontend and a Python backend on PostgreSQL.",
      image: "https://serp-p.pids.gov.ph/media/featured-image/1685338051_647437c361ed2.jpeg", 
      tags: ["React", "Python", "PostgreSQL", "SaaS"],
      link: "https://github.com/MauriceOmbewa/sellora.git",
      liveDemo: "https://sellora-one-smoky.vercel.app"
    },
    {
      title: "Garisha",
      description: "Garisha is a business management platform that helps garages, car yards, car hire businesses, and dealerships manage their operations, customers, vehicles, finances, and performance analytics in one centralized platform.",
      image: "https://hinawierp.com/wp-content/uploads/2026/05/Garage-300x200-2.png.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/garisha-frontend.git",
      liveDemo: "https://garisha-frontend.vercel.app"
    },
   // {
      //title: "Kanisa Manager",
     //description: "Kanisa Manager is a church management platform covering member registration, M-Pesa payments for giving, and finance and attendance analytics dashboards. Built with Angular and TypeScript.",
     // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtRxcvmJG1B55hmPHCKurUBlycSXYZjqeo_BaEY07TrOPsm64yNqXOxg&s=10", 
     // tags: ["Angular", "TypeScript", "M-Pesa", "Analytics"],
      //link: "https://github.com/MauriceOmbewa/REPO-NAME", // TODO
      //liveDemo: "https://YOUR-DEMO-URL" // TODO
   // },
    {
      title: "WaziLearn",
      description: "WaziLearn is a learning management system localized for the Kenyan curriculum, giving learners and educators one platform to access and manage curriculum-aligned learning content. Built with an Angular frontend and a Java Spring Boot backend.",
      image: "https://learnademy.com/storage/uploads/users/1_seaq73mzj4m18ejwwqm2.jpg", 
      tags: ["Angular", "TypeScript", "Java", "Spring Boot"],
      link: "https://github.com/MauriceOmbewa/wazi.git", 
      liveDemo: "https://wazi-ten.vercel.app"
    },
    {
      title: "Zuru TV",
      description: "ZuruTV is a movie recommendation platform that allows users to discover films tailored to their interests, view detailed information about each title, and stream content directly from the platform.",
      image: "https://www.apptuts.net/wp-content/uploads/2020/09/cover-movie-download-apps.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/ZuruTv",
      liveDemo: "https://zuru-tv.vercel.app"
    },
    {
      title: "Soundra",
      description: "Soundra is a music discovery and streaming platform that helps users explore new tracks, view detailed artist and album information, and enjoy seamless music playback.",
      image: "https://devabit.com/uploads/music-app-features-cover-small-devabit.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MauriceOmbewa/Soundra",
      liveDemo: "https://soundra.vercel.app"
    },
    {
      title: "System Monitor",
      description: "A C++ desktop system monitor with a Dear ImGui interface that visualizes real-time CPU, memory, disk, fan, thermal, and network usage by reading data from the Linux /proc and /sys filesystems.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpglKbRHeEmgGEhbpc8sEcy-Cyy3dggH2jGA&s",
      tags: ["C++", "Makefile"],
      link: "https://github.com/MauriceOmbewa/system-monitor"
    },
    {
      title: "TibaTrust",
      description: "TibaTrust is a blockchain-powered healthcare platform providing affordable insurance, medical aid, and community support for underserved patients in Kenya. Built with React, TypeScript, and Firebase, featuring M-Pesa payment integration for seamless donations and insurance contributions.",
      image: "https://imgs.search.brave.com/XePZtg4kiOu0TAAS6BnQmbX5AHxMY5Kqo5EIwI3nTq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFsdGgtaW5z/dXJhbmNlLWNsaXBi/b2FyZC1zdGV0aG9z/Y29wZS1oZWFydF8z/NjMyNS0yNzY2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
      tags: ["TypeScript", "Javascript", "UI/UX", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/TibaTrust",
      liveDemo: "https://tibatrust.vercel.app"
    },
    {
      title: "Netfix",
      description: "Netfix is a web platform that connects clients with service providers across various industries such as plumbing, carpentry, and more. Companies can register and list the services they offer, making it easy for clients to find, browse, and book the services they need. The platform streamlines the process of discovering and hiring trusted professionals for a wide range of tasks.",
      image: "https://imgs.search.brave.com/-dKatE4zsJTdTtVcy0SRz62Xr21J_fizWt8tBW1uNwY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvODk1Ni84OTU2/MTI0LnBuZw",
      tags: ["Python", "Django", "Javascript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/netfix"
    },
    {
      title: "Ripple",
      description: "Ripple is a social media platform that supports creating and sharing posts, following friends, forming and joining groups, organizing and attending events, real-time chatting, and toggling account visibility between public and private.",
      image: "https://st5.depositphotos.com/3930295/62029/i/450/depositphotos_620295162-stock-photo-social-media-social-media-background.jpg",
      tags: ["Go", "Javascript", "Docker", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/ripple"
    },
    {
      title: "Groupie Trackers",
      description: "Groupie Tracker is a Go-based web app that tracks music artists, providing concert details, artist relations, and geolocation visuals, with clean architecture and API-driven data.",
      image: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_1920,c_limit/GettyImages-125112134.jpg",
      tags: ["Go", "Javascript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/visualizations-groupie-trackers"
    },
    {
      title: "interactive-qa-llm-app",
      description: "A modern full-stack web app using Google Gemini API for intelligent Q&A on international travel documentation. Features a sleek real-time chat, markdown rendering, and structured prompts for accurate passport, visa, and document guidance. Built with FastAPI and Next.js, with async processing, robust error handling, and cross-platform support.",
      image: "https://imgs.search.brave.com/31PYqNtwL8zu6COpLxYqBe95g38_lDuhK0afaXj0BQU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NDY3NTkxNS9waG90/by9xLWFuZC1hLWFu/LWFiYnJldmlhdGlv/bi1vbi1zbWFydC1i/YWNrZ3JvdW5kLWNo/YXRib3QtdGVjaG5v/bG9neS1jb25jZXB0/LWFydGlmaWNpYWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU1vODNKS29uLUda/Wk10T0E1VUtSd2hy/cENyWV9uY19mY1F6/d01VaFFtcW89",
      tags: ["Next.js", "React", "Python", "Javascript", "HTML", "CSS"],
      link: "https://github.com/MauriceOmbewa/interactive-qa-llm-app"
    },
    // {
    //   title: "Ripple",
    //   description: "Ripple is a social media platform that supports creating and sharing posts, following friends, forming and joining groups, organizing and attending events, real-time chatting, and toggling account visibility between public and private.",
    //   image: "https://st5.depositphotos.com/3930295/62029/i/450/depositphotos_620295162-stock-photo-social-media-social-media-background.jpg",
    //   tags: ["Go", "Javascript", "Docker", "HTML", "CSS"],
    //   link: "https://github.com/MauriceOmbewa/ripple"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
              <img
                // src="https://learn.zone01kisumu.ke/git/avatars/495e06ea69c29cee1df656696956ba25?size=870"
                src = "https://avatars.githubusercontent.com/u/124437425?v=4"
                alt="Maurice Ombewa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Maurice Ombewa
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full-Stack Developer | Software Developer | Problem Solver
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <a href="https://github.com/MauriceOmbewa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/maurice-ombewa-3631ab223/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="mailto:ombewamaurice79@gmail.com" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" icon={<User />} title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {/* <p className="text-gray-300 leading-relaxed text-lg">
              Maurice Ombewa is a seasoned Full-Stack Developer with two years of hands-on experience designing, building, and customizing scalable systems for diverse organizational needs. He specializes in developing solutions ranging from Enterprise Resource Planning (ERP) systems to Information Management Systems (IMS), leveraging technologies such as Go, C, JavaScript, SQL, and Ruby on Rails. Maurice holds a Bachelor’s degree in Information Technology, which has equipped him with a strong foundation in software development, database management, and systems design.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              He has delivered impactful projects, including Shamba Share, a blockchain-powered land leasing platform that securely records transactions to prevent double leasing, and a fully customized ERP solution built on Odoo for a private client. These solutions demonstrate his ability to combine technical expertise with innovative problem-solving, ensuring systems are efficient, reliable, and tailored to client needs.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently, Maurice serves as a Full-Stack Developer at Zone01 Kisumu, where he develops systems from the ground up and enhances existing solutions to meet unique client requirements. Collaborative by nature, he often works with peers to create high-performance applications, demonstrating expertise in backend architecture, frontend development, database management, and system optimization. He thrives in agile environments, adapting quickly to changing requirements and ensuring continuous delivery of high-quality software solutions.
            </p> */}
            <p className="text-gray-300 leading-relaxed text-lg">
              Maurice Ombewa is a Software Engineer with over two years of hands-on experience building and maintaining full-stack web applications and REST APIs. He works across Python (FastAPI), JavaScript/TypeScript (React, Angular), Java (Spring Boot) and Go, with PostgreSQL, MySQL and Redis for data, and uses Git, Docker and CI/CD pipelines in agile team workflows. Maurice holds a Bachelor of Science in Information Technology from KCA University, which gave him a strong foundation in software development, database management and systems design. Beyond his jobs, he has built several products end to end, including WaziLearn, a learning platform for the Kenyan curriculum; Sellora, a SaaS platform for small and medium-sized businesses; Garisha, a multi-branch business management platform; and Kanisa Manager, a church management system with M-Pesa payments.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently, he is a Software Engineer at Softkit Limited, where he builds full-stack features with React, Angular and FastAPI, develops reusable UI components, and improves backend performance with Redis caching and background workers. Previously at Zone01 Kisumu, he developed secure REST APIs, optimized database queries, containerized applications with Docker and integrated AI-powered features into existing products. Collaborative by nature, Maurice values code reviews and feedback, and he learns new stacks quickly, adapting to changing requirements while delivering reliable, high-quality software.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillBadge title="React.js" level={90} />
            <SkillBadge title="Angular" level={95} />
            <SkillBadge title="Next.js" level={80} />
            <SkillBadge title="JavaScript" level={85} />
            <SkillBadge title="TypeScript" level={85} />
            <SkillBadge title="UI/UX" level={85} />
            <SkillBadge title="Python/Django" level={80} />
            <SkillBadge title="Node.js" level={75} />
            <SkillBadge title="PostgreSQL" level={80} />
            <SkillBadge title="HTML/CSS" level={90} />
            <SkillBadge title="Git/GitHub" level={85} />
            <SkillBadge title="Docker" level={70} />
            <SkillBadge title="AWS/Azure" level={65} />
            <SkillBadge title="MongoDB" level={75} />
            <SkillBadge title="Go" level={85} />
            <SkillBadge title="RESTful APIs" level={85} />
            <SkillBadge title="GraphQL" level={70} />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" icon={<Code2 />} title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" icon={<GraduationCap />} title="Education">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
                <p className="text-blue-400 mb-2">KCA University • 2020 - 2024</p>
                <p className="text-gray-300">
                  Completed a comprehensive 4-year program focusing on software development, database management, and system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div><br /></div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Development</h3>
                <p className="text-blue-400 mb-2">Power Learn Project(PLP) • April 2022 - December 2022</p>
                <p className="text-gray-300">
                Completed an intensive software development program covering programming fundamentals, web and mobile app development, databases, and software engineering best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" icon={<Briefcase />} title="Experience">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-blue-400 mb-2">Softkit Limited • September 2025 - Present</p>
                <p className="text-gray-300">
                  Building full-stack features across the frontend (React, Angular, TypeScript) and backend (Python, FastAPI) of production web applications. Developing reusable UI components and improving responsiveness and usability. Applying Redis caching and performance optimization techniques, implementing background workers and asynchronous task processing, and taking part in debugging, testing and peer code reviews in an agile team using Git, Docker and Linux.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-blue-400 mb-2">Zone01 Kisumu • January 2024 - August 2025</p>
                <p className="text-gray-300">
                  Developed and maintained secure REST APIs with Python and FastAPI, and built responsive frontends with React, JavaScript, TypeScript, HTML and CSS. Designed and optimized PostgreSQL and MySQL databases and queries, implemented asynchronous workflows and background tasks, and containerized applications with Docker for deployment on Linux servers with CI/CD pipelines. Integrated AI-powered features into existing products, resolved production issues, and collaborated with product and engineering teams through Git workflows and code reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="text-blue-400 mb-2">Vuna • May 2025 - July 2025</p>
                <p className="text-gray-300">
                  Developed and customized ERP systems to meet client-specific needs, with a focus on the Odoo and Fleetbase platforms. Configured modules, workflows and integrations to optimize business processes and operational efficiency. Collaborated with clients to gather requirements, implemented tailored solutions and provided technical support to ensure smooth adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blogs Section */}
      <BlogsSection />

      {/* CV Section */}
      <CVSection />

      {/* Contact Section */}
      <Section id="contact" icon={<Mail />} title="Get in Touch">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+254714981014" className="text-white hover:text-blue-400 transition-colors">
                      +254 714 981 014
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:ombewamaurice79@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      ombewamaurice79@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MauriceOmbewa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg transition-colors group"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maurice-ombewa-3631ab223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="https://x.com/maurice_ombewa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg transition-colors group"
                  >
                    <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a
                    href="https://dev.to/maurice_ombewa_21d073ef7a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;