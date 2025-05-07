import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
// Import the Facebook Ads image
import facebookAdsImage from "../../assets/images/facebook-ads.png";

// Service card data with phone mockups
const services = [
  {
    id: 1,
    title: "Landing Page & Funnel Design",
    description: "We design high-converting landing pages and sales funnels that turn visitors into customers.",
    alignment: "left",
    phoneContent: (
      <div className="bg-gradient-to-b from-orange-500 to-rose-500 h-full rounded-lg p-3">
        <div className="flex justify-between mb-2">
          <div className="w-10 h-2 bg-white/20 rounded-full"></div>
          <div className="w-6 h-2 bg-white/20 rounded-full"></div>
        </div>
        <div className="w-full h-24 bg-white/10 rounded-lg mb-3"></div>
        <div className="space-y-1 mb-3">
          <div className="w-full h-2 bg-white/20 rounded-full"></div>
          <div className="w-5/6 h-2 bg-white/20 rounded-full"></div>
          <div className="w-4/6 h-2 bg-white/20 rounded-full"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/3 h-6 bg-white/30 rounded-lg"></div>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: [
      "Conversion-optimized design",
      "A/B testing for peak performance",
      "Mobile-friendly experiences"
    ]
  },
  {
    id: 2,
    title: "Targeted Paid Traffic",
    description: "We drive qualified leads to your business through strategic ad campaigns across multiple platforms.",
    alignment: "right",
    phoneContent: (
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-full rounded-lg p-3">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="w-full h-5 bg-white/20 rounded-md"></div>
          <div className="w-full h-5 bg-white/20 rounded-md"></div>
          <div className="w-full h-5 bg-white/20 rounded-md"></div>
          <div className="w-full h-5 bg-white/20 rounded-md"></div>
        </div>
        <div className="h-14 bg-white/10 rounded-lg flex items-center px-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/20 mr-2"></div>
          <div className="flex-1">
            <div className="w-16 h-2 bg-white/30 rounded-full mb-1"></div>
            <div className="w-24 h-2 bg-white/20 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-orange-200/50 rounded-full"></div>
          <div className="w-2/3 h-2 bg-orange-200/30 rounded-full"></div>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    features: [
      "Precise audience targeting",
      "Cost-effective campaign management",
      "Continuous optimization"
    ]
  },
  {
    id: 3,
    title: "Lead Nurturing",
    description: "We help you build relationships with prospects through personalized communication that guides them toward purchase.",
    alignment: "left",
    phoneContent: (
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 h-full rounded-lg p-3">
        <div className="mb-2 w-1/2 h-3 bg-white/20 rounded-full mx-auto"></div>
        <div className="space-y-3">
          <div className="w-full h-12 bg-white/10 rounded-lg px-2 py-2 flex">
            <div className="w-8 h-8 rounded-full bg-white/30 mr-2"></div>
            <div className="w-full">
              <div className="w-16 h-2 bg-white/30 rounded-full mb-1"></div>
              <div className="w-24 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-12 bg-white/10 rounded-lg px-2 py-2 flex">
            <div className="w-8 h-8 rounded-full bg-white/30 mr-2"></div>
            <div className="w-full">
              <div className="w-16 h-2 bg-white/30 rounded-full mb-1"></div>
              <div className="w-24 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-12 bg-white/10 rounded-lg px-2 py-2 flex">
            <div className="w-8 h-8 rounded-full bg-white/30 mr-2"></div>
            <div className="w-full">
              <div className="w-16 h-2 bg-white/30 rounded-full mb-1"></div>
              <div className="w-24 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    features: [
      "Automated email sequences",
      "Personalized content strategies",
      "Lead scoring and segmentation"
    ]
  }
];

// Process path data - The ReachFlow Experience
const processSteps = [
  {
    id: 1,
    title: "Real-Time Slack Feedback",
    description: "Live updates. Fast turnarounds. Clear priorities.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    uiMockup: (
      <div className="w-full h-24 sm:h-32 bg-white rounded-lg p-3 relative overflow-hidden border border-gray-200 shadow-md shadow-orange-100/10">
        <div className="absolute left-0 top-0 h-full w-1 bg-green-500"></div>
        <div className="flex mb-2">
          <div className="w-6 h-6 rounded-md bg-[#611f69] mr-2 flex items-center justify-center text-white text-[10px] font-bold">S</div>
          <div className="w-32 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gray-300 mr-2 mt-0.5"></div>
            <div>
              <div className="w-32 h-2 bg-gray-300 rounded-full mb-1"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gray-300 mr-2 mt-0.5"></div>
            <div>
              <div className="w-40 h-2 bg-gray-300 rounded-full mb-1"></div>
              <div className="w-56 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Loom Breakdowns",
    description: "We explain every decision in plain English — no mystery.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    uiMockup: (
      <div className="w-full h-24 sm:h-32 bg-white rounded-lg p-3 border border-gray-200 overflow-hidden relative shadow-md shadow-orange-100/10">
        <div className="absolute left-0 top-0 h-8 w-full bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        </div>
        <div className="h-full flex items-end pb-2">
          <div className="w-full flex items-center">
            <div className="w-12 h-3 bg-gray-300 rounded-full"></div>
            <div className="flex-1 h-1 bg-gray-200 mx-2 rounded-full relative">
              <div className="absolute left-1/3 top-0 h-1 w-8 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-10 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Iteration-Driven Execution",
    description: "We launch, learn, and optimize — daily.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    uiMockup: (
      <div className="w-full h-24 sm:h-32 bg-white rounded-lg p-3 border border-gray-200 overflow-hidden shadow-md shadow-orange-100/10">
        <div className="flex items-center justify-between mb-2">
          <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
          <div className="flex space-x-1">
            <div className="w-6 h-6 rounded-md bg-green-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-md bg-red-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 h-12">
          <div className="w-1/4 bg-green-200 rounded-md h-full"></div>
          <div className="w-1/5 bg-green-300 rounded-md h-3/4 self-end"></div>
          <div className="w-1/6 bg-green-400 rounded-md h-1/2 self-end"></div>
          <div className="w-1/5 bg-red-300 rounded-md h-1/3 self-end"></div>
          <div className="w-1/4 bg-green-500 rounded-md h-full"></div>
        </div>
      </div>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      {/* Decorative blurs */}
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-[100px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-[100px] translate-x-1/3"></div>
      
      {/* Orange wave */}
      <div className="absolute left-0 right-0 bottom-0 h-32 opacity-[0.03] overflow-hidden">
        <svg viewBox="0 0 1440 320" className="absolute w-full">
          <path fill="#f97316" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We help businesses attract and convert high-quality leads through strategic digital marketing solutions.
          </p>
        </motion.div>
        
        {/* Services in Zig-Zag Layout */}
        <div className="space-y-24 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`flex flex-col-reverse ${service.alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <motion.div 
                  className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 shadow-orange-100/50 shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="font-poppins font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: service.alignment === "right" ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                    >
                      <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Phone Mockup Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                {index === 1 ? (
                  // Facebook Ads image for Targeted Paid Traffic section
                  <motion.div 
                    className="max-w-[300px] w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="relative">
                      {/* Facebook Ads Image */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(249,115,22,0.15)]">
                        <img 
                          src={facebookAdsImage} 
                          alt="Facebook Ads Manager" 
                          className="w-full h-auto"
                        />
                      </div>
                      
                      {/* Floating Facebook logo */}
                      <motion.div 
                        className="absolute -right-4 -top-4 bg-white w-16 h-16 rounded-full shadow-lg z-10 p-2 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <svg className="text-[#1877F2] w-10 h-10" viewBox="0 0 36 36">
                          <path fill="currentColor" d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.525 13.652 17.471L14 35h6.181l.13.87z" />
                          <path fill="#fff" d="M13.651 35.471v-12.937H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.064-2.081-.064-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 4.534h-4.875v12.992c.446.026.896.039 1.349.039.454 0 .904-.013 1.35-.039v-12.992h4.875l1.007-4.534h-5.882v-3.944c0-2.908 1.137-4.024 4.09-4.024.914 0 1.656.021 2.08.064V7.11c-.806-.223-2.771-.446-3.91-.446-6.012 0-8.784 2.836-8.784 8.963V18H9.935v4.534h3.715v12.937z" />
                        </svg>
                      </motion.div>
                      
                      {/* Floating elements */}
                      <motion.div 
                        className="absolute -left-8 -bottom-4 bg-white p-2 rounded-lg shadow-lg z-10 shadow-orange-100/30"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -left-6 top-1/3 bg-orange-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg z-10"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  // Original phone mockup for other services
                  <motion.div 
                    className="max-w-[220px] w-full"
                    initial={{ opacity: 0, y: 30, rotate: service.alignment === "right" ? -5 : 5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring" }}
                    whileHover={{ scale: 1.03, rotate: service.alignment === "right" ? -2 : 2 }}
                  >
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="bg-gray-900 rounded-[36px] pt-6 pb-8 px-3 shadow-[0_8px_40px_rgba(249,115,22,0.15)] border-[12px] border-gray-800">
                        {/* Phone screen with service-specific content */}
                        <div className="rounded-[18px] overflow-hidden h-[320px]">
                          {service.phoneContent}
                        </div>
                        
                        {/* Phone home button */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                      
                      {/* Floating elements */}
                      <motion.div 
                        className={`absolute ${service.alignment === "right" ? "-left-8 -bottom-4" : "-right-8 -bottom-4"} bg-white p-2 rounded-lg shadow-lg z-10 shadow-orange-100/30`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500">
                          {index === 0 ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className={`absolute ${service.alignment === "right" ? "-left-6 top-1/3" : "-right-6 top-1/3"} bg-orange-500 w-7 h-7 rounded-full flex items-center justify-center shadow-lg z-10`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* The ReachFlow Experience - Process Path */}
        <motion.div 
          className="mt-24 md:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center font-poppins font-bold text-2xl mb-3">The ReachFlow Experience</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            When you work with us, you get a transparent, collaborative process that delivers results.
          </p>
          
          <div className="relative">
            {/* Process path connector */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-full"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Step counter dot on path */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-orange-500 shadow-lg flex items-center justify-center text-sm font-bold text-orange-600">{step.id}</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl group border border-gray-100 hover:border-orange-200 shadow-orange-100/5 hover:shadow-orange-100/20">
                    <div className="flex lg:hidden items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-3">{step.id}</div>
                      <h4 className="font-poppins font-semibold text-xl">{step.title}</h4>
                    </div>
                    
                    <div className="hidden lg:block w-16 h-16 bg-orange-50 rounded-full flex-shrink-0 flex items-center justify-center mb-5 mx-auto group-hover:bg-orange-100 transition-colors">
                      {step.icon}
                    </div>
                    
                    <h4 className="hidden lg:block font-poppins font-semibold text-xl text-center mb-3">{step.title}</h4>
                    <p className="text-gray-600 mb-6 lg:text-center">{step.description}</p>
                    
                    {/* UI mockup visual for each experience step */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    >
                      {step.uiMockup}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              We bring together marketing expertise and a results-focused approach to deliver qualified leads that grow your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
