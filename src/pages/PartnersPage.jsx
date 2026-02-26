import React from 'react';

const PartnersPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Strategic Partners</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Consorient Solutions collaborates with leading global technology providers to ensure our clients receive the highest
          quality equipment and software.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <div key={n} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-sm font-bold text-gray-500">P{n}</span>
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Partner {n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
