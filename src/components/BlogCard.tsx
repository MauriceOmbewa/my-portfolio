import React from 'react';
import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

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
  image
}) => {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{publishedDate}</span>
          <span>•</span>
          <BookOpen className="w-4 h-4" />
          <span>{readTime}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Read Article
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
