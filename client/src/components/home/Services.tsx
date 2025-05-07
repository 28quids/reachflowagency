import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

// Service card data
const services = [
  {
    id: 1,
    title: "Landing Page & Funnel Design",
    description: "We design high-converting landing pages and sales funnels that turn visitors into customers.",
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

// Process steps data
const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a tailored strategy.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Implementation",
    description: "We build your marketing assets, set up campaigns, and launch according to our strategy.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Optimization",
    description: "We continuously analyze data to refine and improve your marketing for better results.",
    icon: (
      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
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
        
        {/* Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="font-poppins font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Process Steps */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center font-poppins font-bold text-2xl mb-12">Our Process</h3>
          
          <div className="relative">
            {/* Process connecting line (desktop only) */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gray-200"></div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="bg-white rounded-xl p-6 shadow-lg relative"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg">
                    {step.id}
                  </div>
                  <h4 className="font-poppins font-semibold text-xl text-center mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">We offer both one-time marketing solutions and ongoing optimization retainers to suit your needs.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
