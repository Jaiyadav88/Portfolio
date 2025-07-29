import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
const projects = [
  {
    id: 1,
    title: 'FileForge Converter',
    description: 'A file conversion and compression tool with backend in Spring Boot.',
    longDescription:
      'Developed a full-stack file conversion app using React and Spring Boot. Supported formats like PDF, JPG, PNG, DOCX, and ZIP compression. Integrated Apache PDFBox, POI, and Commons IO for processing and deployed on Vercel + backend REST APIs.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Spring Boot', 'Apache POI', 'Docker', 'Vercel'],
    category: 'Full-Stack',
    github: 'https://github.com/Jaiyadav88/FileConvertor-Frontend.git',
    demo: 'https://file-convertor-frontend-omega.vercel.app/'
  },
  {
    id: 2,
    title: 'Intrusion Detection System',
    description: 'Machine learning-based IDS for IoV environments.',
    longDescription:
      'Engineered and optimized machine learning models (SVM, Random Forest) for intrusion detection using CICIoV2024 dataset. Achieved a 25% reduction in false positives via feature engineering and Streamlit dashboard for interactive display.',
    image: 'https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Cyber-Security','Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
    category: ['Cyber-Security','AI/ML'],
    github: 'https://github.com/Jaiyadav88/Intrusion-Detection-System'
  },
  {
    id: 3,
    title: '8085 Emulator in java',
    description: 'A Java-based emulator for the 8085 microprocessor.',
    longDescription:
      'Developed a Java-based emulator for the 8085 microprocessor, simulating instruction execution and memory management. Implemented features like opcode decoding, memory read/write, and interrupt handling.',
    image: '/image.png',
    tech: ['Java', '8085 Emulator', 'Assembly Language'],
    category: 'Java-Core',  
    github: 'https://github.com/Jaiyadav88/8085-emulator-Java-.git',
    demo: '#'
  },
  {
  id: 4,
  title: 'Object Detection with YOLO',
  description: 'Real-time object detection system using YOLOv5.',
  longDescription:
    'Implemented an object detection pipeline using YOLOv5 to detect and classify objects in real-time video streams. Utilized OpenCV for frame capture, PyTorch for model inference, and custom-trained YOLO models on annotated datasets to enhance detection accuracy. Integrated Streamlit for a visual frontend.',
  image: '/678043-545-43a5-bcef-3b47472606_d36f5951-7637-4058-bcde-3ca940e590f1.jpeg',
  tech: ['YOLOv5', 'OpenCV', 'Streamlit'],
  category: 'AI/ML',
  github: 'https://github.com/Jaiyadav88/Object-Detection-YOLO',
  demo: '#'
  },
  {
  id: 5,
  title: 'SIC Assembler in Java',
  description: 'A two‑pass assembler simulator for the SIC/XE architecture.',
  longDescription:
    'Built a Java-based assembler for the Simplified Instructional Computer (SIC/XE). The tool performs symbol table generation, opcode processing, and object code production in two passes. Supports directives, literal handling, PC/base-relative addressing, and produces H‑T‑E record output for simulation.',
  image: '/SIC_img.png',
  tech: ['Java', 'SIC/XE', 'Assembler', 'Symbol Table'],
  category: 'System Programming',
  github: 'https://github.com/Jaiyadav88/Assembler-SIC-.git',
},
{
  id: 6,
  title: 'Employee Management System',
  description: 'Spring Boot CRUD app with Thymeleaf and TailwindCSS.',
  longDescription:
    'Developed a robust employee management system using Spring Boot for the backend and Thymeleaf with TailwindCSS for the frontend. The application supports full CRUD operations, allowing admins to add, view, update, and delete employee records. Integrated Hibernate with MySQL for data persistence and utilized Spring MVC architecture with RESTful principles. Designed a responsive UI with TailwindCSS for clean and modern visuals.',
  image: 'https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg?auto=compress&cs=tinysrgb&w=800',
  tech: ['Spring Boot', 'Thymeleaf', 'TailwindCSS', 'MySQL', 'Spring MVC'],
  category: 'Full-Stack',
  github: 'https://github.com/Jaiyadav88/Employee-Management-System.git',
  demo: '#'
}

];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Java-Core','Cyber-Security'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 group cursor-pointer ${
                project.id === 4 ? 'justify-self-center' : ''
              }`} 
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  className="flex items-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;