import React from 'react';
import '../styles/PartnersPage.css';

const PartnersPage = () => {
  return (
    <div className="partners-page">
      <div className="page-container partners-page__content">
        <h1 className="partners-page__title">Our Strategic Partners</h1>
        <p className="partners-page__subtitle">
          Consorient Solutions collaborates with leading global technology providers to ensure our clients receive the highest
          quality equipment and software.
        </p>
        <div className="partners-page__grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <div key={n} className="partner-item">
              <div className="partner-item__avatar">
                <span className="partner-item__avatar-text">P{n}</span>
              </div>
              <span className="partner-item__name">Partner {n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
