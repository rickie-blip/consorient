import React from 'react';
import '../styles/PartnersPage.css';
import profilePartners from '../assets/pdf/profile-partners.png';

const PartnersPage = () => {
  const partners = [
    'NTT (Dimension Data)',
    'Kenya Data Networks (KDN)',
    'Essar Company (YU)',
    'Simbanet',
    'Echotel Kenya',
    'Spearhead Inc.'
  ];

  return (
    <div className="partners-page">
      <div className="page-container partners-page__content">
        <h1 className="partners-page__title">Our Partners</h1>
        <p className="partners-page__subtitle">
          We work closely with trusted technology and infrastructure partners to deliver reliable outcomes for every client.
        </p>

        <div className="partners-page__hero">
          <img src={profilePartners} alt="Consorient partner ecosystem" className="partners-page__hero-image" />
        </div>

        <div className="partners-page__grid">
          {partners.map((name) => (
            <div key={name} className="partner-item">
              <span className="partner-item__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
