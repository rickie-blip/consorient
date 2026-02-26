import React from 'react';
import '../styles/HomePage.css';

const HomePage = ({ navigate }) => {
  return (
    <div>
      <section className="home-hero">
        <div className="home-hero__bg">
          <div className="home-hero__overlay" />
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000"
            alt="Telecommunications"
            className="home-hero__image"
          />
        </div>

        <div className="page-container home-hero__content-wrap">
          <div className="home-hero__content">
            <div className="home-hero__badge">Innovation in Infrastructure</div>
            <h1 className="home-hero__title">
              Building the Future of <span className="home-hero__title-accent">Connectivity</span>
            </h1>
            <p className="home-hero__description">
              Consorient Solutions provides world-class ICT and telecommunications infrastructure engineering. From fiber optics
              to network towers, we connect the world.
            </p>
            <div className="home-hero__actions">
              <button onClick={() => navigate('services')} className="home-btn home-btn--primary">Explore Services</button>
              <button onClick={() => navigate('about')} className="home-btn home-btn--ghost">About Our Vision</button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="page-container">
          <div className="home-stats__grid">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Network Towers', value: '1.2k' },
              { label: 'Partners Worldwide', value: '45+' },
              { label: 'Expert Engineers', value: '150+' }
            ].map((stat, i) => (
              <div key={i} className="home-stats__item">
                <div className="home-stats__value">{stat.value}</div>
                <div className="home-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="page-container">
          <div className="home-services__header">
            <h2 className="home-services__title">Comprehensive Solutions</h2>
            <div className="home-services__line" />
          </div>

          <div className="home-services__grid">
            {[
              {
                title: 'Network Infrastructure',
                desc: 'End-to-end design and deployment of robust network backbones.'
              },
              {
                title: 'Equipment Installation',
                desc: 'Expert calibration and installation of telecommunications hardware.'
              },
              {
                title: 'Power Solutions',
                desc: 'Sustainable and reliable power backup for critical ICT facilities.'
              }
            ].map((s, idx) => (
              <div key={idx} className="home-services__card">
                <h3 className="home-services__card-title">{s.title}</h3>
                <p className="home-services__card-desc">{s.desc}</p>
                <button onClick={() => navigate('services')} className="home-services__card-link">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__shape" />
        <div className="page-container home-cta__content">
          <div className="home-cta__text">
            <h2 className="home-cta__title">Ready to optimize your infrastructure?</h2>
            <p className="home-cta__desc">Partner with Consorient Solutions for your next big project.</p>
          </div>
          <button onClick={() => navigate('contact')} className="home-cta__button">Contact Us Today</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
