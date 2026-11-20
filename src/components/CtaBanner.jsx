import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({
  title = "Have a product, portal or automation in mind?",
  description = "Tell us what you are trying to build. We will reply with questions, a rough approach and next steps within 24 hours.",
  buttonText = "Start a project",
  buttonLink = "/contact"
}) {
  return (
    <section className="cta-band">
      <div className="wrap cta-wrap">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--pink-on-dark)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
            <Sparkles size={16} /> Let's Collaborate
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link to={buttonLink} className="btn btn-light">
          <span>{buttonText}</span>
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
