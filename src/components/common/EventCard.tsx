import React from 'react';
import { EventItem } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-lg">
      {event.image && (
        <div className="md:w-1/3 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover md:h-40 transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6 md:w-2/3">
        <h3 className="text-lg font-bold text-dark-800 mb-2">{event.title}</h3>
        <div className="flex flex-col space-y-2 mb-3">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-primary-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary-600" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <a 
          href="#" 
          className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default EventCard;