import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ scrolled, currentPage, isMenuOpen, setIsMenuOpen, navigate }) => {
  const pages = ['home', 'about', 'services', 'projects', 'partners', 'contact'];
  const useLightNavbar = scrolled || currentPage !== 'home';

  return (
    <nav className={`navbar ${useLightNavbar ? 'navbar--light' : 'navbar--transparent'}`}>
      <div className="page-container">
        <div className="navbar__row">
          <div className="navbar__brand" onClick={() => navigate('home')}>
            <div className={`navbar__brand-badge ${useLightNavbar ? 'navbar__brand-badge--light' : 'navbar__brand-badge--dark'}`}>
              <span className="navbar__brand-initial">C</span>
            </div>
            <span className={`navbar__brand-text ${useLightNavbar ? 'navbar__brand-text--light' : 'navbar__brand-text--dark'}`}>
              CONSORIENT
            </span>
          </div>

          <div className="navbar__desktop-links">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`navbar__link ${
                  currentPage === page
                    ? useLightNavbar
                      ? 'navbar__link--active-light'
                      : 'navbar__link--active-dark'
                    : useLightNavbar
                    ? 'navbar__link--light'
                    : 'navbar__link--dark'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => navigate('quote')}
              className={`navbar__quote ${useLightNavbar ? 'navbar__quote--light' : 'navbar__quote--dark'}`}
            >
              Get a Quote
            </button>
          </div>

          <div className="navbar__mobile-toggle-wrap">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`navbar__mobile-toggle ${useLightNavbar ? 'navbar__mobile-toggle--light' : 'navbar__mobile-toggle--dark'}`}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar__mobile-menu">
          <div className="navbar__mobile-menu-inner">
            {pages.map((page) => (
              <button key={page} onClick={() => navigate(page)} className="navbar__mobile-link">
                {page}
              </button>
            ))}
            <button onClick={() => navigate('quote')} className="navbar__mobile-link">
              get a quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
