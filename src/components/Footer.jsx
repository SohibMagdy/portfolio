import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/sohibmagdy', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/sohibmagdy', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/sohibmagdy', label: 'Twitter' },
    { icon: Mail, href: 'mailto:sohib.magdy@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-gradient-to-b from-[#0a0e27] to-[#050818] border-t border-[#00d9ff]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">
              <span className="text-[#00d9ff]">Sohib</span> Magdy
            </span>
            <p className="text-gray-400 mb-4">
              Cyber Security Engineer specializing in penetration testing and vulnerability assessment.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#0d1235] border border-gray-800 hover:border-[#00d9ff] flex items-center justify-center text-gray-400 hover:text-[#00d9ff] transition-all hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Get In Touch</span>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="text-[#00d9ff]">Email:</span> engsohibmagdy123@gmail.com
              </p>
              <p>
                <span className="text-[#00d9ff]">Phone:</span> +201019737633
              </p>
              <p>
                <span className="text-[#00d9ff]">Location:</span> Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sohib Magdy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Built with <span className="text-[#00d9ff]">React</span> & <span className="text-[#00d9ff]">TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;