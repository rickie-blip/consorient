import React from 'react';
import { Mail, MapPin, PhoneCall, Zap } from 'lucide-react';

const Footer = ({ navigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Zap className="text-blue-400 mr-2" />
              <span className="text-xl font-bold">CONSORIENT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the way in ICT and Telecommunications infrastructure across the region. Engineering excellence for a
              connected world.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => navigate('about')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('projects')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-500 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Network Infrastructure</li>
              <li>Fiber Optics & Towers</li>
              <li>Power Solutions</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-500 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>123 Tech Plaza, Corporate District, Enterprise City</span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400 flex-shrink-0" />
                <span>info@consorient.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Consorient Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
