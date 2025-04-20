import React from 'react';
import { NewsItem } from '../../types';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transform transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{news.date}</span>
        </div>
        <h3 className="text-xl font-bold text-dark-800 mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-4">{news.excerpt}</p>
        <a 
          href="#" 
          className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;