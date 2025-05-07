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
        
        {/* Project Carousel - Improved with horizontal scroll */}
        <motion.div 
          className="relative py-8 overflow-hidden"
          variants={fadeInUp}
        >
          <div className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {/* Projects */}
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-80 mx-4 snap-center first:ml-6 last:mr-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-300 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 ml-2">
            <div className="bg-white/80 p-2 rounded-full shadow-md backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2">
            <div className="bg-white/80 p-2 rounded-full shadow-md backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
