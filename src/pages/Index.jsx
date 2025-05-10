import { useEffect } from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Add fadeIn when in view
        }else{
          entry.target.classList.remove('animated'); // Add fadeIn when in view
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => observer.observe(element));
  
    return () => elements.forEach(element => observer.unobserve(element));
  }, []);
  
  

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />     
    </Layout>
  );
};

export default Index;
