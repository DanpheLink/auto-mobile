import React, { useState } from 'react';
import { GalleryItem } from '../../types';
import { ZoomIn } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  onImageClick: (item: GalleryItem) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick(item)}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-dark-800 bg-opacity-50 transition-opacity duration-300 flex flex-col justify-end p-4 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary-600 text-white p-3 rounded-full">
            <ZoomIn size={24} />
          </div>
        </div>
        <div>
          <span className="inline-block bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
            {item.category}
          </span>
          <h3 className="text-white font-bold">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;