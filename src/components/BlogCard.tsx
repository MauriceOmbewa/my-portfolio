import React from 'react';
import { ExternalLink, Calendar, BookOpen, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  url,
  publishedDate,
  readTime,
  tags,
  image,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 card-hover gradient-border"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {publishedDate}
          </span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
          Read Article
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
