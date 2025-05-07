import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { fadeInUp } from "@/lib/utils";

export default function Services() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  const inView1 = useInView(ref1, { once: false, amount: 0.3 });
  const inView2 = useInView(ref2, { once: false, amount: 0.3 });
  const inView3 = useInView(ref3, { once: false, amount: 0.3 });
  const inView4 = useInView(ref4, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
    if (inView4) controls4.start("visible");
  }, [inView1, inView2, inView3, inView4, controls1, controls2, controls3, controls4]);

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help businesses attract and convert high-quality leads through strategic digital marketing solutions.
          </motion.p>
        </div>
        
        {/* Service 1: Landing Page & Funnel Design */}
        <motion.div 
          ref={ref1}
          className="flex flex-col md:flex-row items-center mb-20 section-reveal"
          variants={fadeInUp}
          initial="hidden"
          animate={controls1}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="font-poppins font-bold text-2xl mb-4">Landing Page & Funnel Design</h3>
            <p className="text-gray-600 mb-6">We design high-converting landing pages and sales funnels that turn visitors into customers. Our data-driven approach ensures maximum ROI.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Conversion-optimized design</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>A/B testing for peak performance</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mobile-friendly experiences</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Landing page design illustration" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Service 2: Targeted Paid Traffic */}
        <motion.div 
          ref={ref2}
          className="flex flex-col md:flex-row-reverse items-center mb-20 section-reveal"
          variants={fadeInUp}
          initial="hidden"
          animate={controls2}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <h3 className="font-poppins font-bold text-2xl mb-4">Targeted Paid Traffic</h3>
            <p className="text-gray-600 mb-6">We drive qualified leads to your business through strategic ad campaigns across Google, Facebook, Instagram, and other platforms.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Precise audience targeting</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cost-effective campaign management</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Continuous optimization for better results</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Digital advertising campaign dashboard" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Service 3: Lead Nurturing */}
        <motion.div 
          ref={ref3}
          className="flex flex-col md:flex-row items-center section-reveal"
          variants={fadeInUp}
          initial="hidden"
          animate={controls3}
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="font-poppins font-bold text-2xl mb-4">Lead Nurturing</h3>
            <p className="text-gray-600 mb-6">We help you build relationships with prospects through personalized communication that guides them toward a purchase decision.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated email sequences</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Personalized content strategies</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lead scoring and segmentation</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Lead nurturing workflow visualization" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        
        {/* Process Overview */}
        <motion.div 
          ref={ref4}
          className="mt-24 text-center section-reveal"
          variants={fadeInUp}
          initial="hidden"
          animate={controls4}
        >
          <h3 className="font-poppins font-bold text-2xl mb-10">Our Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg relative">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-14 shadow-lg">1</div>
              <h4 className="font-poppins font-semibold text-xl mt-6 mb-3">Discovery</h4>
              <p className="text-gray-600">We learn about your business, goals, target audience, and competition to create a tailored strategy.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg relative">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-14 shadow-lg">2</div>
              <h4 className="font-poppins font-semibold text-xl mt-6 mb-3">Implementation</h4>
              <p className="text-gray-600">We build your marketing assets, set up campaigns, and launch everything according to our strategy.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg relative">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-14 shadow-lg">3</div>
              <h4 className="font-poppins font-semibold text-xl mt-6 mb-3">Optimization</h4>
              <p className="text-gray-600">We continuously analyze performance data to refine and improve your marketing for better results.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">We offer both one-time marketing solutions and ongoing optimization retainers to suit your needs.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
