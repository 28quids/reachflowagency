import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function VisualProof() {
  return (
    <section className="py-12 bg-gray-50/70 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-[100px]"></div>
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Rating Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i < 4 ? 0 : 1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-gray-700">Rated 4.9/5 by 30+ businesses</span>
          </div>
        </motion.div>
        
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card - Calendar */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg max-w-xs w-full order-2 lg:order-1"
            variants={fadeInUp}
          >
            <div className="text-center mb-3 pb-2 border-b border-gray-100">
              <h3 className="font-semibold text-gray-700">Meeting Calendar</h3>
              <p className="text-sm text-gray-500">December 2023</p>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-2">
              {/* Calendar day headers */}
              {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar grid cells */}
              {[...Array(25)].map((_, i) => {
                // Define which cells have checkmarks (booked meetings)
                const hasCheckmark = [2, 7, 10, 14, 19, 23].includes(i);
                
                return (
                  <div 
                    key={i} 
                    className={`flex items-center justify-center rounded-md h-8 text-xs font-medium ${
                      hasCheckmark 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-500'
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
            
            <div className="text-center mt-4">
              <div className="text-sm text-gray-500">6 new meetings booked this week</div>
            </div>
          </motion.div>
          
          {/* Center - Phone Mockup */}
          <motion.div 
            className="relative order-1 lg:order-2 max-w-[260px] w-full"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-[40px] pt-2 pb-6 px-3 shadow-2xl relative overflow-hidden">
              {/* Phone notch */}
              <div className="w-1/2 h-6 bg-black rounded-b-xl absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Screen */}
              <div className="bg-gray-100 rounded-[28px] overflow-hidden p-3 h-[480px]">
                {/* Screen Content */}
                <div className="text-center mt-16 mb-8">
                  <div className="text-4xl font-light">11:56</div>
                  <div className="text-sm text-gray-600 mt-1">Dec 11, Monday</div>
                </div>
                
                {/* Notification 1 */}
                <div className="bg-white rounded-xl p-3 mb-3 shadow-sm flex items-start animate-pulse-subtle">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-sm">ReachFlow</div>
                      <div className="text-xs text-gray-500">now</div>
                    </div>
                    <div className="text-xs">You've booked a new qualified meeting!</div>
                  </div>
                </div>
                
                {/* Notification 2 */}
                <div className="bg-white rounded-xl p-3 shadow-sm flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-sm">Calendar</div>
                      <div className="text-xs text-gray-500">1m ago</div>
                    </div>
                    <div className="text-xs">Meeting with John confirmed for 2pm</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom pill */}
            <div className="w-1/3 h-1 bg-white/60 absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full mx-auto"></div>
          </motion.div>
          
          {/* Right Card - Contact Verification */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg max-w-xs w-full order-3"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="text-center mb-4 pb-2 border-b border-gray-100">
              <h3 className="font-semibold text-gray-700">Lead Verification</h3>
              <p className="text-sm text-gray-500">Today's contacts</p>
            </div>
            
            {/* Contact 1 */}
            <div className="flex items-center p-3 border border-gray-100 rounded-lg mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                JS
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">John Smith</div>
                <div className="text-xs text-gray-500">Tech Director at Acme Inc</div>
              </div>
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Contact 2 */}
            <div className="flex items-center p-3 border border-gray-100 rounded-lg mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                EJ
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Emma Johnson</div>
                <div className="text-xs text-gray-500">Marketing VP at TechCorp</div>
              </div>
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Contact 3 (Unverified) */}
            <div className="flex items-center p-3 border border-gray-100 rounded-lg opacity-60">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-sm mr-3">
                RB
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Robert Brown</div>
                <div className="text-xs text-gray-500">Pending verification...</div>
              </div>
              <div className="bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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