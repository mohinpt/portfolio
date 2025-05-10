
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Smartphone, MapPin } from 'lucide-react';
import { toast } from "react-hot-toast";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {

      toast.success("Thank you for contacting me. I'll get back to you soon.", {
        position: "bottom-right"
      });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  }, 1500);
};

const contactInfo = [
  { icon: <Mail size={20} />, text: 'info.mohin10@gmail.com' },
  { icon: <Smartphone size={20} />, text: '+880 1613736227' },
  { icon: <MapPin size={20} />, text: 'Dhaka, Bangladesh' },
];

const socialLinks = [
  { icon: <Github size={24} />, url: 'https://github.com/mohiin' },
  { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/themohin' },
];

return (
  <section id="contact" className="bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title text-center animate-on-scroll">Get In Touch</h2>
      <p className="section-subtitle text-center animate-on-scroll">
        Have a project in mind or want to chat? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-600">
                <div className="text-black">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <h4 className="text-xl font-bold text-slate-800 mb-4">Connect With Me</h4>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-slate-100 text-black hover:text-white hover:bg-black p-3 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded py-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 border border-slate-300 rounded py-2"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-black hover:bg-black/90 py-2 rounded"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default Contact;
