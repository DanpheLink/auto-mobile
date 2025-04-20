import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-800 to-secondary-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Space exploration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-secondary-800/90"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 py-16 px-8 md:px-16 lg:px-24 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission to Explore the Universe</h2>
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                    NASA Nepal offers various opportunities for students, researchers, and space enthusiasts to participate in our programs, access resources, and contribute to our mission.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/membership" 
                      className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Become a Member
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link 
                      to="/donate" 
                      className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                    >
                      Support Our Work
                    </Link>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={3}
                          className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;