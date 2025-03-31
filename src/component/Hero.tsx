import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-agency-red/20 filter blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-agency-red/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 reveal">
            We <span className="text-agency-red">design</span> and <span className="text-agency-red">develop</span> digital experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl reveal">
            A Lagos-based software agency crafting beautiful, functional digital solutions that help businesses thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
              View Our Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-col sm:flex-row gap-8 justify-center items-center reveal">
            <div className="text-left">
              <p className="text-5xl font-bold text-agency-red">5+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-left">
              <p className="text-5xl font-bold text-agency-red">100%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-left">
              <p className="text-5xl font-bold text-agency-red">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;