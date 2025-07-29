import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Java', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'Spring Boot', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'REST APIs', level: 88, color: 'from-blue-400 to-cyan-500' },
    { name: 'Python', level: 80, color: 'from-yellow-400 to-blue-500' },
    { name: 'Machine Learning (scikit-learn)', level: 75, color: 'from-pink-400 to-purple-500' },
    { name: 'Cybersecurity (IDS, Splunk)', level: 70, color: 'from-red-500 to-pink-500' },
    { name: 'Docker & Jenkins', level: 80, color: 'from-sky-400 to-indigo-500' },
    { name: 'AWS', level: 70, color: 'from-orange-400 to-yellow-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Here are the technologies and tools I use to build secure, scalable, and intelligent applications.
            </p>
          </div>

          <div id="skills-section" className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-cyan-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Spring Boot', 'REST APIs', 'Java', 'Python', 'scikit-learn',
                'Docker', 'Jenkins', 'AWS', 'MongoDB', 'MySQL',
                'Postman', 'Splunk', 'Git', 'VS Code', 'Bitbucket'
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 hover:text-cyan-400 transition-colors duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
