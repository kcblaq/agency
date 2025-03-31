
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design & Frontend Development",
    description: "A comprehensive financial dashboard for a leading Nigerian fintech company.",
    image: "/placeholder.svg", // Using placeholder image
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "E-commerce Platform",
    category: "Full-Stack Development",
    description: "A modern e-commerce solution with integrated payment systems for a retail business.",
    image: "/placeholder.svg", // Using placeholder image
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Health Tech Mobile App",
    category: "UI/UX Design & Frontend Development",
    description: "An intuitive healthcare application connecting patients with doctors in Lagos.",
    image: "/placeholder.svg", // Using placeholder image
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Educational Platform",
    category: "Full-Stack Development",
    description: "A learning management system for a prominent Nigerian educational institution.",
    image: "/placeholder.svg", // Using placeholder image
    gradient: "from-orange-500 to-red-500",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Our Projects</h2>
          <p className="section-subheading">
            A selection of our recent work delivering innovative digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl reveal card-hover"
            >
              {/* Gradient overlay instead of image for visual appeal */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
              
              <div className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
                <div>
                  <span className="text-white/80 font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/90 mb-6">{project.description}</p>
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-white font-medium group-hover:underline"
                >
                  View Case Study <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a href="#" className="btn-secondary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;