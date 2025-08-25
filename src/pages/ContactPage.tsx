import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send,
  CheckCircle 
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 3000);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const contactInfo = [
    { icon: Mail, title: 'Email', content: 'info@cornerstoneethmia.com', description: 'Send us an email anytime' }
  ];

  const services = [
    'Commercial Enterprise Investment', 'Agricultural Investment', 'Oil & Gas Projects', 'Commercial Brokerage', 'Management Consulting', 'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-32 sm:py-40 text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-brand"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Ready to explore investment opportunities? Let's start the conversation.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Get in Touch</h2>
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                We're here to answer your questions and discuss how we can help you achieve your investment goals.
              </p>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="flex items-start" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4 border border-border"><info.icon className="text-brand" size={24} /></div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">{info.title}</h3>
                      <p className="text-text-primary font-medium">{info.content}</p>
                      <p className="text-text-secondary text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-8 rounded-lg shadow-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a Message</h3>
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <CheckCircle className="text-accent mx-auto mb-4" size={64} />
                  <h4 className="text-xl font-semibold text-accent mb-2">Message Sent!</h4>
                  <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors text-text-primary" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors text-text-primary" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors text-text-primary" placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Service of Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-colors text-text-primary">
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (<option key={index} value={service}>{service}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Message *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent resize-none text-text-primary" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Send Message <Send className="ml-2" size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
