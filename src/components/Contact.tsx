import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="space-y-8 max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Let's Talk</h3>
              <p className="text-slate-400 mb-6 leading-relaxed text-center">
                I'm always open to discussing new opportunities, creative projects, or just having a 
                conversation about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-slate-400">jaiyadav8875@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-slate-400">+91 8954451656</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-slate-400">Dehradun, Uttarakhand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
