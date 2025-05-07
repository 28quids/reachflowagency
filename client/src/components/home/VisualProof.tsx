import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function VisualProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/60 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="flex md:flex-row gap-2 sm:gap-4 items-center justify-center max-w-5xl mx-auto -mt-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card - Calendar */}
          <motion.div 
            className="bg-white py-5 px-3 sm:px-6 rounded-2xl shadow-lg max-w-[160px] sm:max-w-[200px] w-full z-10 shadow-orange-100/50"
            variants={fadeInUp}
          >
            <div className="mb-3">
              <div className="w-16 sm:w-24 h-4 sm:h-5 bg-gray-300 rounded-full mb-2"></div>
            </div>
            
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {/* Calendar grid cells */}
              {[...Array(25)].map((_, i) => {
                // Define which cells have checkmarks (booked meetings)
                const hasCheckmark = [1, 6, 8, 12, 16, 21].includes(i);
                
                return (
                  <div 
                    key={i} 
                    className={`flex items-center justify-center rounded-md h-6 sm:h-8 w-6 sm:w-8 ${
                      hasCheckmark 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200'
                    }`}
                  >
                    {hasCheckmark && (
                      <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Center - Phone Mockup (Cut Off) */}
          <motion.div 
            className="relative max-w-[240px] sm:max-w-[280px] w-full mx-2 sm:mx-4"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#1D1D1D] rounded-[40px] pt-1 pb-6 px-2 shadow-2xl relative overflow-hidden border-4 border-gray-800">
              {/* Phone notch */}
              <div className="w-1/2 h-6 bg-black rounded-b-2xl absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Screen - CUT OFF (showing only top half) */}
              <div className="rounded-t-[32px] overflow-hidden h-[250px] bg-orange-600">
                <div className="px-4 pt-12 pb-4 h-full flex flex-col">
                  {/* Screen Content */}
                  <div className="text-center mb-6">
                    <div className="text-[72px] font-extralight text-white tracking-tighter leading-tight">11:56</div>
                    <div className="text-white/80 mt-1 font-light tracking-wider">Dec 11, Monday</div>
                  </div>
                  
                  {/* Notifications */}
                  <div className="space-y-3">
                    {/* Notification 1 */}
                    <div className="bg-orange-200/90 backdrop-blur-sm rounded-xl p-3 flex items-start animate-pulse-subtle">
                      <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-800" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 21h22L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="font-semibold text-sm text-orange-900">REACHFLOW</div>
                          <div className="text-xs text-orange-800/70">1m ago</div>
                        </div>
                        <div className="text-sm text-orange-800 font-medium">You've booked a new qualified meeting!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Card - Contact Verification */}
          <motion.div 
            className="bg-white py-5 px-3 sm:px-5 rounded-2xl shadow-lg max-w-[160px] sm:max-w-[200px] w-full z-10 shadow-orange-100/50"
            variants={fadeInUp}
            transition={{ delay: 0.05 }}
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Contact 1 */}
              <div className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-16 sm:w-24 h-2 sm:h-3 bg-gray-300 rounded-full mb-1 sm:mb-2"></div>
                  <div className="w-20 sm:w-28 h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-1 sm:ml-2 bg-orange-500 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Contact 2 */}
              <div className="flex items-center">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-14 sm:w-20 h-2 sm:h-3 bg-gray-300 rounded-full mb-1 sm:mb-2"></div>
                  <div className="w-20 sm:w-28 h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-1 sm:ml-2 bg-orange-500 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Contact 3 (Unverified) */}
              <div className="flex items-center opacity-60">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/68.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-12 sm:w-16 h-2 sm:h-3 bg-gray-300 rounded-full mb-1 sm:mb-2"></div>
                  <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-1 sm:ml-2 bg-gray-200 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}