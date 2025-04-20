import React from 'react';
import { Users, Calendar, School, BookOpen } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      count: "500+",
      label: "Members",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary-600" />,
      count: "120+",
      label: "Events Organized",
    },
    {
      icon: <School className="h-10 w-10 text-primary-600" />,
      count: "50+",
      label: "Schools Reached",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary-600" />,
      count: "30+",
      label: "Publications",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-dark-800 mb-2">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;