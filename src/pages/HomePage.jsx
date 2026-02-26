import React from 'react';
import { ArrowRight, ChevronRight, Settings, Wifi, Zap } from 'lucide-react';

const HomePage = ({ navigate }) => {
  return (
    <div>
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
            alt="Telecommunications"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-6 animate-pulse">
              Innovation in Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building the Future of <span className="text-blue-400">Connectivity</span>
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed">
              Consorient Solutions provides world-class ICT and telecommunications infrastructure engineering. From fiber optics
              to network towers, we connect the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('services')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Explore Services <ArrowRight className="ml-2" />
              </button>
              <button
                onClick={() => navigate('about')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                About Our Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Network Towers', value: '1.2k' },
              { label: 'Partners Worldwide', value: '45+' },
              { label: 'Expert Engineers', value: '150+' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi size={32} />,
                title: 'Network Infrastructure',
                desc: 'End-to-end design and deployment of robust network backbones.'
              },
              {
                icon: <Settings size={32} />,
                title: 'Equipment Installation',
                desc: 'Expert calibration and installation of telecommunications hardware.'
              },
              {
                icon: <Zap size={32} />,
                title: 'Power Solutions',
                desc: 'Sustainable and reliable power backup for critical ICT facilities.'
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <button onClick={() => navigate('services')} className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                  Read More <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 -skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your infrastructure?</h2>
            <p className="text-blue-100 text-lg">Partner with Consorient Solutions for your next big project.</p>
          </div>
          <button
            onClick={() => navigate('contact')}
            className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
