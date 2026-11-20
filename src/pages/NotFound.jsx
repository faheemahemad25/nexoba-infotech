import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ paddingBlock: '100px', textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: '600px' }}>
        <span className="eyebrow">404 Error</span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '16px', marginBottom: '16px' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
          The page you are looking for doesn't exist or has been relocated.
          Explore our services or return to the Nexoba Infotech home page.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return Home</span>
          </Link>
          <Link to="/services" className="btn btn-outline">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
