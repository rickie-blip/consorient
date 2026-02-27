import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-container">
        <section className="contact-page__hero">
          <p className="contact-page__hero-badge">Contact</p>
          <h1 className="contact-page__hero-title">Talk to Our Team</h1>
          <p className="contact-page__hero-subtitle">
            Reach us for project scoping, technical support, partnerships, and general business enquiries.
          </p>
        </section>

        <div className="contact-page__grid">
          <div>
            <h2 className="contact-page__title">Contact Us</h2>
            <p className="contact-page__subtitle">
              For general enquiries, partnerships, support, or office communication, reach out to our team directly.
            </p>

            <div className="contact-page__info-list">
              {[
                { title: 'Headquarters', content:  'Nairobi, Kenya' },
                { title: 'Direct Support', content: <ul><li>+254-732-271-731</li><li>+254-733-428-753</li></ul> },
                { title: 'General Inquiry', content: <ul><li>projects@consorient.co.ke</li><li>sales@consorient.co.ke</li></ul> },
                { title: 'Business Hours', content: 'Mon - Fri: 8:00 AM - 6:00 PM' }
              ].map((item, i) => (
                <div key={i} className="contact-page__info-item">
                  <h4 className="contact-page__info-title">{item.title}</h4>
                  <p className="contact-page__info-text">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="contact-page__map-wrap">
              <div className="contact-page__map">
                <span className="contact-page__map-title">MAP PREVIEW</span>
                <span className="contact-page__map-caption">EMBEDDED INTERACTIVE MAP</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-form-card__title">Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div>
                  <label className="contact-form__label">Full Name</label>
                  <input type="text" className="contact-form__control" placeholder="Your Name" />
                </div>
                <div>
                  <label className="contact-form__label">Email Address</label>
                  <input type="email" className="contact-form__control" placeholder="Name@example.com" />
                </div>
              </div>
              <div>
                <label className="contact-form__label">Subject</label>
                <select className="contact-form__control">
                  <option>General Enquiry</option>
                  <option>Technical Support</option>
                  <option>Partner Inquiry</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="contact-form__label">Your Message</label>
                <textarea rows={5} className="contact-form__control" placeholder="Describe your project requirements..." />
              </div>
              <button className="contact-form__submit">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
