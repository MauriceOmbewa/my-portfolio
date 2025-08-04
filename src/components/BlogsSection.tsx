import React from 'react';
import { PenTool } from 'lucide-react';
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
      tags: ["JavaScript", "Web Development", "Storage", "Frontend"],
      image: "https://imgs.search.brave.com/ZzSMFH2WEZahA9j9EfPelOYYN5fTHkltyI3vbRnd0kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8zand5emVi/ay9wcm9kdWN0aW9u/LzgyMWVlN2NjZDRh/YWZkNDM2ZTcwZTBj/ZTcyNzUzOTU0M2Vh/MWIzMjgtNjMzNngz/OTUyLnBuZz9hdXRv/PWZvcm1hdCZmaXQ9/bWF4Jnc9Mzg0MCZx/PTc1"
    },
    {
      title: "Using Odoo as a Backend: Module Setup, API Access, and cURL Commands",
      description: "Explore how to leverage Odoo as a powerful backend solution for your applications. This guide covers module setup, API configuration, authentication, and practical cURL command examples for seamless integration with Odoo's REST API.",
      url: "https://dev.to/maurice_ombewa_21d073ef7a/using-odoo-as-a-backend-module-setup-api-access-and-curl-commands-1dia",
      publishedDate: "June 2025",
      readTime: "12 min read",
      tags: ["Odoo", "Backend", "API", "Python", "ERP"],
      image: "https://imgs.search.brave.com/uyBcnTTsL25eiNJ_ettU92I_-mkunX5Bvj17nRQZizM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZGxj/Y29ycC13ZWItcHJv/ZC5ibHIxLmRpZ2l0/YWxvY2VhbnNwYWNl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMTAvMTEx/NTI4NDgvVW50aXRs/ZWQtZGVzaWduLTE5/LTEucG5n"
    }
  ];

  return (
    <Section id="blogs" icon={<PenTool />} title="Latest Blog Posts">
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gray-300 leading-relaxed">
            I enjoy sharing my knowledge and experiences through technical writing. 
            Here are some of my recent articles covering web development, backend technologies, 
            and practical programming solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.url} {...blog} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://dev.to/maurice_ombewa_21d073ef7a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-700/50 hover:bg-gray-600/70 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-gray-500/70"
          >
            <PenTool className="w-5 h-5 mr-2" />
            View All Articles on Dev.to
          </a>
        </div>
      </div>
    </Section>
  );
};

export default BlogsSection;
