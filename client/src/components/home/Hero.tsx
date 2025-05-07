import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10 geometric-pattern"></div>
      
      {/* Abstract wave background with enhanced blurs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-orange-100/40 to-transparent"></div>
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-coral-300 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-40 bg-orange-100 rounded-full opacity-20 blur-3xl transform rotate-6"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.p 
            className="text-sm font-medium text-orange-600 mb-4 tracking-wider"
            variants={fadeInUp}
          >
            ATTENTION BUSINESSES
          </motion.p>
          
          <motion.h1 
            className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            variants={fadeInUp}
          >
            We deliver you the customers you <span className="inline-block bg-orange-300/30 px-2 text-orange-600 rounded relative">want</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-10 max-w-2xl"
            variants={fadeInUp}
          >
            Not the ones that waste your time.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <Link 
              href="/audit"
              className="inline-block gradient-bg text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all animate-pulse-glow"
            >
              Get A Free Marketing Audit
              <span className="block text-sm mt-1 opacity-90">(in less than 48hrs)</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
