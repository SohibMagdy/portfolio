import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, label: 'Labs Completed', value: '100+' },
    { icon: Code, label: 'Projects', value: '8+' },
  ];

  const highlights = [
    'Expert in penetration testing and vulnerability assessment',
    'Proficient in web and network security analysis',
    'Advanced knowledge of OWASP Top 10 vulnerabilities',
    'Experienced with Burp Suite, Metasploit, and security tools',
    'Strong Linux administration and scripting skills',
    'Real-world labs and hands-on security experience',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00d9ff]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff] to-[#00ff41] rounded-2xl blur-xl opacity-30"></div>
              <img
                src="https://horizons-cdn.hostinger.com/75748f8e-abb0-435e-81f0-9c30ac4f89e5/c7f8696d5f68d29af593cf5ad7436c5d.jpg"
                alt="Sohib Magdy - Cyber Security Engineer"
                className="relative rounded-2xl shadow-2xl w-full border-2 border-[#00d9ff]/30"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Cyber Security <span className="text-[#00d9ff]">Professional</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate Cyber Security Engineer specializing in penetration testing and vulnerability assessment. With extensive hands-on experience in real-world security labs and a deep understanding of modern attack vectors, I help organizations identify and mitigate security risks before they become threats.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My expertise spans web application security, network penetration testing, and AI-powered security solutions. I combine technical proficiency with strong communication skills to deliver comprehensive security assessments and actionable recommendations.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-[#00d9ff] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 max-w-2xl mx-auto gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#0d1235] to-[#0a0e27] p-6 rounded-xl border border-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all shadow-lg hover:shadow-[#00d9ff]/20 text-center"
            >
              <stat.icon className="text-[#00d9ff] mb-3 mx-auto" size={32} />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;