import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav-container">
        <Link to="/" className="brand-link" onClick={closeMenu} aria-label="Nexoba Infotech Home">
          <img src={logoImg} alt="Nexoba Infotech" className="brand-logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'none', minWidth: '130px' }} id="desktop-cta">
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          #desktop-cta { display: inline-flex !important; }
        }
      `}</style>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <NavLink to="/" end className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact
          </NavLink>
          <div style={{ paddingTop: '12px', marginTop: '6px', borderTop: '1px solid var(--border)' }}>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }} onClick={closeMenu}>
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
