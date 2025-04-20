import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TeamCard from '../components/common/TeamCard';
import { teamMembers } from '../data/team';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Space background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About NASA Nepal</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Dedicated to advancing astronomy and space science in Nepal through research, education, and public outreach.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission and Vision */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Our Mission"
                subtitle="What drives us forward"
              />
              <p className="text-gray-600 mb-6">
                NASA Nepal is committed to advancing astronomy and space science in Nepal by conducting research, providing quality education, and promoting public awareness about space and related sciences.
              </p>
              <p className="text-gray-600">
                We aim to inspire the next generation of Nepali scientists and engineers, establish world-class research facilities in Nepal, and contribute to the global scientific community through research and collaboration.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/41952/neil-armstrong-apollo-11-nasa-astronaut-41952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Space Exploration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/73909/rocket-launch-space-travel-nasa-73909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Space Launch" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <SectionHeader 
                title="Our Vision"
                subtitle="What we aspire to achieve"
              />
              <p className="text-gray-600 mb-6">
                Our vision is to establish Nepal as a hub for astronomical research and space science education in the Himalayan region.
              </p>
              <p className="text-gray-600">
                We envision a future where Nepal actively participates in international space science research, has dedicated observatories and research facilities, and where scientific literacy is widespread among the general public.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our History"
            subtitle="The journey of NASA Nepal from its inception to present day"
            center={true}
          />
          
          <div className="mt-12 space-y-12">
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                <div className="text-center">
                  <span className="inline-block bg-primary-600 text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">2010</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">Foundation</h3>
                <p className="text-gray-600">
                  NASA Nepal was established by a group of passionate astronomers and educators with the goal of promoting astronomy and space science in Nepal.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                <div className="text-center">
                  <span className="inline-block bg-primary-600 text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">2015</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">First Observatory</h3>
                <p className="text-gray-600">
                  Established our first observatory in Nagarkot, equipped with a 12-inch telescope for research and public outreach activities.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                <div className="text-center">
                  <span className="inline-block bg-primary-600 text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">2018</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">International Recognition</h3>
                <p className="text-gray-600">
                  Became a member of the International Astronomical Union, expanding our network and opportunities for international collaboration.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                <div className="text-center">
                  <span className="inline-block bg-primary-600 text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">2022</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">Expansion of Programs</h3>
                <p className="text-gray-600">
                  Launched several new initiatives including the School Astronomy Program, the Himalayan Astronomy Research Network, and the Annual Astronomy Conference.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                <div className="text-center">
                  <span className="inline-block bg-primary-600 text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center">2025</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-dark-800 mb-2">Present Day</h3>
                <p className="text-gray-600">
                  Today, NASA Nepal continues to grow with over 500 members, multiple research programs, and a nationwide network of educators and enthusiasts dedicated to advancing space science in Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Team"
            subtitle="Meet the dedicated professionals behind NASA Nepal"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Are you passionate about astronomy and space science? We're always looking for dedicated individuals to join our team as researchers, educators, or volunteers.
          </p>
          <div className="space-x-4">
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              View Opportunities
            </a>
            <a 
              href="#" 
              className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;