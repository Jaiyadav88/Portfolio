import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Backend Developer','CyberSecurity Enthusiast' , 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);
  const DRIVE_FILE_ID = '1J0EiLaWQQyvLJM9S-zSR200D5-GHzJvT'
  const downloadResume = () => {
      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;
      link.download = 'Jai_Yadav_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/jaipic1.jpg"
              alt="Profile"
              className="w-50 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-500 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jai Yadav
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 mb-8 h-12">
            I'm a{' '}
            <span className="text-cyan-400 font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly digital experiences. 
            I turn ideas into reality through code and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={downloadResume}
            >
              Download Resume
            </button>
            <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              View My Work
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
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
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;