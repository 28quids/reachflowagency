import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { Link } from "wouter";
import { useRef } from "react";

export default function FeaturedCaseStudy() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeInOut" } 
    }
  };

  // Icons for bullet points
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-orange-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  
  // Placeholder images for the carousel
  const imagePlaceholders = [
    { id: 1, label: "Lead capture form", color: "bg-gradient-to-br from-orange-100 to-orange-200" },
    { id: 2, label: "Dashboard view", color: "bg-gradient-to-br from-orange-200 to-orange-300" },
    { id: 3, label: "Analytics page", color: "bg-gradient-to-br from-orange-100 to-orange-200" },
    { id: 4, label: "Lead details", color: "bg-gradient-to-br from-orange-200 to-orange-300" }
  ];

  return (
    <section className="pt-20 pb-24 overflow-hidden relative" style={{ backgroundColor: '#FEFAF7' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f97316' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-3">FEATURED CASE STUDY</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-4 max-w-4xl mx-auto">
            How We Helped GreenHome Path Capture <span className="text-orange-500">10,000+ Leads</span> at Profit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real results delivered through smart funnel design and paid traffic strategy.
          </p>
        </motion.div>
        
        {/* Image Carousel */}
        <motion.div 
          className="mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-x-auto pb-8 hideScrollbar" ref={carouselRef}>
            <div className="flex space-x-6 px-4 w-max mx-auto">
              {imagePlaceholders.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`${image.color} rounded-2xl shadow-lg w-[300px] h-[200px] flex-shrink-0 transform transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px', transform: `rotateY(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.1 }
                    }
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-medium opacity-80">{image.label}</div>
                  </div>
                  
                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/20 opacity-50"></div>
                </motion.div>
              ))}
            </div>
            
            {/* Gradient fades on sides for better UX */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#FEFAF7] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#FEFAF7] to-transparent z-10 pointer-events-none"></div>
          </div>
        </motion.div>
        
        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left: Text Callout */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Lead Capture Strategy:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-700">Hyper-specific location & problem targeting</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-700">Built-for-speed scraping tool & funnel</span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-gray-700">Lead resale to local installers = profit</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Right: Metrics Highlight */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-100 rounded-full opacity-50 blur-2xl pointer-events-none"></div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-bold text-orange-500">10,000+</span>
              <span className="ml-2 text-lg text-gray-500">leads captured</span>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl mb-4">
              <div className="text-sm text-gray-500 mb-1">Lead Conversion Rate</div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <span className="ml-2 text-gray-700 font-bold">87%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="text-sm text-orange-700 font-medium">Avg. Cost Per Lead</div>
                <div className="text-2xl font-bold text-gray-800">$4.73</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="text-sm text-orange-700 font-medium">Avg. Sale Price</div>
                <div className="text-2xl font-bold text-gray-800">$21.50</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Want to Be Our Next Case Study?</h3>
          <Link 
            href="/audit"
            className="inline-flex items-center px-6 py-4 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-orange-400/20 group"
          >
            Request Your Free Audit
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}