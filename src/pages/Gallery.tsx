import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import GalleryCard from '../components/common/GalleryCard';
import Lightbox from '../components/common/Lightbox';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);
  
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-dark-800 text-white py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Gallery background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-800/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
            <div className="h-1 w-24 bg-primary-600 mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300">
              Explore our collection of photos from various events, observations, and activities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Gallery"
            subtitle="Capturing the cosmos and our journey exploring it"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                onImageClick={openLightbox} 
              />
            ))}
          </div>
          
          <Lightbox 
            isOpen={lightboxOpen} 
            onClose={closeLightbox} 
            current={currentImage} 
            items={filteredItems} 
          />
        </div>
      </section>
      
      {/* Submit Photos CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-dark-800 mb-4">Share Your Photos With Us</h2>
                <p className="text-gray-600 mb-6">
                  Do you have amazing photos of astronomical events, NASA Nepal activities, or space-related content? Share them with us for a chance to be featured in our gallery!
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors w-fit"
                >
                  Submit Your Photos
                </a>
              </div>
              <div className="bg-primary-800 p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Photo Submission Guidelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-white text-primary-800 rounded-full flex-shrink-0 font-bold flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>Photos must be related to astronomy, space science, or NASA Nepal activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-white text-primary-800 rounded-full flex-shrink-0 font-bold flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>High-resolution images preferred (minimum 1920x1080 pixels)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-white text-primary-800 rounded-full flex-shrink-0 font-bold flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Include your name, location, and a brief description of the photo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-white text-primary-800 rounded-full flex-shrink-0 font-bold flex items-center justify-center mr-3 mt-0.5">4</span>
                    <span>By submitting, you grant NASA Nepal permission to use your photos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;