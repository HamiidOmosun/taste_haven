import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

// Example: replace with your actual image URLs
const menuImages = [
  { id: 1,
    url: assets.woodback, 
    label: "Menu Item 1",
  },
  { id: 2, url: assets.woodback, label: "Menu Item 2" },
  { id: 3, url: assets.woodback, label: "Menu Item 3" },
];


const MenuSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const setupScroll = () => {
      const totalScroll = container.scrollWidth - section.offsetWidth;

      // Kill previous triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Horizontal scroll
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
    };

    setupScroll();
    window.addEventListener("resize", setupScroll);

    return () => {
      window.removeEventListener("resize", setupScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div ref={containerRef} className="flex">
        {menuImages.map((item) => (
          <div
            key={item.id}
            className="w-screen h-screen flex-shrink-0 flex items-center bg-amber-700 justify-center text-white text-3xl font-bold"
          >
            <div>
              <img src={item.image} alt="" className="w-24 h-auto" />
              <h1 className="text-4xl text-white">
                {item.label}
              </h1>
              <p className="text-2xl text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
