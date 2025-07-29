import React from 'react';
import { Shield, Server, Brain, Terminal } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Server,
      title: 'Robust Backends',
      description: 'Designing scalable and secure RESTful APIs using Spring Boot and Java.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Passionate about cybersecurity and building systems resilient to threats.'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Applied ML for real-time intrusion detection and predictive analytics.'
    },
    {
      icon: Terminal,
      title: 'DevOps Ready',
      description: 'Hands-on with Docker, Jenkins, and cloud deployments to streamline CI/CD.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              I'm a backend developer with a strong foundation in Spring Boot and REST APIs. With experience
              in DevOps, cloud, and machine learning, I build secure and scalable digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Me"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Building Secure Digital Infrastructure
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I thrive on building backend systems that are robust, secure, and efficient. My recent experience
                at JPMorgan Chase and in open-source contributions reflects a deep interest in DevOps,
                microservices, and backend engineering.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I also enjoy researching security vulnerabilities, experimenting with ML models for anomaly
                detection, and contributing to open-source Java projects.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  'Spring Boot',
                  'REST APIs',
                  'Java',
                  'Python',
                  'Docker',
                  'Jenkins',
                  'AWS',
                  'Machine Learning'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
