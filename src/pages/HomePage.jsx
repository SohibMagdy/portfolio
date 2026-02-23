import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Skills from '@/components/Skills.jsx';
import Projects from '@/components/Projects.jsx';
import Certifications from '@/components/Certifications.jsx';
import Experience from '@/components/Experience.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sohib Magdy - Cyber Security Engineer & Penetration Tester</title>
        <meta
          name="description"
          content="Professional cybersecurity portfolio showcasing penetration testing, vulnerability assessment, and AI-powered security solutions by Sohib Magdy, an experienced Cyber Security Engineer."
        />
        <meta name="keywords" content="cybersecurity, penetration testing, vulnerability assessment, ethical hacking, security engineer, VAPT, web security, network security" />
        <meta property="og:title" content="Sohib Magdy - Cyber Security Engineer & Penetration Tester" />
        <meta property="og:description" content="Professional cybersecurity portfolio showcasing penetration testing, vulnerability assessment, and AI-powered security solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sohib Magdy - Cyber Security Engineer & Penetration Tester" />
        <meta name="twitter:description" content="Professional cybersecurity portfolio showcasing penetration testing, vulnerability assessment, and AI-powered security solutions" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0e27]">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;