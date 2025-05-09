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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-1">
          {/* ReachFlow Logo */}
          <img src="/assets/images/logo.png" alt="ReachFlow Logo" className="h-12 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Services</a>
          <a href="#work" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Our Work</a>
          <Link href="/audit" className="font-medium text-gray-700 hover:text-orange-600 transition-colors">Free Audit</Link>
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
          <Link href="/audit" className="font-medium text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>Free Audit</Link>
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
