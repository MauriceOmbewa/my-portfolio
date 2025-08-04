import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, GraduationCap, Terminal } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Section from './components/Section';
import CVSection from './components/CVSection';
import BlogsSection from './components/BlogsSection';

function App() {
  const projects = [
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
                src="https://learn.zone01kisumu.ke/git/avatars/495e06ea69c29cee1df656696956ba25?size=870"
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
              Maurice Ombewa is a seasoned Full-Stack Developer with two years of hands-on experience designing, building, and customizing scalable systems for diverse organizational needs. He specializes in developing solutions ranging from Enterprise Resource Planning (ERP) systems to Information Management Systems (IMS), leveraging technologies such as Go, C, python, django, react, JavaScript, SQL, and Ruby on Rails. Maurice holds a Bachelor’s degree in Information Technology, which has equipped him with a strong foundation in software development, database management, and systems design. He has delivered impactful projects, including Shamba Share, a blockchain-powered land leasing platform that securely records transactions to prevent double leasing, and a fully customized ERP solution built on Odoo for a private client.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently, he serves as a Full-Stack Developer at Zone01 Kisumu, where he develops systems from the ground up and enhances existing solutions to meet unique client requirements. Collaborative by nature, Maurice often works with peers to create innovative, high-performance applications, demonstrating expertise in backend architecture, frontend development, database management, and system optimization. He thrives in agile environments, adapting quickly to changing requirements and ensuring continuous delivery of high-quality software solutions.
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
            <SkillBadge title="JavaScript" level={85} />
            <SkillBadge title="Python/Django" level={80} />
            <SkillBadge title="Node.js" level={75} />
            <SkillBadge title="PostgreSQL" level={80} />
            <SkillBadge title="HTML/CSS" level={90} />
            <SkillBadge title="Git/GitHub" level={85} />
            <SkillBadge title="Docker" level={70} />
            <SkillBadge title="AWS/Azure" level={65} />
            <SkillBadge title="MongoDB" level={75} />
            <SkillBadge title="Go" level={80} />
            <SkillBadge title="RESTful APIs" level={85} />
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
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="text-blue-400 mb-2">Zone01 Kisumu • January 2024 - Present</p>
                <p className="text-gray-300">
                  Building responsive user interfaces using React.js, JavaScript, HTML and CSS, improving overall usability and design consistency. Integrating RESTful APIs into React components, enhancing data flow and UI responsiveness. Collaborating with peers in an Agile environment, delivering features iteratively and maintaining clear technical documentation.
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
                  Developing and customizing ERP systems to meet client-specific needs, with a focus on Odoo and Fleetbase platforms. Configuring modules, workflows, and integrations to optimize business processes and operational efficiency. Collaborating with clients to gather requirements, implement tailored solutions, and provide ongoing technical support, ensuring seamless adoption and functionality.
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
        <div className="max-w-xl mx-auto">
          <form className="space-y-4 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;