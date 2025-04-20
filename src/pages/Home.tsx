import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProjectsHighlight from '../components/home/ProjectsHighlight';
import NewsHighlight from '../components/home/NewsHighlight';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Stats from '../components/home/Stats';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ProjectsHighlight />
      <Stats />
      <NewsHighlight />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default Home;