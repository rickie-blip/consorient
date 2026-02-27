import React from 'react';
import '../styles/ServicesPage.css';
import profileServices from '../assets/pdf/profile-services.png';
import profileCover from '../assets/pdf/profile-cover.png';
import profileStrengths from '../assets/pdf/profile-strengths.png';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-container">
        <div className="services-page__header">
          <h1 className="services-page__title">Our Core Services</h1>
          <p className="services-page__subtitle">
            We provide end-to-end technical services across network deployment, infrastructure support, and enterprise ICT.
          </p>
        </div>

        <div className="services-page__list">
          {[
            {
              title: 'Network Infrastructure Deployment',
              image: profileServices,
              items: ['Fiber optic network installation', 'Tower construction', 'Wireless solutions', 'Data center setup']
            },
            {
              title: 'Equipment and Maintenance',
              image: profileCover,
              items: ['Antenna and satellite dish installation', 'Active equipment installation', 'Structured cabling', 'Preventive maintenance and system upgrades']
            },
            {
              title: 'Power and Managed Support',
              image: profileStrengths,
              items: ['Backup power systems', 'Energy management', 'Fault resolution', 'Network performance and site monitoring']
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
