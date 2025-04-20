import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../common/SectionHeader';
import AnimatedCard from '../common/AnimatedCard';
import { Telescope, GraduationCap, Users, ScrollText, Rocket, LineChart } from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Telescope className="h-10 w-10 text-primary-600" />,
      title: 'Research',
      description: 'Conducting cutting-edge astronomical research and observations from the unique vantage point of the Himalayas.'
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: 'Education',
      description: 'Providing resources and training to promote astronomy and space science education at all levels.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: 'Outreach',
      description: 'Engaging the public through events, workshops, and observations to foster scientific literacy and curiosity.'
    },
    {
      icon: <ScrollText className="h-10 w-10 text-primary-600" />,
      title: 'Publications',
      description: 'Publishing research findings and educational materials to contribute to the global scientific community.'
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary-600" />,
      title: 'Innovation',
      description: 'Developing low-cost astronomical tools and technologies adapted to Nepal\'s context and needs.'
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary-600" />,
      title: 'Capacity Building',
      description: 'Training the next generation of Nepali astronomers and space scientists for future leadership.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="What We Do"
            subtitle="NASA Nepal operates across multiple domains to advance astronomy and space science in Nepal"
            center={true}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary-600 h-full">
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;