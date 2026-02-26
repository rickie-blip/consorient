import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Project Portfolio</h1>
            <p className="text-gray-600 max-w-xl">
              Building trust through proven technical execution. Explore our recent large-scale infrastructure projects.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-2">
            {['All', 'Telecom', 'Energy', 'IT'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-white hover:shadow-sm transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              client: 'GlobalNet Telecom',
              city: 'Metropolis',
              type: 'Tower Deployment',
              img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'City Data Center',
              city: 'Inland Hub',
              type: 'Power Redundancy',
              img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Maritime Ltd',
              city: 'Coastal Port',
              type: 'Fiber Optics',
              img: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Horizon Finance',
              city: 'Business Dist',
              type: 'Cybersecurity',
              img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'Rural Reach',
              city: 'Region North',
              type: 'WISP Setup',
              img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
            },
            {
              client: 'EcoPower',
              city: 'Desert Plains',
              type: 'Solar Microgrid',
              img: 'https://images.unsplash.com/photo-1509391366360-fe09a921881e?auto=format&fit=crop&q=80&w=600'
            }
          ].map((p, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">{p.type}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.client}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={14} className="mr-1" /> {p.city}
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Successful implementation of a robust connectivity solution involving multi-site coordination and rapid
                  deployment.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-tighter">View Details</span>
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
