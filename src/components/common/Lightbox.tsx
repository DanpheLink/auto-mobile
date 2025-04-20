import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  current: GalleryItem | null;
  items: GalleryItem[];
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, current, items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (current) {
      const currentIndex = items.findIndex(item => item.id === current.id);
      setIndex(currentIndex >= 0 ? currentIndex : 0);
    }
  }, [current, items]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isOpen, index]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !current) return null;

  const next = () => {
    setIndex((index + 1) % items.length);
  };

  const prev = () => {
    setIndex((index - 1 + items.length) % items.length);
  };

  const currentItem = items[index];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="p-2 text-white bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button 
          onClick={prev}
          className="p-3 text-white bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button 
          onClick={next}
          className="p-3 text-white bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="relative max-w-6xl max-h-full p-4">
        <img 
          src={currentItem.image} 
          alt={currentItem.title} 
          className="max-w-full max-h-[80vh] object-contain"
        />
        
        <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-2">{currentItem.category}</span>
            <h3 className="text-white text-xl font-bold">{currentItem.title}</h3>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {items.map((_, i) => (
            <button 
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-500'}`}
              aria-label={`Go to image ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;