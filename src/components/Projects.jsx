import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Terminal, Lock, Server, Wifi } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: 'AI-Powered Network Monitoring and Alert System',
      description: 'Developed an intelligent network monitoring system that uses machine learning algorithms to detect anomalies and potential security threats in real-time. The system analyzes network traffic patterns and automatically generates alerts for suspicious activities.',
      techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Wireshark', 'Flask'],
      results: [
        '95% accuracy in threat detection',
        'Reduced false positives by 60%',
        'Real-time monitoring of 1000+ endpoints',
      ],
      color: '#00d9ff',
    },
    {
      icon: Shield,
      title: 'AI-Powered Automated Defense System',
      description: 'Created an automated defense system that leverages artificial intelligence to identify, analyze, and respond to cyber attacks. The system implements adaptive security measures and learns from each attack to improve future defenses.',
      techStack: ['Python', 'PyTorch', 'Snort', 'Suricata', 'Docker'],
      results: [
        'Automated response to 80% of common attacks',
        'Average response time under 2 seconds',
        'Successfully blocked 500+ attack attempts',
      ],
      color: '#00ff41',
    },
    {
      icon: Zap,
      title: 'Intelligent Cybersecurity Framework for Smart Grid Security',
      description: 'Designed and implemented a comprehensive cybersecurity framework specifically for smart grid infrastructure. The framework includes threat modeling, vulnerability assessment, and automated security controls to protect critical energy systems.',
      techStack: ['Python', 'ICS Security Tools', 'SCADA', 'Modbus', 'DNP3'],
      results: [
        'Protected 50+ smart grid nodes',
        'Identified 30+ critical vulnerabilities',
        'Implemented zero-trust architecture',
      ],
      color: '#00d9ff',
    },
    {
      icon: Terminal,
      title: 'Automated Vulnerability Scanner Script',
      description: 'Built a custom Bash and Python-based automation tool that chains together multiple open-source security scanners (Nmap, Nikto, SQLMap) to perform initial reconnaissance and vulnerability scanning on target IP addresses.',
      techStack: ['Bash', 'Python', 'Nmap', 'Nikto', 'Linux'],
      results: [
        'Reduced manual scanning time by 70%',
        'Generates consolidated HTML reports',
        'Easily extensible for new tools',
      ],
      color: '#00ff41',
    },
    {
      icon: Lock,
      title: 'Educational Keylogger & Malware Analysis Lab',
      description: 'Developed a basic keylogger in C++ for educational purposes to understand malware behavior, persistence mechanisms, and API hooking. Created a safe, isolated lab environment to analyze its network and system footprint.',
      techStack: ['C++', 'Windows API', 'VirtualBox', 'Wireshark'],
      results: [
        'Demonstrated API hooking techniques',
        'Documented IOCs (Indicators of Compromise)',
        'Presented findings in a student workshop',
      ],
      color: '#00d9ff',
    },
    {
      icon: Server,
      title: 'Vulnerable Web App for CTF Competitions',
      description: 'Designed and deployed a deliberately vulnerable web application featuring OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR) to be used as a training ground for university Capture The Flag (CTF) events.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Docker', 'HTML/CSS'],
      results: [
        'Hosted 3 successful student CTF events',
        'Included 15+ unique vulnerability flags',
        'Provided detailed write-ups for beginners',
      ],
      color: '#00ff41',
    },
    {
      icon: Wifi,
      title: 'Phishing Simulation & Awareness Campaign',
      description: 'Set up a controlled phishing simulation using GoPhish to test and improve the security awareness of student groups. Analyzed click rates and provided follow-up educational materials on identifying social engineering attacks.',
      techStack: ['GoPhish', 'SMTP', 'HTML/CSS', 'Data Analysis'],
      results: [
        'Simulated attacks on 200+ participants',
        'Improved reporting rates by 40%',
        'Created comprehensive awareness guides',
      ],
      color: '#00d9ff',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0d1235]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00d9ff]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hands-on security solutions, tools, and research projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-[#0d1235] to-[#0a0e27] rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all shadow-lg hover:shadow-2xl hover:shadow-[#00d9ff]/30 overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex-1">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <project.icon size={32} style={{ color: project.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d9ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#00d9ff] mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-[#0a0e27] text-gray-300 text-xs rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#00ff41] mb-2">Results & Impact:</p>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-[#00ff41] mt-1">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;