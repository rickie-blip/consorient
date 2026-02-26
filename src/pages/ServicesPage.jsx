import React from 'react';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-container">
        <div className="services-page__header">
          <h1 className="services-page__title">Our Core Services</h1>
          <p className="services-page__subtitle">
            We offer end-to-end technical solutions tailored for enterprise and governmental telecommunications needs.
          </p>
        </div>

        <div className="services-page__list">
          {[
            {
              title: 'Network Infrastructure & Towers',
              image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
              items: ['Tower Foundation & Erection', 'Antenna Positioning', 'Microwave Link Setup', 'Fiber Optic Splicing & Maintenance']
            },
            {
              title: 'Enterprise IT & Cybersecurity',
              image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
              items: ['Managed IT Services', 'Network Security Audits', 'Cloud Migration', 'Disaster Recovery Planning']
            },
            {
              title: 'Power & Environmental Solutions',
              image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
              items: ['Solar Energy Systems', 'Backup Generator Install', 'Precision Cooling Systems', 'UPS Deployment']
            }
          ].map((service, idx) => (
            <div key={idx} className={`services-card ${idx % 2 === 1 ? 'services-card--reverse' : ''}`}>
              <div className="services-card__text-col">
                <h2 className="services-card__title">{service.title}</h2>
                <ul className="services-card__items">
                  {service.items.map((item, i) => (
                    <li key={i} className="services-card__item">
                      <div className="services-card__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="services-card__button">Technical Specifications</button>
              </div>
              <div className="services-card__image-col">
                <img src={service.image} alt={service.title} className="services-card__image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
