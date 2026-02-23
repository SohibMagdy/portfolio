import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'engsohibmagdy123@gmail.com',
      href: 'mailto:engsohibmagdy123@gmail.com',
      color: '#00d9ff'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+201019737633',
      href: 'tel:+201019737633',
      color: '#00ff41'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sohibmagdy',
      href: 'https://www.linkedin.com/in/sohib-magdy/',
      color: '#00d9ff'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#00d9ff]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Let's Secure Your Systems
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or need security consultation? I'm here to help protect your digital assets. Reach out through any of the platforms below.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : undefined}
                rel={info.label !== 'Email' && info.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#0d1235] to-[#0a0e27] p-6 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] group flex flex-col items-center text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon 
                    size={32} 
                    style={{ color: info.color }} 
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors">
                  {info.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors break-all">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#00d9ff]/10 to-[#00ff41]/10 p-8 rounded-xl border border-[#00d9ff]/30 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you need a security audit, penetration testing, or consultation on cybersecurity best practices, I'm here to help secure your digital infrastructure. Let's build a safer digital environment together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;