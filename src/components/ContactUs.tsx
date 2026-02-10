import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build the mailto link with form data
    const email = 'probuild.vet@gmail.com';
    const subjectText = formData.subject === 'course' ? 'Course Inquiry' 
                      : formData.subject === 'partnership' ? 'Partnership'
                      : formData.subject === 'general' ? 'General Question'
                      : 'Contact Form Message';
    
    const body = `Hi ProBUILD Team,\n\nName: ${formData.name}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
    
    // Encode for URL
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's email client in a new tab
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="pt-4 md:pt-6 pb-16 md:pb-24 bg-brand-cream relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            We'd love to hear from you.
          </h3>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
            Have a question about our courses? Want to partner with us? Fill out the form below.
          </p>
        </div>

        {/* --- THE FORM (Full Width) --- */}
        <div className="bg-brand-cream rounded-3xl p-8 md:p-10 shadow-xl border border-yellow-100">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name - Full Width */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
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

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <select 
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
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
              className="w-full py-4 bg-slate-900 text-white font-semibold rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;