import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Jai Yadav
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I'm a backend developer with a passion for building secure and scalable digital solutions. 
                Let's connect and create something amazing together!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/Jaiyadav88' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/jaiyadav12/' },
                  { icon: Mail, href: 'mailto:jaiyadav8875@gmail.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Backend Development', 'DevOps', 'Cybersecurity', 'Machine Learning'].map((service) => (
                  <li key={service}>
                    <span className="text-slate-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center">
              Made with <Heart className="text-red-500 mx-2" size={16} /> by Jai Yadav
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;