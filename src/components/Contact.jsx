import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import useMagneticHover from '../hooks/useMagneticHover';
import TiltCard from './TiltCard';

const Contact = () => {
  const magneticBtn = useMagneticHover(0.25);
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'garvpratapsinghhh@gmail.com',
      href: 'mailto:garvpratapsinghhh@gmail.com',
      color: 'text-primary',
      hoverColor: 'hover:text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      glow: 'shadow-primary/20',
    },
    {
      icon: <Phone size={20} />,
      label: 'Mobile',
      value: '+91 9120956689',
      color: 'text-accent',
      hoverColor: 'hover:text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      glow: 'shadow-accent/20',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Punjab, India',
      color: 'text-neon',
      hoverColor: 'hover:text-neon',
      bgColor: 'bg-neon/10',
      borderColor: 'border-neon/20',
      glow: 'shadow-neon/20',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:garvpratapsinghhh@gmail.com?subject=${subject}&body=${body}`, '_self');
      setSent(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative animated blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 opacity-15 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', willChange: 'opacity' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 opacity-10 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #ff2d9b, transparent)', willChange: 'opacity', animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            {'// get in touch'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 tracking-tight">
            Let's Build <span className="neon-text">Together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Contact <span className="text-primary">Information</span>
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              I'm currently looking for new opportunities as a Software Engineer.
              Whether you have a question or just want to say hi, let's connect!
            </p>

            <div className="space-y-4">
              {contactItems.map((item, idx) => (
                <div key={idx}>
                  <TiltCard className={`cyber-card p-4 rounded-xl flex items-center gap-4 group border ${item.borderColor}`} intensity={6}>
                    <div className={`p-3 ${item.bgColor} rounded-xl ${item.color} transition-all duration-300 group-hover:shadow-lg ${item.glow}`}>
                      {item.icon}
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs font-mono text-gray-600 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`text-sm font-medium text-gray-200 ${item.hoverColor} transition-colors link-glow`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-200">{item.value}</p>
                      )}
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>

            {/* Status indicator */}
            <div
              className="mt-8 flex items-center gap-2 text-sm"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-neon"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ boxShadow: '0 0 10px #00ff88' }}
              />
              <span className="text-gray-500 font-mono text-xs">status: <span className="text-neon">open to work</span></span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="cyber-card p-8 rounded-2xl" intensity={5}>
              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle size={48} className="text-neon mb-4" style={{ filter: 'drop-shadow(0 0 12px #00ff88)' }} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm text-center">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="mt-6 text-xs font-mono text-primary hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder-gray-700 ${focused === 'name' ? 'border-primary/50 shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'border-white/5'
                          }`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder-gray-700 ${focused === 'email' ? 'border-primary/50 shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'border-white/5'
                          }`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      rows="4"
                      className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder-gray-700 resize-none ${focused === 'message' ? 'border-primary/50 shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'border-white/5'
                        }`}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div {...magneticBtn}>
                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl font-bold text-white flex items-center justify-center gap-2 btn-cyber hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all text-sm uppercase tracking-wider">
                      <Send size={16} />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
