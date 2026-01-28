import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here is where you would integrate EmailJS or your backend API
    console.log("Form Submitted:", formData);
    
    // Simulate success
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5s
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            We'd love to hear from you.
          </h3>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Have a question about our courses? Want to partner with us? Fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* --- LEFT COLUMN: INFO CARD --- */}
          <div className="lg:col-span-1 bg-blue-600 rounded-3xl p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <div>
              <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Email Us</p>
                    <a href="probuild.vet@gmail.com" className="text-lg font-bold hover:text-blue-200 transition-colors">probuild.vet@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Call Us</p>
                    <p className="text-lg font-bold">+91 9822959007</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Visit Us</p>
                    <p className="text-lg font-bold leading-tight">
                      123 Innovation Drive,<br/> Tech Valley, CA 94043
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials can go here */}
            <div className="mt-12 pt-8 border-t border-white/20">
               <p className="text-blue-200 text-sm mb-4">Follow us on social media</p>
               <div className="flex gap-4">
                 {/* ... icons ... */}
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={(e: any) => handleChange(e)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="course">Course Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;