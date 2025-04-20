import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import PublicationCard from '../components/common/PublicationCard';
import { publications } from '../data/publications';

const Publications: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Publications background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Publications</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Research papers, educational resources, and other publications from NASA Nepal.
            </p>
          </div>
        </div>
      </div>
      
      {/* Research Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Research Publications"
            subtitle="Our contributions to astronomy and space science research"
          />
          
          <div className="space-y-6 mt-12">
            {publications.map(publication => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Educational Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Educational Resources"
            subtitle="Free materials for teaching and learning astronomy and space science"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-50 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Astronomy Curriculum" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">Basic Astronomy Curriculum</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive curriculum for teaching basic astronomy concepts to students in grades 8-10.
              </p>
              <a 
                href="#" 
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Download (PDF)
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-50 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Solar System Guide" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">Solar System Guide</h3>
              <p className="text-gray-600 mb-4">
                An illustrated guide to the solar system with facts, diagrams, and activities for students.
              </p>
              <a 
                href="#" 
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Download (PDF)
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-primary-50 flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Stargazing Handbook" 
                  className="max-h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">Stargazing Handbook</h3>
              <p className="text-gray-600 mb-4">
                A practical guide to stargazing in Nepal with star charts, seasonal viewing guides, and tips.
              </p>
              <a 
                href="#" 
                className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Download (PDF)
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              View All Educational Resources
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Newsletters"
            subtitle="Our monthly newsletters covering recent activities and astronomical events"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-800 mb-2">April 2025</h3>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>International Conference Recap</li>
                  <li>Upcoming Solar Eclipse</li>
                  <li>New Research Publication</li>
                  <li>School Outreach Program Updates</li>
                </ul>
                <a 
                  href="#" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read Newsletter
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-800 mb-2">March 2025</h3>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>New Telescope Installation</li>
                  <li>Science Teacher Workshop Highlights</li>
                  <li>Astronomy Photo Contest Winners</li>
                  <li>Upcoming Events</li>
                </ul>
                <a 
                  href="#" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read Newsletter
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-800 mb-2">February 2025</h3>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>Asteroid Discovery Announcement</li>
                  <li>Public Lecture Series Schedule</li>
                  <li>New Educational Resources</li>
                  <li>Member Spotlight</li>
                </ul>
                <a 
                  href="#" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read Newsletter
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-4 bg-primary-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-dark-800 mb-2">January 2025</h3>
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                  <li>2025 Program Announcements</li>
                  <li>Annual Report Release</li>
                  <li>Research Grant Opportunities</li>
                  <li>Winter Sky Viewing Guide</li>
                </ul>
                <a 
                  href="#" 
                  className="text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read Newsletter
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              Newsletter Archive
            </a>
          </div>
        </div>
      </section>
      
      {/* Journal Access */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Journal Access for Members</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NASA Nepal members have access to a variety of international astronomy and space science journals through our partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Astronomy &amp; Astrophysics</h3>
              <p className="text-sm text-gray-300">Journal access available for members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">The Astrophysical Journal</h3>
              <p className="text-sm text-gray-300">Journal access available for members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Monthly Notices of the Royal Astronomical Society</h3>
              <p className="text-sm text-gray-300">Journal access available for members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Space Science Reviews</h3>
              <p className="text-sm text-gray-300">Journal access available for members</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block bg-white text-primary-800 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;