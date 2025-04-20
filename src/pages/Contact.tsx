import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Contact background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Get in touch with NASA Nepal for inquiries, partnerships, or to join our community.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader 
                title="Get In Touch"
                subtitle="We'd love to hear from you"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-800 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      NASA Nepal Headquarters<br />
                      New Baneshwor, Kathmandu<br />
                      Nepal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@nasanepal.org.np" className="text-primary-600 hover:text-primary-700 transition-colors">info@nasanepal.org.np</a><br />
                      Education Programs: <a href="mailto:education@nasanepal.org.np" className="text-primary-600 hover:text-primary-700 transition-colors">education@nasanepal.org.np</a><br />
                      Research Collaboration: <a href="mailto:research@nasanepal.org.np" className="text-primary-600 hover:text-primary-700 transition-colors">research@nasanepal.org.np</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Office: +977 01-4444444<br />
                      Education Department: +977 01-4444445<br />
                      Research Department: +977 01-4444446
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: Closed<br />
                      Public Holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-bold text-dark-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="bg-[#FF0000] text-white p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                  <a href="#" className="bg-[#E4405F] text-white p-3 rounded-full hover:bg-opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your Full Name" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your Email Address" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Message Subject" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    placeholder="Your Message" 
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.574696120832!2d85.3351!3d27.6956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a32d77e28d%3A0x3b99a2e0b6df5b51!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1715289452244!5m2!1sen!2snp" 
                className="w-full h-[500px] rounded-lg"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                title="NASA Nepal Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Common questions about NASA Nepal and our programs"
            center={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-dark-800 mb-2">Is NASA Nepal affiliated with NASA (National Aeronautics and Space Administration)?</h3>
                <p className="text-gray-600">
                  No, NASA Nepal is an independent non-profit organization dedicated to astronomy and space science in Nepal. While we collaborate with international space agencies on specific projects, we are not formally affiliated with NASA.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-dark-800 mb-2">How can I become a member of NASA Nepal?</h3>
                <p className="text-gray-600">
                  We offer various membership categories including student, regular, and institutional memberships. You can apply online through our website or visit our office to complete a membership application. Membership benefits include access to our facilities, resources, events, and research opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-dark-800 mb-2">Do you organize public stargazing events?</h3>
                <p className="text-gray-600">
                  Yes, we regularly organize public stargazing events in different locations across Nepal. These events are announced on our website and social media channels. Some events are free while others may have a nominal fee to cover operational costs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-dark-800 mb-2">How can my school participate in your educational programs?</h3>
                <p className="text-gray-600">
                  Schools can request astronomy workshops, telescope demonstrations, or educational materials by contacting our Education Department. We also run the School Astronomy Program that provides more comprehensive support including teacher training, curriculum resources, and ongoing activities throughout the academic year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-dark-800 mb-2">Do you offer internships or research opportunities for students?</h3>
                <p className="text-gray-600">
                  Yes, we offer internships and research opportunities for undergraduate and graduate students interested in astronomy, astrophysics, and related fields. Applications are typically accepted twice a year, and details can be found on our website under the "Opportunities" section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;