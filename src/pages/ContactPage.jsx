import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-container">
        <div className="contact-page__grid">
          <div>
            <h1 className="contact-page__title">Contact Us</h1>
            <p className="contact-page__subtitle">
              For general enquiries, partnerships, support, or office communication, reach out to our team directly.
            </p>

            <div className="contact-page__info-list">
              {[
                { title: 'Headquarters', content: '123 Tech Plaza, Corporate District, Enterprise City' },
                { title: 'Direct Support', content: '+254 712 345 678' },
                { title: 'General Inquiry', content: 'info@consorient.com' },
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
