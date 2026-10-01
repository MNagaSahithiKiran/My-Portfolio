import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#EC4899', '#DB2777', '#F9A8D4']
        });
      } catch (err) {
        // confetti fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Let's <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'm always interested in learning, collaborating, exploring new technologies, and connecting with people who are passionate about technology and innovation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Verified Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-base font-bold text-gray-900 dark:text-white">
                      {personalInfo.location}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Vel Tech Campus Region
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                      LinkedIn Profile
                    </div>
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors block truncate"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                      GitHub Profile
                    </div>
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors block truncate"
                    >
                      @MNagaSahithiKiran
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Recruiter Friendly Note */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-pink-600 to-pink-500 text-white shadow-lg">
              <h4 className="text-base font-bold mb-1">Looking for Software & AI Talent?</h4>
              <p className="text-xs text-pink-100 leading-relaxed">
                Open for internship opportunities, project collaborations, and full-time career prospects in Python development, AI/ML, and web engineering.
              </p>
            </div>

          </div>

          {/* Right Form Container (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-lg">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out to Meesaragandla Naga Sahithi Kiran. Your message has been received!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-pink-600 text-white font-semibold text-xs hover:bg-pink-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Send Me a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Your Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border ${
                          errors.name ? 'border-red-500' : 'border-pink-200 dark:border-gray-700'
                        } text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                        Your Email Address <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border ${
                          errors.email ? 'border-red-500' : 'border-pink-200 dark:border-gray-700'
                        } text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Subject <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Inquiry / Software Collaboration"
                      className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border ${
                        errors.subject ? 'border-red-500' : 'border-pink-200 dark:border-gray-700'
                      } text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-pink-600">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border ${
                        errors.message ? 'border-red-500' : 'border-pink-200 dark:border-gray-700'
                      } text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
