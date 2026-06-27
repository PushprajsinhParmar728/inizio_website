'use client';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [formData,  setFormData]  = useState({
    name: '', email: '', number: '', company: '',
    product: '', detail: '', custom: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', number: '', company: '', product: '', detail: '', custom: '' });
    }
  };

  return (
    <div className="contact-page">

      {/* ── Page Hero ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-eyebrow">
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Get In Touch</span>
        </div>
        <h1>Contact <em>Us</em></h1>
        <p>
          Inquiries about needles, machinery parts, pricing, or partnerships —
          we're ready to help.
        </p>
      </div>

      {/* ── Info Cards ─────────────────────────────────────────── */}
      <div style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="contact-info">
            {/* Phone */}
            <ScrollReveal>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Phone</h3>
                <a href="tel:+919624715978">+91 96247 15978</a>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={100}>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Email</h3>
                
                <a  href="mailto:info@iniziooverseas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@iniziooverseas.com
                </a>
                
                <a  href="mailto:support@iniziooverseas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@iniziooverseas.com
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── Inquiry Form ───────────────────────────────────────── */}
      <div className="contact-form-section">
        <div className="container">
          <ScrollReveal>
            <div className="contact-form-wrap">
              <div className="contact-form-title">
                Product <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Inquiry</em>
              </div>

              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3>Inquiry Sent</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-teal"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Full-width: Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={formData.name} onChange={handleChange} required
                    />
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email <span style={{ color: 'var(--gold)' }}>*</span></label>
                      <input
                        id="email" name="email" type="email"
                        placeholder="you@company.com"
                        value={formData.email} onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="number">Phone <span style={{ color: 'var(--gold)' }}>*</span></label>
                      <input
                        id="number" name="number" type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.number} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  {/* Row: Company + Product Name */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company <span style={{ color: 'var(--gold)' }}>*</span></label>
                      <input
                        id="company" name="company" type="text"
                        placeholder="Company name"
                        value={formData.company} onChange={handleChange} required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product">Product Name <span style={{ color: 'var(--gold)' }}>*</span></label>
                      <input
                        id="product" name="product" type="text"
                        placeholder="e.g. Hook Needle"
                        value={formData.product} onChange={handleChange} required
                      />
                    </div>
                  </div>

                  {/* Row: Detail + Customization */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="detail">Product Detail</label>
                      <input
                        id="detail" name="detail" type="text"
                        placeholder="Specifications, quantity…"
                        value={formData.detail} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="custom">Customization</label>
                      <input
                        id="custom" name="custom" type="text"
                        placeholder="Any custom requirements…"
                        value={formData.custom} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-submit">
                    <button type="submit" className="btn-teal" disabled={loading}>
                      {loading ? 'Sending…' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}