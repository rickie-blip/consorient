import React from 'react';
import { ShieldCheck, Wifi, Zap } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Core Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end technical solutions tailored for enterprise and governmental telecommunications needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {[
            {
              title: 'Network Infrastructure & Towers',
              icon: <Wifi size={40} />,
              image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
              items: ['Tower Foundation & Erection', 'Antenna Positioning', 'Microwave Link Setup', 'Fiber Optic Splicing & Maintenance']
            },
            {
              title: 'Enterprise IT & Cybersecurity',
              icon: <ShieldCheck size={40} />,
              image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
              items: ['Managed IT Services', 'Network Security Audits', 'Cloud Migration', 'Disaster Recovery Planning']
            },
            {
              title: 'Power & Environmental Solutions',
              icon: <Zap size={40} />,
              image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
              items: ['Solar Energy Systems', 'Backup Generator Install', 'Precision Cooling Systems', 'UPS Deployment']
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row gap-12 items-center p-8 rounded-3xl bg-white shadow-sm border border-gray-100 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-blue-50 text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-colors">
                  Technical Specifications
                </button>
              </div>
              <div className="lg:w-1/2">
                <img src={service.image} alt={service.title} className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
