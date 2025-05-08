import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { Link } from "wouter";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#fef9f6' }}>
      {/* Radial orange background blur for depth */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT COLUMN: Project Content */}
          <motion.div variants={fadeInUp}>
            <div className="mb-5">
              <span className="inline-block bg-orange-100 text-orange-600 text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full">
                Featured Case Study
              </span>
            </div>
            
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-3 text-gray-800">
              Green Home Path
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-5">
              10,000+ Qualified Energy Leads Captured
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-lg text-base md:text-lg leading-relaxed">
              We built a custom lead system that scraped location- and problem-specific homeowners interested in heat pump installation. These leads were resold profitably to local contractors — now over 10,000 captured and counting.
            </p>
            
            <div className="mb-8">
              <span className="inline-block bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                Lead Gen System
              </span>
            </div>
            
            <Link 
              href="/case-studies/green-home-path" 
              className="inline-flex items-center gradient-bg text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all hover:translate-y-[-2px] group md:w-auto w-full justify-center"
            >
              See How We Did It
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          {/* RIGHT COLUMN: Visual Element */}
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group max-w-md mx-auto lg:ml-auto lg:mr-0">
              {/* Visual mockup with browser frame */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
                <div className="flex space-x-2 mr-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="bg-white rounded-md h-6 flex-1 px-3 text-xs flex items-center text-gray-400 font-medium">
                  greenhomepath.com/lead-dashboard
                </div>
              </div>
              
              <div className="p-6">
                {/* Dashboard-style lead counter */}
                <div className="mb-6">
                  <div className="text-gray-500 text-sm mb-1 font-medium">Total Leads Captured</div>
                  <div className="text-4xl font-bold text-orange-500 flex items-baseline">
                    10,437
                    <span className="text-green-500 text-sm ml-2 font-medium">+128 today</span>
                  </div>
                </div>
                
                {/* Lead map visualization */}
                <div className="relative h-48 bg-gray-50 rounded-lg overflow-hidden mb-6">
                  <div className="absolute inset-0 opacity-70" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f97316' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '130px 130px'
                  }}></div>
                  
                  {/* Map pins */}
                  <div className="absolute w-4 h-4 bg-orange-400 rounded-full top-1/4 left-1/4 shadow-md shadow-orange-500/20 animate-pulse"></div>
                  <div className="absolute w-3 h-3 bg-orange-500 rounded-full top-1/2 left-1/2 shadow-md shadow-orange-500/20 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute w-3 h-3 bg-orange-400 rounded-full bottom-1/4 right-1/4 shadow-md shadow-orange-500/20 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute w-4 h-4 bg-orange-500 rounded-full top-1/3 right-1/3 shadow-md shadow-orange-500/20 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                
                {/* Lead cards */}
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800">John D.</div>
                        <div className="text-gray-500 text-xs">Portland, OR • Heat Pump Installation</div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">New</div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow opacity-60">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800">Sarah M.</div>
                        <div className="text-gray-500 text-xs">Eugene, OR • Solar + Heat Pump</div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded">Contacted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI badge for motion polish */}
            <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-white rounded-full shadow-lg p-4 animate-float-slow">
              <div className="text-orange-500 font-bold flex items-center">
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.25 11.5L4.75 14L12 18.25L19.25 14L14.6722 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>10K+</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}