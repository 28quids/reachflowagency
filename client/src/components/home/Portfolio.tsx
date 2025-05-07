import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Fitness Studio App",
    description: "300% increase in qualified leads for a local fitness studio through targeted Facebook campaigns.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600",
    tag: "LEAD GEN"
  },
  {
    id: 2,
    title: "E-commerce Revamp",
    description: "Redesigned sales funnel resulting in 85% increase in conversion rate for an online fashion retailer.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600",
    tag: "LANDING PAGE"
  },
  {
    id: 3,
    title: "SaaS Lead Campaign",
    description: "Generated 120+ qualified demos per month for a B2B SaaS company through LinkedIn campaigns.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600",
    tag: "DONE FOR YOU ADS"
  },
  {
    id: 4,
    title: "Real Estate Funnel",
    description: "Email nurture sequence that converted 25% of leads into property viewings for a luxury realtor.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600",
    tag: "LEAD NURTURE"
  }
];

const brands = [
  { id: 1, name: "AlphaCorp", icon: "building" },
  { id: 2, name: "BoxInc", icon: "box" },
  { id: 3, name: "GreenTech", icon: "leaf" },
  { id: 4, name: "LaunchPad", icon: "rocket" },
  { id: 5, name: "WorldWide", icon: "globe" }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 bg-gray-50 relative">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-xl mx-auto">See how we've helped businesses like yours generate quality leads and grow their revenue.</p>
        </motion.div>
        
        {/* Project Carousel */}
        <motion.div 
          className="carousel relative overflow-hidden py-8"
          variants={fadeInUp}
        >
          <div className="carousel-content inline-block">
            {/* Projects */}
            {projects.map((project) => (
              <div key={project.id} className="inline-block w-72 mx-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-300 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicates for infinite scroll effect */}
            {projects.slice(0, 2).map((project) => (
              <div key={`dup-${project.id}`} className="inline-block w-72 mx-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-300 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Brands we've worked with */}
        <motion.div 
          className="mt-24"
          variants={fadeInUp}
        >
          <h3 className="text-center font-poppins font-semibold text-xl mb-10">Brands We've Worked With</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand) => (
              <div 
                key={brand.id} 
                className="w-32 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
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
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
