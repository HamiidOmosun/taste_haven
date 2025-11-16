import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewsLetterBox from '../components/NewsLetterBox';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import AboutUs from '../components/AboutUs';
import FeautredEvents from '../components/FeautredEvents';
import MenuSection from '../components/MenuSection';
import MenuPreview from '../components/MenuPreview';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;

      // Skip pinning Newsletter/Footer section
      if (section.classList.contains("no-pin")) return;

      // Special handling for MenuSection (horizontal scroll)
      if (section.classList.contains("horizontal-scroll")) {
        const container = section.querySelector(".horizontal-container");
        if (!container) return;

        const totalScroll = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        return; // Skip normal vertical pin
      }

      // Default vertical pin for other sections
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

      // Optional parallax for hero background
      const bg = section.querySelector('.hero-bg');
      if (bg) {
        gsap.to(bg, {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative h-screen w-full overflow-hidden"
      >
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.hero_img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="relative z-20 flex flex-col h-full">
          <Navbar />
          <Hero />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="relative h-screen w-full flex items-center justify-center"
      >
        <AboutUs />
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative h-[200px] w-full flex items-center justify-center"
      >
          <MenuPreview/>
      </section>

      {/* Menu Section (horizontal scroll) */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative w-full horizontal-scroll"
      >
        <MenuSection />
      </section>

      {/* Featured Events Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative h-screen w-full bg-blue-300 flex flex-col justify-center"
      >
        <FeautredEvents />
      </section>

      {/* Newsletter + Footer */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="relative w-full bg-white no-pin"
      >
        <NewsLetterBox />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
