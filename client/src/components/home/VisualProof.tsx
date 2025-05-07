import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function VisualProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/60 to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-[120px]"></div>
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Rating Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-1">
            <div className="flex text-blue-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-gray-700 font-medium">Rated 4.9/5 by 30+ businesses</div>
        </motion.div>
        
        <motion.div
          className="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card - Calendar */}
          <motion.div 
            className="bg-white py-5 px-6 rounded-2xl shadow-lg max-w-[240px] w-full order-2 lg:order-1 shadow-blue-100/50"
            variants={fadeInUp}
          >
            <div className="mb-4">
              <div className="w-24 h-5 bg-gray-300 rounded-full mb-2"></div>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {/* Calendar grid cells */}
              {[...Array(25)].map((_, i) => {
                // Define which cells have checkmarks (booked meetings)
                const hasCheckmark = [1, 6, 8, 12, 16, 21].includes(i);
                
                return (
                  <div 
                    key={i} 
                    className={`flex items-center justify-center rounded-md h-8 w-8 ${
                      hasCheckmark 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200'
                    }`}
                  >
                    {hasCheckmark && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Center - Phone Mockup */}
          <motion.div 
            className="relative order-1 lg:order-2 max-w-[300px] w-full"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#1D1D1D] rounded-[40px] pt-1 pb-6 px-2 shadow-2xl relative overflow-hidden border-4 border-gray-800">
              {/* Phone notch */}
              <div className="w-1/2 h-6 bg-black rounded-b-2xl absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Screen */}
              <div className="rounded-[32px] overflow-hidden h-[500px] bg-blue-600">
                <div className="px-4 pt-12 pb-4 h-full flex flex-col">
                  {/* Screen Content */}
                  <div className="text-center mb-auto mt-6">
                    <div className="text-[72px] font-extralight text-white tracking-tighter leading-tight">11:56</div>
                    <div className="text-white/80 mt-1 font-light tracking-wider">Dec 11, Monday</div>
                  </div>
                  
                  {/* Notifications */}
                  <div className="space-y-3 mb-6">
                    {/* Notification 1 */}
                    <div className="bg-blue-200/90 backdrop-blur-sm rounded-xl p-3 flex items-start animate-pulse-subtle">
                      <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 21h22L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="font-semibold text-sm text-blue-900">LEAD CHOICE</div>
                          <div className="text-xs text-blue-800/70">1m ago</div>
                        </div>
                        <div className="text-sm text-blue-800 font-medium">You've booked a new qualified meeting!</div>
                      </div>
                    </div>
                    
                    {/* Notification 2 */}
                    <div className="bg-blue-200/90 backdrop-blur-sm rounded-xl p-3 flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-800" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 21h22L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="font-semibold text-sm text-blue-900">LEAD CHOICE</div>
                          <div className="text-xs text-blue-800/70">1m ago</div>
                        </div>
                        <div className="text-sm text-blue-800 font-medium">You've booked a new qualified meeting!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom pill */}
            <div className="w-1/3 h-1 bg-white/80 absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 rounded-full mx-auto"></div>
          </motion.div>
          
          {/* Right Card - Contact Verification */}
          <motion.div 
            className="bg-white py-5 px-5 rounded-2xl shadow-lg max-w-[240px] w-full order-3 shadow-blue-100/50"
            variants={fadeInUp}
            transition={{ delay: 0.05 }}
          >
            <div className="space-y-4">
              {/* Contact 1 */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-24 h-3 bg-gray-300 rounded-full mb-2"></div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-2 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Contact 2 */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-20 h-3 bg-gray-300 rounded-full mb-2"></div>
                  <div className="w-28 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-2 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Contact 3 (Unverified) */}
              <div className="flex items-center opacity-60">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/68.jpg" 
                    alt="Contact" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-16 h-3 bg-gray-300 rounded-full mb-2"></div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-2 bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

// Add this to your CSS
// .animate-pulse-subtle {
//   animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

// @keyframes pulse-subtle {
//   0%, 100% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0.8;
//   }
// }