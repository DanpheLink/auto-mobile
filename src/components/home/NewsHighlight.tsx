import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import NewsCard from '../common/NewsCard';
import EventCard from '../common/EventCard';
import { newsItems } from '../../data/news';
import { upcomingEvents } from '../../data/news';

const NewsHighlight: React.FC = () => {
  // Get the latest news items for the homepage
  const latestNews = newsItems.slice(0, 2);
  const nextEvent = upcomingEvents[0];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="News & Events"
          subtitle="Stay updated with our latest news and upcoming events"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Latest News</h3>
            <div className="space-y-8">
              {latestNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Upcoming Event</h3>
            <EventCard event={nextEvent} />
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">Join Our Community</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  Become a member of NASA Nepal and join a community of space enthusiasts, researchers, and educators.
                </p>
                <div className="flex space-x-4">
                  <Link 
                    to="/membership" 
                    className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Become a Member
                  </Link>
                  <Link 
                    to="/volunteer" 
                    className="inline-block px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
                  >
                    Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/news" 
            className="inline-block mr-4 px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            All News
          </Link>
          <Link 
            to="/events" 
            className="inline-block px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
          >
            All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlight;