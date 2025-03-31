import React from 'react';
import { Zap, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 relative">
      {/* Background Gradient Elements */}
      <div className="absolute top-40 -right-20 w-60 h-60 rounded-full bg-agency-red/10 filter blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 rounded-full bg-agency-red/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Growing Digital Agency <br />Based in Lagos, Nigeria</h2>
            
            <p className="text-gray-700 mb-6">
              We are a team of passionate designers and developers committed to crafting exceptional digital experiences. Based in the heart of Lagos, we combine global standards with local insights to deliver solutions that stand out.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our approach focuses on collaboration, innovation, and attention to detail. We don&apos;t just build products; we create experiences that users love and businesses thrive on.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Zap className="text-agency-red" />
                <span>Fast delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-agency-red" />
                <span>Expert team</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-agency-red" />
                <span>Global standards</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-agency-red" />
                <span>Quality assured</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              {/* Abstract shapes for visual interest */}
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-agency-red to-agency-black rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white rounded-lg border border-gray-200 shadow-lg p-4 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-agency-red">3+</p>
                <p className="text-sm text-center">Years of Experience</p>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 secondary-gradient rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;