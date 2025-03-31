'use client';
import About from '@/component/About';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';
import Hero from '@/component/Hero';
import Navbar from '@/component/Nav';
import Projects from '@/component/Projects';
import ScrollToTop from '@/component/ScrollToTop';
import Services from '@/component/Services';
import { useEffect } from 'react';
export default function Home() {


  useEffect(() => {
    // Scroll reveal function
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
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
