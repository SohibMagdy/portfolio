import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Code, Monitor, Users } from 'lucide-react';
const Skills = () => {
  const skillCategories = [{
    icon: Shield,
    title: 'Offensive Security',
    skills: ['VAPT', 'OWASP Top 10', 'Web Pentesting', 'Burp Suite', 'Metasploit', 'Nmap', 'SQLMap'],
    color: '#00d9ff'
  }, {
    icon: Network,
    title: 'Networking',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'OSI Model', 'Network Analysis', 'Wireshark', 'Packet Analysis'],
    color: '#00ff41'
  }, {
    icon: Code,
    title: 'Programming & Scripting',
    skills: ['Python', 'Bash', 'C', 'C++', 'JavaScript', 'PHP', 'SQL'],
    color: '#00d9ff'
  }, {
    icon: Monitor,
    title: 'Operating Systems',
    skills: ['Kali Linux', 'Windows', 'Linux Administration', 'Ubuntu', 'Debian', 'System Hardening'],
    color: '#00ff41'
  }, {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Leadership', 'Technical Teaching', 'Communication', 'Problem-Solving', 'Team Collaboration', 'Documentation'],
    color: '#00d9ff'
  }];
  return <section id="skills" className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-[#00d9ff]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto"></p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.03,
          y: -5
        }} className="bg-gradient-to-br from-[#0d1235] to-[#0a0e27] p-6 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all shadow-lg hover:shadow-2xl hover:shadow-[#00d9ff]/20 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg" style={{
              backgroundColor: `${category.color}20`
            }}>
                  <category.icon size={28} style={{
                color: category.color
              }} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => <motion.span key={skillIndex} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: index * 0.1 + skillIndex * 0.05
            }} className="px-3 py-1.5 bg-[#0a0e27] text-gray-300 text-sm rounded-full border border-gray-700 hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all">
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Skills;