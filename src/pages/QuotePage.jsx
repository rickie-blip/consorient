import React from 'react';
import '../styles/QuotePage.css';

const QuotePage = () => {
  return (
    <div className="quote-page">
      <div className="page-container">
        <div className="quote-page__header">
          <h1 className="quote-page__title">Get a Quote</h1>
          <p className="quote-page__subtitle">
            Complete this project questionnaire so we can prepare a suitable and accurate quotation.
          </p>
        </div>

        <div className="quote-page__grid">
          <section className="quote-card">
            <h2 className="quote-card__title">Project Questionnaire</h2>
            <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
              <div className="quote-form__row quote-form__row--2col">
                <div>
                  <label className="quote-form__label">Full Name</label>
                  <input className="quote-form__control" type="text" placeholder="Your full name" />
                </div>
                <div>
                  <label className="quote-form__label">Company Name</label>
                  <input className="quote-form__control" type="text" placeholder="Your organization" />
                </div>
              </div>

              <div className="quote-form__row quote-form__row--2col">
                <div>
                  <label className="quote-form__label">Email Address</label>
                  <input className="quote-form__control" type="email" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="quote-form__label">Phone Number</label>
                  <input className="quote-form__control" type="tel" placeholder="+254 ..." />
                </div>
              </div>

              <div className="quote-form__row quote-form__row--2col">
                <div>
                  <label className="quote-form__label">Primary Service Needed</label>
                  <select className="quote-form__control">
                    <option>Network Infrastructure</option>
                    <option>Fiber Optics Deployment</option>
                    <option>Cybersecurity</option>
                    <option>Power and Backup Systems</option>
                    <option>Managed IT Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="quote-form__label">Project Location</label>
                  <input className="quote-form__control" type="text" placeholder="City / Region / Country" />
                </div>
              </div>

              <div className="quote-form__row quote-form__row--2col">
                <div>
                  <label className="quote-form__label">Estimated Budget Range</label>
                  <select className="quote-form__control">
                    <option>Below Ksh10,000</option>
                    <option>Ksh10,000 - Ksh50,000</option>
                    <option>Ksh50,000 - Ksh150,000</option>
                    <option>Ksh150,000 - Ksh500,000</option>
                    <option>Above Ksh500,000</option>
                  </select>
                </div>
                <div>
                  <label className="quote-form__label">Target Start Date</label>
                  <input className="quote-form__control" type="date" />
                </div>
              </div>

              <div className="quote-form__row quote-form__row--2col">
                <div>
                  <label className="quote-form__label">Project Duration Expectation</label>
                  <select className="quote-form__control">
                    <option>Less than 1 month</option>
                    <option>1 - 3 months</option>
                    <option>3 - 6 months</option>
                    <option>6 - 12 months</option>
                    <option>More than 12 months</option>
                  </select>
                </div>
                <div>
                  <label className="quote-form__label">Number of Sites</label>
                  <input className="quote-form__control" type="number" min="1" placeholder="e.g. 3" />
                </div>
              </div>

              <div className="quote-form__row">
                <label className="quote-form__label">Scope Details</label>
                <textarea
                  className="quote-form__control"
                  rows={5}
                  placeholder="Describe technical requirements, expected deliverables, and any constraints."
                />
              </div>

              <div className="quote-form__row">
                <label className="quote-form__label">Special Requirements or Compliance Notes</label>
                <textarea
                  className="quote-form__control"
                  rows={4}
                  placeholder="Regulatory, security, environmental, procurement, or SLA requirements."
                />
              </div>

              <button className="quote-form__submit">Request Quotation</button>
            </form>
          </section>

          <aside className="quote-info-card">
            <h3 className="quote-info-card__title">How We Prepare Your Quote</h3>
            <ul className="quote-info-card__list">
              <li>We review your technical scope and project goals.</li>
              <li>We estimate equipment, labor, logistics, and timeline.</li>
              <li>We identify optional and recommended configurations.</li>
              <li>We send a formal quotation with assumptions and terms.</li>
            </ul>

            <div className="quote-info-card__panel">
              <p className="quote-info-card__panel-title">Typical Turnaround</p>
              <p className="quote-info-card__panel-text">Initial quotation in 2-5 business days after questionnaire review.</p>
            </div>

            <div className="quote-info-card__panel">
              <p className="quote-info-card__panel-title">Need Urgent Pricing?</p>
              <p className="quote-info-card__panel-text">Call support and mention your project timeline for priority handling.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
