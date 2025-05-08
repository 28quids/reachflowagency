import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

// AuditForm Schema
const auditFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  website: z.string().url({ message: "Please enter a valid URL" }),
  business: z.string().optional(),
  goals: z.array(z.string()).optional(),
});

type AuditFormValues = z.infer<typeof auditFormSchema>;

// The audit process steps
const auditProcess = [
  {
    id: 1,
    title: "Request Audit",
    description: "Fill out our simple form telling us about your business goals and current marketing.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "We Analyze",
    description: "Our experts review your funnel, website, and competitors to find opportunities and gaps.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Get Results",
    description: "We deliver actionable insights and a strategy you can implement right away.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// Why trust us items
const trustItems = [
  {
    title: "Proven Growth Expertise",
    description: "We've generated over 10,000 leads for businesses across various industries with our data-driven approach.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Modern Marketing Systems",
    description: "Our strategies combine cutting-edge tools and techniques designed for today's digital landscape.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Trusted by Businesses",
    description: "We work with businesses across the UK who trust us to deliver quality leads that actually convert.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

// No more leads left on the table steps
const noMoreLeadsSteps = [
  {
    number: "01",
    title: "We review your site & funnel",
    caption: "Our team analyzes everything from your messaging to your user flow."
  },
  {
    number: "02",
    title: "We identify the gaps & leaks",
    caption: "We show you exactly where you're losing leads and how to fix it."
  },
  {
    number: "03",
    title: "Implement & start converting",
    caption: "Take our recommendations and watch your conversions climb."
  }
];

export default function AuditLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      business: "",
      goals: [],
    },
  });

  const onSubmit = async (data: AuditFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/audit-requests", data);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your audit request has been received. We'll be in touch within 48 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    const currentGoals = form.getValues().goals || [];
    const newGoals = currentGoals.includes(value)
      ? currentGoals.filter(goal => goal !== value)
      : [...currentGoals, value];
    form.setValue("goals", newGoals);
  };

  const renderAuditForm = (variant: "hero" | "footer" = "hero") => (
    <div className={`bg-white rounded-xl shadow-xl border border-gray-200 ${variant === "hero" ? "p-6" : "p-8"}`}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-poppins font-bold text-xl mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">Your audit request has been received. Our team will analyze your marketing and get back to you within 48 hours.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="gradient-bg text-white font-medium px-6 py-2 rounded-lg hover:shadow-lg transition-all"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h3 className={`font-bold text-xl mb-4 ${variant === "hero" ? "" : "text-center"}`}>Request Your Free Audit</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor={`name-${variant}`} className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
              <input 
                type="text" 
                id={`name-${variant}`}
                {...form.register("name")} 
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                placeholder="John Smith" 
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor={`email-${variant}`} className="block text-gray-700 font-medium mb-1 text-sm">Business Email</label>
              <input 
                type="email" 
                id={`email-${variant}`}
                {...form.register("email")} 
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                placeholder="john@yourcompany.com" 
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor={`website-${variant}`} className="block text-gray-700 font-medium mb-1 text-sm">Website URL</label>
              <input 
                type="url" 
                id={`website-${variant}`}
                {...form.register("website")} 
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                placeholder="https://yourcompany.com" 
              />
              {form.formState.errors.website && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.website.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor={`business-${variant}`} className="block text-gray-700 font-medium mb-1 text-sm">Tell us about your goals</label>
              <textarea 
                id={`business-${variant}`}
                {...form.register("business")} 
                rows={2} 
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all" 
                placeholder="What are you looking to achieve?" 
              />
            </div>
          </div>
          
          <div className="relative mt-6">
            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 opacity-30 blur-lg -z-10 rounded-lg"></div>
            
            <button 
              type="submit" 
              className="w-full gradient-bg text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all text-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Request My Free Audit"
              )}
            </button>
          </div>
          
          {variant === "footer" && (
            <p className="text-gray-500 text-xs text-center mt-4">
              No obligation. You can use our recommendations with any marketing provider.
            </p>
          )}
        </form>
      )}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-300 rounded-full opacity-20 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h1 
              className="font-poppins font-bold text-4xl md:text-5xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              You Focus on Delivering <span className="text-gradient">Great Service</span><br/>
              We'll Focus on Delivering <span className="text-gradient">Great Customers</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We'll analyze your site and funnel - and show you what's broken with a free audit.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {renderAuditForm("hero")}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Still relying on word-of-mouth?</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Site looks outdated on mobile?</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">No real marketing strategy?</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* The Best Businesses Often Have the Worst Funnels */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              The Best Businesses Often Have the <span className="inline-block bg-orange-300/30 px-2 text-orange-600 rounded relative">Worst</span> Funnels. We Fix That.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-4 text-gray-800">What's Costing You</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Confused visitors leave your site</p>
                    <p className="text-gray-600 text-sm">They don't understand what you offer or why they should choose you</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Money wasted on low-quality traffic</p>
                    <p className="text-gray-600 text-sm">Your ads bring the wrong people who don't convert</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Leads disappear into the ether</p>
                    <p className="text-gray-600 text-sm">No proper follow-up system to nurture potential customers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-4 text-gray-800">What You Could Have</h3>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Clear messaging that converts</p>
                    <p className="text-gray-600 text-sm">Visitors immediately understand your value proposition</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Targeted traffic that's ready to buy</p>
                    <p className="text-gray-600 text-sm">Your ads attract the right people at the right time</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Automated lead nurturing</p>
                    <p className="text-gray-600 text-sm">Leads automatically followed up with and converted</p>
                  </div>
                </li>
              </ul>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 opacity-30 blur-lg -z-10 rounded-lg"></div>
                <Link 
                  href="#audit-form" 
                  className="block w-full gradient-bg text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all text-center"
                >
                  Get Your Free Audit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Audit Process */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block uppercase text-xs font-semibold tracking-wider text-orange-600 mb-2 px-3 py-1 bg-orange-50 rounded-full">SIMPLE & EFFECTIVE</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Audit Process</h2>
            <p className="text-gray-600 text-lg">
              We make it easy to discover what's holding your marketing back.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {auditProcess.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange-100/50 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Trust ReachFlow */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block uppercase text-xs font-semibold tracking-wider text-orange-600 mb-2 px-3 py-1 bg-orange-50 rounded-full">EXPERIENCED TEAM</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Why Trust ReachFlow</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {trustItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-poppins font-bold text-xl mb-4 text-orange-600">10,000+ Leads Generated</h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 Lead Gen</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Modern Website</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Traffic Control</span>
                </li>
              </ul>
              
              <p className="text-gray-600 text-sm">Backed by results, not geography. We've helped brands grow in the UK and globally.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* No More Leads Left on the Table */}
      <section id="audit-form" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">No More Leads Left on the Table</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              You don't need to learn funnels or hire a team. Just let us show you what's broken.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-12">
              {noMoreLeadsSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {renderAuditForm("footer")}
              
              <div className="flex justify-center items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">10K+ Leads Generated</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Trusted by brands</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">5-Star Rated Agency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-16 text-white transform translate-y-1/2" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        
        {/* Orange gradient glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-48 bg-orange-500 opacity-10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V16C21 16.9428 21 17.4142 20.7071 17.7071C20.4142 18 19.9428 18 19 18H5C4.05719 18 3.58579 18 3.29289 17.7071C3 17.4142 3 16.9428 3 16V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 14C6.6 14 8.4 17 12 17C15.6 17 17.4 14 21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 11C6.6 11 8.4 8 12 8C15.6 8 17.4 11 21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-poppins font-bold text-xl">Reach<span className="text-gradient">Flow</span></span>
            </Link>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/#services" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Services</a>
              <a href="/#audit" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Free Audit</a>
              <a href="/#contact" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center md:text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Marketing systems for businesses who deliver real results.
                </p>
                <p className="text-gray-400 text-sm">
                  We help great work get seen and convert online.
                </p>
              </div>
              <div className="text-right">
                <a href="mailto:hello@reachflow.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  hello@reachflow.com
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  &copy; {new Date().getFullYear()} ReachFlow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}