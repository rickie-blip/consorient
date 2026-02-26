import React from 'react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Get In Touch</h1>
            <p className="text-lg text-gray-600 mb-12">
              Have a technical requirement? Our expert consultants are ready to discuss your infrastructure needs.
            </p>

            <div className="space-y-8">
              {[
                { title: 'Headquarters', content: '123 Tech Plaza, Corporate District, Enterprise City' },
                { title: 'Direct Support', content: '+1 (555) 012-3456' },
                { title: 'General Inquiry', content: 'info@consorient.com' },
                { title: 'Business Hours', content: 'Mon - Fri: 8:00 AM - 6:00 PM' }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-1 bg-gray-200 rounded-2xl overflow-hidden h-64 grayscale contrast-125 border border-gray-300">
              <div className="w-full h-full bg-blue-50 relative flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-700">MAP PREVIEW</span>
                <span className="absolute bottom-4 text-xs font-bold text-gray-400">EMBEDDED INTERACTIVE MAP</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                  <option>Infrastructure Quote</option>
                  <option>Network Consultation</option>
                  <option>Partner Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="Describe your project requirements..."
                />
              </div>
              <button className="w-full py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
