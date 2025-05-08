import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const auditFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  website: z.string().url({ message: "Please enter a valid URL" }),
  business: z.string().optional(),
  goals: z.array(z.string()).optional(),
});

type AuditFormValues = z.infer<typeof auditFormSchema>;

export default function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
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

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-gray-50">
      {/* Abstract background elements */}
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/40 to-transparent"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-orange-300/30 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block uppercase text-xs font-semibold tracking-wider text-orange-600 mb-2 px-3 py-1 bg-orange-50 rounded-full">FREE ANALYSIS</span>
          <h2 className="font-poppins font-bold text-3xl md:text-[40px] leading-tight mb-5 tracking-tight">
            Get Your <span className="inline-block bg-orange-300/30 px-2 text-orange-600 rounded relative">Free</span> Marketing Audit
          </h2>
          <p className="text-gray-600 text-lg">
            Discover untapped opportunities to grow your business in less than 48 hours.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Form glow effect */}
          <div className="absolute -inset-4 bg-orange-300/10 blur-2xl rounded-xl -z-10"></div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-orange-100/50">
            {isSubmitted ? (
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">Your audit request has been received. Our team will analyze your marketing and get back to you within 48 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="gradient-bg text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="p-8 md:p-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      {...form.register("name")} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-300 transition-all" 
                      placeholder="John Smith" 
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Business Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      {...form.register("email")} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-300 transition-all" 
                      placeholder="john@yourcompany.com" 
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      {...form.register("phone")} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-300 transition-all" 
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website URL</label>
                    <input 
                      type="url" 
                      id="website" 
                      {...form.register("website")} 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-300 transition-all" 
                      placeholder="https://yourcompany.com" 
                    />
                    {form.formState.errors.website && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.website.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="business" className="block text-gray-700 font-medium mb-2">Tell us about your business</label>
                  <textarea 
                    id="business" 
                    {...form.register("business")} 
                    rows={3} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 hover:border-orange-300 transition-all" 
                    placeholder="What products/services do you offer? Who is your target audience?" 
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-3">What are your primary marketing goals?</label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                      <input 
                        type="checkbox" 
                        id="goal1" 
                        onChange={() => handleCheckboxChange("lead_generation")} 
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500 rounded border-gray-300" 
                      />
                      <label htmlFor="goal1" className="ml-3 text-gray-700 cursor-pointer">Generate more leads</label>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                      <input 
                        type="checkbox" 
                        id="goal2" 
                        onChange={() => handleCheckboxChange("conversion_rate")} 
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500 rounded border-gray-300" 
                      />
                      <label htmlFor="goal2" className="ml-3 text-gray-700 cursor-pointer">Improve conversion rates</label>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                      <input 
                        type="checkbox" 
                        id="goal3" 
                        onChange={() => handleCheckboxChange("brand_awareness")} 
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500 rounded border-gray-300" 
                      />
                      <label htmlFor="goal3" className="ml-3 text-gray-700 cursor-pointer">Increase brand awareness</label>
                    </div>
                    
                    <div className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50/30 transition-colors">
                      <input 
                        type="checkbox" 
                        id="goal4" 
                        onChange={() => handleCheckboxChange("roi")} 
                        className="w-5 h-5 text-orange-500 focus:ring-orange-500 rounded border-gray-300" 
                      />
                      <label htmlFor="goal4" className="ml-3 text-gray-700 cursor-pointer">Improve marketing ROI</label>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Button glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 opacity-30 blur-lg -z-10 rounded-lg"></div>
                  
                  <button 
                    type="submit" 
                    className="w-full gradient-bg text-white font-semibold py-4 rounded-lg shadow-xl hover:shadow-2xl hover:brightness-110 transition-all text-center text-lg hover:translate-y-[-2px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Get My Free Audit – Delivered in 48hrs
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>By submitting this form, you agree to our <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">Privacy Policy</a> and <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">Terms of Service</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
