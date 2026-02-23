import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Code, Network, BookOpen } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'Cyber Security Fundamentals Training',
      issuer: 'NTI (National Telecommunication Institute)',
      description: 'Foundational training in network security concepts, basic firewall management, and threat awareness.',
      color: '#00d9ff',
    },
    {
      icon: Award,
      title: 'IEEE Cyber Security Workshops',
      issuer: 'IEEE Student Branch',
      description: 'Completed series of student-led workshops covering ethical hacking basics and introductory penetration testing.',
      color: '#00ff41',
    },
    {
      icon: Network,
      title: 'WE Cyber Security Awareness',
      issuer: 'WE (Telecom Egypt)',
      description: 'Introductory training program focusing on telecommunications security principles and safe network practices.',
      color: '#00d9ff',
    },
    {
      icon: BookOpen,
      title: 'Network Analysis Basics',
      issuer: 'University Coursework',
      description: 'Academic coursework and practical labs focused on network traffic analysis and understanding core protocols.',
      color: '#00ff41',
    },
    {
      icon: Code,
      title: 'Web Development Fundamentals',
      issuer: 'IEEE Student Branch',
      description: 'Basic full-stack web development training with an introduction to secure coding practices.',
      color: '#00d9ff',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="text-[#00d9ff]">Training</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic achievements, workshops, and foundational training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#0d1235] to-[#0a0e27] p-6 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all shadow-lg hover:shadow-2xl hover:shadow-[#00d9ff]/20 group"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${cert.color}20` }}
              >
                <cert.icon size={28} style={{ color: cert.color }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors">
                {cert.title}
              </h3>

              <p className="text-[#00d9ff] text-sm font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-[#00d9ff]/30 transition-colors">
                <div className="flex items-center gap-2 text-[#00ff41]">
                  <Award size={16} />
                  <span className="text-xs font-medium">Completed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;