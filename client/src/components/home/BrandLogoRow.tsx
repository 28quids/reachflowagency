import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { fadeIn } from "@/lib/utils";

// Define the brand type
type Brand = {
  id: number;
  name: string;
  icon: "building" | "box" | "leaf" | "rocket" | "globe";
};

// Expanded brand list to ensure continuous scrolling
const brands: Brand[] = [
  { id: 1, name: "AlphaCorp", icon: "building" },
  { id: 2, name: "BoxInc", icon: "box" },
  { id: 3, name: "GreenTech", icon: "leaf" },
  { id: 4, name: "LaunchPad", icon: "rocket" },
  { id: 5, name: "WorldWide", icon: "globe" }
];

// Create a duplicate set of brands to make the scrolling seamless
const duplicatedBrands = [...brands, ...brands];

// Logo component for reuse
const BrandLogo = ({ brand, className = "" }: { brand: Brand, className?: string }) => (
  <div className={`flex items-center justify-center mx-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 ${className}`}>
    <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {brand.icon === "building" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      )}
      {brand.icon === "box" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      )}
      {brand.icon === "leaf" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )}
      {brand.icon === "rocket" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      )}
      {brand.icon === "globe" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )}
    </svg>
    <span className="font-poppins font-semibold text-gray-500">{brand.name}</span>
  </div>
);

export default function BrandLogoRow() {
  // Animation controls for the scrolling effect
  const controls = useAnimationControls();
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Calculate the total width needed for animation
    if (scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth / 2;
      
      // Start the animation sequence
      const startAnimation = async () => {
        await controls.start({
          x: -scrollWidth,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }
        });
      };
      
      startAnimation();
    }
    
    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <section className="py-8 border-t border-gray-100 border-b overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Mini title added above logos */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-orange-500 italic">Some of our clients...</span>
        </motion.div>
        
        {/* Automatic logo scrolling container */}
        <div className="relative w-full overflow-hidden">
          {/* Hide scrollbar but allow overflow */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            ref={scrollerRef}
            className="flex items-center"
            animate={controls}
            initial={{ x: 0 }}
          >
            {/* First set of logos */}
            <div className="flex items-center whitespace-nowrap">
              {brands.map((brand) => (
                <BrandLogo key={`first-${brand.id}`} brand={brand} className="w-36 h-16" />
              ))}
            </div>
            
            {/* Duplicated set to create seamless loop */}
            <div className="flex items-center whitespace-nowrap">
              {brands.map((brand) => (
                <BrandLogo key={`second-${brand.id}`} brand={brand} className="w-36 h-16" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}