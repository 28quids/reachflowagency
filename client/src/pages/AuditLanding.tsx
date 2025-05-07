import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditForm from "@/components/home/AuditForm";

export default function AuditLanding() {
  useEffect(() => {
    document.title = "Free Marketing Audit | ReachFlow";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main>
        <section className="pt-32 pb-10 relative overflow-hidden">
          {/* Geometric pattern background */}
          <div className="absolute inset-0 opacity-10 geometric-pattern"></div>
          
          {/* Abstract wave background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-orange-100/30 to-transparent"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-coral-300 rounded-full opacity-40 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Get Your Free Marketing Audit</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our team of experts will analyze your current marketing strategy and provide actionable insights to improve your results.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12 bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="font-poppins font-bold text-2xl mb-4">What You'll Get:</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive analysis of your current marketing strategy</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Identification of gaps and opportunities in your funnel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Competitor analysis and market positioning insights</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Actionable recommendations to improve your results</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>30-minute strategy call with our marketing experts</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Marketing dashboard" 
                    className="w-full h-auto rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-16"
            >
              <Link href="/">
                <a className="text-orange-600 hover:text-orange-700 transition-colors font-medium">
                  <span className="mr-2">←</span> Back to Home
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
        
        <AuditForm />
      </main>
      <Footer />
    </motion.div>
  );
}
