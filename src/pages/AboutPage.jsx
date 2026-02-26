import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">Expertise in ICT and Telecommunications</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Consorient Solutions was founded with a singular mission: to bridge the digital divide by providing superior
              engineering and infrastructure services. We specialize in creating the literal foundation of modern communication.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team consists of certified engineers and project managers who bring decades of combined experience in
              high-stakes technology environments.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Professional engineering standards',
                'Innovation-led approach',
                'Reliability and redundancy',
                'Sustainable infrastructure'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-800 font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-900 rounded-full opacity-10 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              className="rounded-3xl shadow-2xl relative z-10"
              alt="Office meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
