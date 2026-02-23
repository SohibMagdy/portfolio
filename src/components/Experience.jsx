import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Vulnerability Analyst & Penetration Testing Intern',
      company: 'DEPI (Digital Egypt Pioneers Initiative)',
      period: '2023 - 2024',
      type: 'Internship',
      highlights: [
        'Conducted comprehensive vulnerability assessments on web applications and network infrastructure',
        'Performed penetration testing using industry-standard tools (Burp Suite, Metasploit, Nmap)',
        'Participated in real-world security labs simulating actual attack scenarios',
        'Attended hands-on workshops covering OWASP Top 10 vulnerabilities',
        'Collaborated with peers to identify and remediate critical vulnerabilities',
        'Documented findings and practiced writing detailed security reports with remediation recommendations',
      ],
      color: '#00d9ff',
    },
    {
      icon: GraduationCap,
      title: 'Cyber Security Instructor',
      company: 'IEEE Student Branch',
      period: '2022 - Present',
      type: 'Leadership & Teaching',
      highlights: [
        'Led cybersecurity training sessions for fellow students covering ethical hacking and penetration testing basics',
        'Helped design and deliver introductory curriculum on network security and web application security',
        'Organized hands-on workshops demonstrating fundamental attack techniques and defense strategies',
        'Mentored junior students in security research projects and beginner CTF competitions',
        'Developed practical lab exercises for vulnerability assessment and exploitation',
        'Fostered a community of security enthusiasts through regular meetups and knowledge sharing',
      ],
      color: '#00ff41',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Practical <span className="text-[#00d9ff]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on learning, workshops, and technical leadership experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d9ff] to-[#00ff41] hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-[#0a0e27] hidden md:block" style={{ backgroundColor: exp.color }}></div>

                  <div className="md:ml-20 bg-gradient-to-br from-[#0d1235] to-[#0a0e27] rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all shadow-lg hover:shadow-2xl hover:shadow-[#00d9ff]/20 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <exp.icon size={24} style={{ color: exp.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-[#00d9ff] font-medium mb-1">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="text-gray-400">{exp.period}</span>
                            <span className="px-2 py-1 bg-[#0a0e27] text-[#00ff41] text-xs rounded border border-[#00ff41]/30">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={hIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + hIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="text-[#00ff41] flex-shrink-0 mt-0.5" size={18} />
                            <p className="text-gray-300 leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;