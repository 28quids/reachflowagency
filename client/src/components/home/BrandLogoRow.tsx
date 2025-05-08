import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

// Project type definition
type Project = {
  id: number;
  name: string;
  label: string;
};

// Project list from client specifications
const projects: Project[] = [
  { id: 1, name: "Juger Clothing", label: "DTC Fashion Brand" },
  { id: 2, name: "Thompson Towers", label: "Event Venue Funnel" },
  { id: 3, name: "Nvision Shades", label: "Product Pre-Launch" },
  { id: 4, name: "Trading IQ", label: "Investor-Focused Waitlist" },
  { id: 5, name: "Clarity Supplements", label: "Ad Campaign Build" },
  { id: 6, name: "Green Home Path", label: "10K+ Lead Capture System" },
  { id: 7, name: "You?", label: "Next Success Story" }
];

// Project Card component
const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-200 border border-gray-100 group hover:translate-y-[-5px] relative overflow-hidden"
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.07)"
    }}
  >
    {/* Background accent element that appears on hover */}
    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-orange-100 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 transform group-hover:scale-150"></div>
    
    <div className="relative z-10">
      <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
        {project.name}
      </h3>
      <div className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
        {project.label}
      </div>
    </div>
  </motion.div>
);

export default function BrandLogoRow() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle floating elements in background */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-50 rounded-full opacity-20 blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-3">
            Brands We've Helped <span className="inline-block bg-orange-300/30 px-2 text-orange-600 rounded relative">Grow</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">From funded tech to local service operators</p>
        </motion.div>
        
        {/* Project grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}