import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import NewsCard from '../components/common/NewsCard';
import EventCard from '../components/common/EventCard';
import { newsItems, upcomingEvents } from '../data/news';

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="News background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">News & Events</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Stay updated with the latest news and upcoming events from NASA Nepal.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <button 
              className={`py-4 px-6 font-medium border-b-2 ${
                activeTab === 'news' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('news')}
            >
              News
            </button>
            <button 
              className={`py-4 px-6 font-medium border-b-2 ${
                activeTab === 'events' 
                  ? 'border-primary-600 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </div>
        </div>
      </div>
      
      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Latest News"
              subtitle="Stay updated with recent developments at NASA Nepal"
            />
            
            {/* Featured News */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-96 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Featured News" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-sm text-gray-500 mb-2">April 15, 2025</div>
                  <h2 className="text-2xl font-bold text-dark-800 mb-4">NASA Nepal Successfully Hosts International Astronomy Conference</h2>
                  <p className="text-gray-600 mb-6">
                    Over 200 scientists from 15 countries participated in the three-day conference on "Astronomy and Space Science in the Himalayan Region". The conference included keynote speeches, research presentations, and workshops on various aspects of astronomy and space science. Several collaborative research projects were initiated during the conference.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Read Full Story
                  </a>
                </div>
              </div>
            </div>
            
            {/* All News */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-l-md">
                  Previous
                </a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  1
                </a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-primary-50 text-primary-600 font-medium">
                  2
                </a>
                <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-r-md">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </section>
      )}
      
      {/* Events Section */}
      {activeTab === 'events' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Upcoming Events"
              subtitle="Join us for these exciting astronomy and space science events"
            />
            
            {/* Featured Event */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white rounded-lg shadow-lg overflow-hidden mt-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                  <span className="inline-block bg-white text-primary-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Featured Event
                  </span>
                  <h2 className="text-2xl font-bold mb-4">World Space Week Celebration</h2>
                  <div className="flex items-center mb-2">
                    <span className="font-medium">Date:</span>
                    <span className="ml-2">October 4-10, 2025</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">Various locations across Nepal</span>
                  </div>
                  <p className="mb-6">
                    Join us for a week-long celebration of space exploration with exhibitions, lectures, stargazing events, and activities for children and adults of all ages.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="inline-block bg-white text-primary-800 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Event Details
                    </a>
                    <a 
                      href="#" 
                      className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded-md hover:bg-white/10 transition-colors"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
                <div className="h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <img 
                    src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Featured Event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Event Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-12">
              <h3 className="text-xl font-bold text-dark-800 mb-4">Event Calendar</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Event</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Location</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">May 12, 2025</td>
                      <td className="py-3 px-4 text-sm text-gray-800 font-medium">Public Lecture: Latest from Mars Rover</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Nepal Academy Hall, Kathmandu</td>
                      <td className="py-3 px-4 text-sm">
                        <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">Register</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">June 15-20, 2025</td>
                      <td className="py-3 px-4 text-sm text-gray-800 font-medium">Summer Astronomy Workshop for Teachers</td>
                      <td className="py-3 px-4 text-sm text-gray-600">NASA Nepal Headquarters, Kathmandu</td>
                      <td className="py-3 px-4 text-sm">
                        <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">Apply</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">July 8, 2025</td>
                      <td className="py-3 px-4 text-sm text-gray-800 font-medium">Lunar Eclipse Observation Night</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Nagarkot Observatory</td>
                      <td className="py-3 px-4 text-sm">
                        <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">Register</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">August 12, 2025</td>
                      <td className="py-3 px-4 text-sm text-gray-800 font-medium">Perseid Meteor Shower Observation</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Shivapuri National Park</td>
                      <td className="py-3 px-4 text-sm">
                        <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">Coming Soon</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-600">October 4-10, 2025</td>
                      <td className="py-3 px-4 text-sm text-gray-800 font-medium">World Space Week Celebration</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Various locations across Nepal</td>
                      <td className="py-3 px-4 text-sm">
                        <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">Details</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* All Upcoming Events */}
            <h3 className="text-2xl font-bold text-dark-800 mb-6">All Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest news, events, and announcements from NASA Nepal. We send out a monthly newsletter with all the important information.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button 
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy and will never share your email address with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;