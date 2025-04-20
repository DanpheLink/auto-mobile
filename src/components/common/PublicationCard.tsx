import React from 'react';
import { Publication } from '../../types';
import { FileText, Calendar, Download } from 'lucide-react';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row transform transition-all hover:-translate-y-1 hover:shadow-lg">
      {publication.thumbnail ? (
        <div className="md:w-1/4 overflow-hidden">
          <img 
            src={publication.thumbnail} 
            alt={publication.title} 
            className="w-full h-full object-cover md:h-40 transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : (
        <div className="md:w-1/4 bg-primary-100 flex items-center justify-center">
          <FileText className="h-12 w-12 text-primary-600" />
        </div>
      )}
      <div className="p-6 md:w-3/4">
        <h3 className="text-lg font-bold text-dark-800 mb-2">{publication.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{publication.authors}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{publication.date}</span>
        </div>
        <a 
          href={publication.link} 
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;