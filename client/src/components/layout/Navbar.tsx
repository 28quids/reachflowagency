import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V16C21 16.9428 21 17.4142 20.7071 17.7071C20.4142 18 19.9428 18 19 18H5C4.05719 18 3.58579 18 3.29289 17.7071C3 17.4142 3 16.9428 3 16V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14C6.6 14 8.4 17 12 17C15.6 17 17.4 14 21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 11C6.6 11 8.4 8 12 8C15.6 8 17.4 11 21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-poppins font-bold text-xl">Reach<span className="text-gradient">Flow</span></span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Services</a>
          <a href="#work" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Our Work</a>
          <a href="#audit" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Free Audit</a>
          <Link href="/audit" className="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all">
            Contact Us
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-gray-700" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        id="mobileMenu" 
        className={cn("md:hidden bg-white w-full py-4 px-4 shadow-md", mobileMenuOpen ? "block" : "hidden")}
        initial="hidden"
        animate={mobileMenuOpen ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, height: 'auto' },
          hidden: { opacity: 0, height: 0 }
        }}
      >
        <div className="flex flex-col space-y-4">
          <a href="#services" className="font-medium text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#work" className="font-medium text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
          <a href="#audit" className="font-medium text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Free Audit</a>
          <Link 
            href="/audit" 
            className="gradient-bg text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg hover:brightness-110 transition-all" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
