import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';

const Programs: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5465057/pexels-photo-5465057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Space research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Discover our various initiatives in research, education, and community engagement.
            </p>
          </div>
        </div>
      </div>
      
      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Programs Overview"
            subtitle="NASA Nepal operates across three main program areas to fulfill its mission"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary-600">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Research</h3>
              <p className="text-gray-600 mb-4">
                Our research programs focus on astronomical observations, climate monitoring using satellite data, and developing appropriate technologies for space science in Nepal's context.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Himalayan Sky Observation Network</li>
                <li>Satellite Data Analysis</li>
                <li>Appropriate Technology Development</li>
                <li>Collaborative International Research</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary-600">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Education</h3>
              <p className="text-gray-600 mb-4">
                Our education programs aim to enhance astronomy and space science education at all levels, from schools to universities, and provide professional development for educators.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>School Astronomy Program</li>
                <li>Teacher Training Workshops</li>
                <li>Curriculum Development</li>
                <li>National Astronomy Olympiad</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-accent-600">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Public Outreach</h3>
              <p className="text-gray-600 mb-4">
                Our outreach programs engage the public through events, observations, and multimedia content to promote scientific literacy and inspire interest in space.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Public Observation Events</li>
                <li>Astronomy Talks and Exhibitions</li>
                <li>Digital Content and Publications</li>
                <li>World Space Week Celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Projects"
            subtitle="Explore our active projects across different program areas"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Impact"
            subtitle="How our programs are making a difference"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Education impact" 
                className="rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Educational Impact</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Reached over 10,000 students across Nepal through our School Astronomy Program</li>
                <li>Trained more than 500 science teachers in astronomy education</li>
                <li>Developed supplementary astronomy curriculum materials for grades 8-12</li>
                <li>Provided mentorship to 50+ university students pursuing careers in space science and related fields</li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research impact" 
                className="rounded-lg shadow-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Research Impact</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Published 30+ research papers in international journals</li>
                <li>Established the first comprehensive database of Himalayan night sky quality measurements</li>
                <li>Contributed to 3 international collaborative research projects on climate monitoring using satellite data</li>
                <li>Developed low-cost astronomical equipment designs adapted for use in resource-limited settings</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600">
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Public Engagement Impact</h3>
              <p className="text-gray-600 mb-6">
                Our public outreach programs have successfully brought astronomy and space science to a wide audience across Nepal:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25,000+</div>
                  <div className="text-gray-700">People have attended our public observation events</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">120+</div>
                  <div className="text-gray-700">Public lectures and workshops delivered across the country</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15</div>
                  <div className="text-gray-700">Districts reached through our mobile astronomy outreach program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved in Our Programs</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            There are many ways to participate in and contribute to our programs, whether you're a student, educator, researcher, or space enthusiast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-white/80">Help with events, outreach, and program delivery</p>
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Partner</h3>
              <p className="text-white/80">Collaborate with us as an organization or institution</p>
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Donate</h3>
              <p className="text-white/80">Support our programs through financial contributions</p>
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Join</h3>
              <p className="text-white/80">Become a member and participate actively</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;