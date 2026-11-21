import React from 'react';
import { PenTool, ArrowRight } from 'lucide-react';
import Section from './Section';
import BlogCard from './BlogCard';

const BlogsSection: React.FC = () => {
  const blogs = [
    {
      title: "How to Use localStorage, sessionStorage, and Cookies in JavaScript",
      description: "A comprehensive guide to understanding and implementing client-side storage solutions in JavaScript. Learn the differences between localStorage, sessionStorage, and cookies, their use cases, and best practices for data persistence in web applications.",
      url: "https://dev.to/maurice_ombewa_21d073ef7a/how-to-use-localstorage-sessionstorage-and-cookies-in-javascript-67m",
      publishedDate: "Dec 2024",
      readTime: "8 min read",
      tags: ["JavaScript", "Web Dev", "Storage", "Frontend"],
      image: "https://imgs.search.brave.com/ZzSMFH2WEZahA9j9EfPelOYYN5fTHkltyI3vbRnd0kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8zand5emVi/ay9wcm9kdWN0aW9u/LzgyMWVlN2NjZDRh/YWZkNDM2ZTcwZTBj/ZTcyNzUzOTU0M2Vh/MWIzMjgtNjMzNngz/OTUyLnBuZz9hdXRv/PWZvcm1hdCZmaXQ9/bWF4Jnc9Mzg0MCZx/PTc1"
    },
    {
      title: "Using Odoo as a Backend: Module Setup, API Access, and cURL Commands",
      description: "Explore how to leverage Odoo as a powerful backend solution for your applications. This guide covers module setup, API configuration, authentication, and practical cURL command examples for seamless integration.",
      url: "https://dev.to/maurice_ombewa_21d073ef7a/using-odoo-as-a-backend-module-setup-api-access-and-curl-commands-1dia",
      publishedDate: "June 2025",
      readTime: "12 min read",
      tags: ["Odoo", "Backend", "API", "Python", "ERP"],
      image: "https://imgs.search.brave.com/uyBcnTTsL25eiNJ_ettU92I_-mkunX5Bvj17nRQZizM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZGxj/Y29ycC13ZWItcHJv/ZC5ibHIxLmRpZ2l0/YWxvY2VhbnNwYWNl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvMTEx/NTI4NDgvVW50aXRs/ZWQtZGVzaWduLTE5/LTEucG5n"
    },
    {
      title: "How to Create a Simple Chatbot with Python and the NLTK Library",
      description: "A practical walkthrough for building a rule-based chatbot using Python and NLTK. Covers tokenization, intent matching, and response generation — perfect for anyone getting started with NLP and conversational AI.",
      url: "https://dev.to/maurice_ombewa_21d073ef7a/understanding-websockets-a-beginner-friendly-guide-3488",
      publishedDate: "Aug 2025",
      readTime: "10 min read",
      tags: ["Python", "NLP", "Chatbot", "NLTK"],
      image: "https://imgs.search.brave.com/OiAV5K7e8XudG8JqIijp8ODyBvEFK4IZ1sM9kEelDX0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzIzLzg1LzIx/LzM2MF9GXzEzMjM4/NTIxNzdfRXZVWW1I/NlBKbWZPZ3JMd1ky/MHB6enVBeUo1WHhn/cEguanBn"
    }
  ];

  return (
    <Section id="blogs" icon={<PenTool />} title="Latest Articles">
      <div className="max-w-2xl mx-auto text-center mb-10 reveal">
        <p className="text-gray-400 leading-relaxed">
          I share what I learn — practical articles on web development, backend systems,
          and software engineering patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
        {blogs.map((blog) => (
          <div key={blog.url} className="reveal">
            <BlogCard {...blog} />
          </div>
        ))}
      </div>

      <div className="text-center mt-10 reveal">
        <a
          href="https://dev.to/maurice_ombewa_21d073ef7a"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/70"
        >
          <PenTool className="w-4 h-4" />
          View all on Dev.to
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
};

export default BlogsSection;
