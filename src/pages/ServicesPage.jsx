import React from 'react';
import '../styles/ServicesPage.css';
import networkInfrastructure from '../assets/images/services/network-infrastructure-africa.png';
import equipmentInstallation from '../assets/images/services/equipment-installation-africa.png';
import powerSolutions from '../assets/images/services/power-solutions-africa.png';
import projectManagement from '../assets/images/services/project-management-africa.png';
import maintenanceSupport from '../assets/images/services/maintenance-support-africa.png';
import cloudCybersecurity from '../assets/images/services/cloud-cybersecurity-africa.png';

const serviceGroups = [
  {
    title: 'Network Infrastructure Deployment',
    image: networkInfrastructure,
    intro: 'Design and rollout of reliable connectivity backbones for public and private networks.',
    items: [
      'Fiber optic network installation',
      'Tower construction',
      'Wireless solutions',
      'Data center setup'
    ]
  },
  {
    title: 'Equipment Installation and Integration',
    image: equipmentInstallation,
    intro: 'Field-ready installation and configuration for telecom and enterprise equipment.',
    items: [
      'Antenna and satellite dish installation',
      'Active equipment installation',
      'Structured cabling',
      'IT hardware and software supply'
    ]
  },
  {
    title: 'Power and Energy Solutions',
    image: powerSolutions,
    intro: 'Resilient power systems that keep operations stable in demanding environments.',
    items: [
      'Backup power systems',
      'Energy management',
      'Power environment readiness',
      'Operational continuity planning'
    ]
  },
  {
    title: 'Project Delivery and Implementation',
    image: projectManagement,
    intro: 'Execution support from planning through handover for multi-site projects.',
    items: [
      'Site acquisition and permitting',
      'Turnkey projects',
      'Deployment coordination',
      'Implementation quality control'
    ]
  },
  {
    title: 'Maintenance, Monitoring, and Support',
    image: maintenanceSupport,
    intro: 'Ongoing service reliability through preventive care and performance tracking.',
    items: [
      'Preventive maintenance',
      'Fault resolution',
      'System upgrades',
      'Network performance monitoring',
      'Site monitoring'
    ]
  },
  {
    title: 'Business IT, Cloud, and Cybersecurity',
    image: cloudCybersecurity,
    intro: 'Enterprise ICT services that improve business efficiency and security posture.',
    items: [
      'Network solutions (LAN, SDWAN, WAN, Wi-Fi)',
      'Business management software',
      'IT hardware and software supply',
      'Outsourced IT services',
      'Email management',
      'Cloud solutions',
      'Cyber security'
    ]
  }
];

const ranCapabilities = [
  'Public network coverage for dense urban environments',
  'Public network coverage for suburban environments',
  'Public network indoor coverage',
  'Rural area mobile networks end-to-end solution',
  'Fixed wireless access end-to-end solution',
  'Industrial private network end-to-end solution',
  'RAN solutions and product support'
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-container">
        <section className="services-page__hero">
          <p className="services-page__hero-badge">Services</p>
          <h1 className="services-page__hero-title">End-to-End ICT and Telecom Services</h1>
          <p className="services-page__hero-subtitle">
            Complete service scope covering network infrastructure, enterprise IT, power systems, delivery, support, and
            specialized RAN implementations.
          </p>
        </section>

        <div className="services-page__list">
          {serviceGroups.map((service, idx) => (
            <article key={service.title} className={`services-card ${idx % 2 === 1 ? 'services-card--reverse' : ''}`}>
              <div className="services-card__text-col">
                <h2 className="services-card__title">{service.title}</h2>
                <p className="services-card__intro">{service.intro}</p>
                <ul className="services-card__items">
                  {service.items.map((item) => (
                    <li key={item} className="services-card__item">
                      <div className="services-card__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="services-card__image-col">
                <img src={service.image} alt={service.title} className="services-card__image" />
              </div>
            </article>
          ))}
        </div>

        <section className="services-ran-card">
          <h2 className="services-ran-card__title">Specialized RAN and Coverage Solutions</h2>
          <ul className="services-ran-card__list">
            {ranCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
