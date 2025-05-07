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
    <section id="audit" className="py-20 bg-white relative">
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-300/30 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="font-poppins font-bold text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get Your Free Marketing Audit
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover untapped opportunities to grow your business in less than 48 hours.
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="p-6 md:p-10 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-poppins font-bold text-2xl mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">Your audit request has been received. Our team will analyze your marketing and get back to you within 48 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="gradient-bg text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="p-6 md:p-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      {...form.register("name")} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all" 
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all" 
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all" 
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website URL</label>
                    <input 
                      type="url" 
                      id="website" 
                      {...form.register("website")} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all" 
                      placeholder="https://yourcompany.com" 
                    />
                    {form.formState.errors.website && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.website.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="business" className="block text-gray-700 font-medium mb-2">Tell us about your business</label>
                  <textarea 
                    id="business" 
                    {...form.register("business")} 
                    rows={3} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all" 
                    placeholder="What products/services do you offer? Who is your target audience?" 
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">What are your primary marketing goals?</label>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="goal1" 
                        onChange={() => handleCheckboxChange("lead_generation")} 
                        className="w-4 h-4 text-orange-600 focus:ring-orange-600 rounded" 
                      />
                      <label htmlFor="goal1" className="ml-2 text-gray-700">Generate more leads</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="goal2" 
                        onChange={() => handleCheckboxChange("conversion_rate")} 
                        className="w-4 h-4 text-orange-600 focus:ring-orange-600 rounded" 
                      />
                      <label htmlFor="goal2" className="ml-2 text-gray-700">Improve conversion rates</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="goal3" 
                        onChange={() => handleCheckboxChange("brand_awareness")} 
                        className="w-4 h-4 text-orange-600 focus:ring-orange-600 rounded" 
                      />
                      <label htmlFor="goal3" className="ml-2 text-gray-700">Increase brand awareness</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="goal4" 
                        onChange={() => handleCheckboxChange("roi")} 
                        className="w-4 h-4 text-orange-600 focus:ring-orange-600 rounded" 
                      />
                      <label htmlFor="goal4" className="ml-2 text-gray-700">Improve marketing ROI</label>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full gradient-bg text-white font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
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
                      Submit Your Audit Request
                      <span className="block text-sm mt-1 opacity-90">(You'll hear back within 48 hours)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>By submitting this form, you agree to our <a href="#" className="text-orange-600 underline">Privacy Policy</a> and <a href="#" className="text-orange-600 underline">Terms of Service</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
