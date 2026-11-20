import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { Send, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].name,
    budget: '$5k - $15k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const firstName = formData.name.trim().split(' ')[0] || 'there';

  return (
    <div>
      {/* Page Header */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Tell Us What You Want to Build</h1>
          <p>
            Share a few details about your product idea, automation goal, or platform requirements,
            and our engineering lead will respond with insightful questions and a recommended technical approach.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="band" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="f-name">
                  Your name <span>*</span>
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Sarah Jenkins"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="f-email">
                  Work email <span>*</span>
                </label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="sarah@company.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="f-phone">
                  Phone <span>(optional)</span>
                </label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="f-service">Service you need</label>
                <select
                  id="f-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </div>

              <div className="field full">
                <label htmlFor="f-budget">Estimated Budget Range</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px' }}>
                  {["<$5k", "$5k - $15k", "$15k - $30k", "$30k+"].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, budget: range }))}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: formData.budget === range ? 'var(--primary)' : 'var(--border)',
                        background: formData.budget === range ? 'var(--enterprise-blue-subtle)' : '#fff',
                        color: formData.budget === range ? 'var(--primary)' : 'var(--text-secondary)',
                        fontWeight: formData.budget === range ? 600 : 400,
                        fontSize: '0.86rem',
                        cursor: 'pointer'
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field full">
                <label htmlFor="f-message">
                  About your project <span>*</span>
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  placeholder="What are you building, who is it for, what features are critical, and when do you hope to launch?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={submitting}
                  style={{ minWidth: '160px' }}
                >
                  {submitting ? 'Sending...' : (
                    <>
                      <span>Send message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Strictly confidential. No spam, ever.
                </span>
              </div>

              {submitted && (
                <div className="form-status-alert" role="status">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} color="var(--accent-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Thanks, {firstName}! Your message was successfully received.</strong>
                      <p style={{ marginTop: '4px', fontSize: '0.88rem', color: '#065f46' }}>
                        Our engineering team in Noida will review your requirements and respond within 24 hours with scoping questions and proposal guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>

            {/* Sidebar / Next Steps */}
            <aside>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '24px' }}>
                What happens next
              </h2>

              <ul className="next-list">
                <li className="next-item">
                  <span className="next-dot">1</span>
                  <div>
                    <h3>We read your brief</h3>
                    <p>A senior solutions architect reviews your project goals, identifies technical constraints, and notes key questions about scope and users.</p>
                  </div>
                </li>

                <li className="next-item">
                  <span className="next-dot">2</span>
                  <div>
                    <h3>We reply with a plan</h3>
                    <p>A concise introductory email or 20-minute alignment call with a suggested technical approach, timeline range, and recommended squad size.</p>
                  </div>
                </li>

                <li className="next-item">
                  <span className="next-dot">3</span>
                  <div>
                    <h3>You decide</h3>
                    <p>A detailed written proposal and sprint breakdown follows. Zero obligation until you are completely confident in the roadmap.</p>
                  </div>
                </li>
              </ul>

              {/* Direct Reach */}
              <div className="direct-box">
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Prefer to connect directly?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={16} color="var(--primary)" />
                    <span>Email: <strong>{COMPANY_INFO.email}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} color="var(--primary)" />
                    <span>Phone: <strong>{COMPANY_INFO.phone}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="var(--primary)" />
                    <span>Office: <strong>{COMPANY_INFO.address}</strong></span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
