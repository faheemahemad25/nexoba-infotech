import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SERVICES } from '../data/servicesData';
import logoImg from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        {/* Brand column */}
        <div>
          <span className="footer-plate">
            <img src={logoImg} alt="Nexoba Infotech" />
          </span>
          <p className="footer-about">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4>Capabilities</h4>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to="/services">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info & Socials */}
        <div>
          <h4>Visit Us</h4>
          <address className="footer-addr">
            <MapPin size={22} aria-hidden="true" />
            <span>
              Sector 10, Noida<br />
              Uttar Pradesh, India
            </span>
          </address>

          <div className="social-links" aria-label="Social media channels">
            <a
              href="https://www.linkedin.com/company/nexobainfotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <path d="M8 10.5V17M8 7.3v.01M12 17v-3.8a2.4 2.4 0 014.8 0V17M12 10.5V17"/>
              </svg>
            </a>
            <a
              href="https://x.com/nexobainfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l6.5 8.6L4.3 20h2l5.2-6.2L16 20h4l-6.9-9.2L19.4 4h-2l-4.7 5.6L8.9 4H4z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@nexobainfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4"/>
                <path d="M10 9.5l5 2.5-5 2.5z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nexobainfotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <path d="M17.2 6.8v.01"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/nexobainfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3.5h-2.2A3.8 3.8 0 009 7.3V10H6.5v3.5H9V21h3.8v-7.5h2.7l.5-3.5h-3.2V7.5c0-.6.4-1 1-1H15V3.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="legal-bar">
        <div className="wrap">
          <div>© {new Date().getFullYear()} Nexoba Infotech. All rights reserved.</div>
          <div>Crafted for high performance & scalability.</div>
        </div>
      </div>
    </footer>
  );
}
