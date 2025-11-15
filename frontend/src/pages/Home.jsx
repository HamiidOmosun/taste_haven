import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const sections = sectionsRef.current;

    if (!hero || !sections) return;

    // Pin the hero section while scrolling through it
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top', // pin until hero fully scrolled
      pin: true,
      pinSpacing: false, // spacing handled by content sections
      scrub: true,
    });

    // Optional: add parallax to hero background
    gsap.to(hero.querySelector('.hero-bg'), {
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen w-full z-10 overflow-hidden">
        {/* Background image */}
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.hero_img})` }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>

        {/* Navbar + Hero content */}
        <div className="relative z-20 flex flex-col h-full">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Sections that slide over hero */}
      <div ref={sectionsRef} className="relative z-30 bg-white">
        <OurPolicy />
        <NewsLetterBox />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
