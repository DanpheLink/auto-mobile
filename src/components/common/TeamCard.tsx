import React from 'react';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 group">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-800">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;