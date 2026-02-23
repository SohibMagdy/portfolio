import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Animated Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e27]/50 to-[#0a0e27]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[#00d9ff] text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-[#00d9ff]">Sohib</span> Magdy
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cyber Security Engineer | Penetration Tester | Vulnerability Analyst
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Combining hands-on penetration testing, real-world attack simulations, and AI-powered security solutions to proactively detect, exploit, and defend against modern threats
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => handleNavClick('#projects')}
              className="bg-[#00d9ff] hover:bg-[#00d9ff]/90 text-[#0a0e27] font-semibold px-8 py-6 text-lg shadow-lg shadow-[#00d9ff]/50 hover:shadow-[#00d9ff]/70 transition-all"
            >
              View Projects
            </Button>
            <Button
              onClick={() => handleNavClick('#contact')}
              variant="outline"
              className="border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 font-semibold px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-[#00d9ff]" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;