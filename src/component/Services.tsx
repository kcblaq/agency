import React from 'react';
import { Search, Palette, Code, Database, ShieldCheck, ClipboardList } from 'lucide-react';

const serviceItems = [
  {
    icon: <Search className="w-10 h-10 text-agency-red" />,
    title: "UX Research",
    description: "We conduct thorough research to understand your users' needs and behaviors, creating data-driven design strategies."
  },
  {
    icon: <Palette className="w-10 h-10 text-agency-red" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight your users and achieve your business goals."
  },
  {
    icon: <Code className="w-10 h-10 text-agency-red" />,
    title: "Frontend Development",
    description: "We bring designs to life with clean, optimized code and cutting-edge frontend technologies."
  },
  {
    icon: <Database className="w-10 h-10 text-agency-red" />,
    title: "Backend Development",
    description: "Robust, scalable backend systems that power your applications securely and efficiently."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-agency-red" />,
    title: "Quality Assurance",
    description: "Rigorous testing methodologies to ensure your software is bug-free and performs flawlessly."
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-agency-red" />,
    title: "Project Management",
    description: "Strategic planning and execution to ensure your projects are delivered on time, within scope, and on budget."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 relative">
      {/* Background Gradient Elements */}
      <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-agency-red/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-agency-red/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            We offer end-to-end software design and development services to bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 card-hover reveal"
            >
              <div className="bg-agency-red/10 p-4 rounded-lg inline-block mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;