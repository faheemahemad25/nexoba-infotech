import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Globe,
  Cpu,
  Bot,
  Layers,
  ShoppingBag,
  ShoppingCart,
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Smartphone,
  Globe,
  Cpu,
  Bot,
  Layers,
  ShoppingBag,
  ShoppingCart,
  LayoutDashboard
};

export default function ServiceCard({ service, mode = "tile" }) {
  const IconComponent = ICON_MAP[service.icon] || Globe;

  if (mode === "tile") {
    return (
      <Link to="/services" className="tile" aria-label={`Learn more about ${service.name}`}>
        <div className="icon-box">
          <IconComponent size={24} />
        </div>
        <h3>{service.name}</h3>
        <p>{service.short}</p>
        <span style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>
          Explore service <ArrowRight size={14} />
        </span>
      </Link>
    );
  }

  // Full detailed row mode
  return (
    <article className="svc-row" id={service.id}>
      <div className="svc-title">
        <div className="icon-box" style={{ width: '52px', height: '52px' }}>
          <IconComponent size={26} />
        </div>
        <div>
          <h3>{service.name}</h3>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{service.short}</span>
        </div>
      </div>

      <div>
        <p>{service.text}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          {service.features?.map((feat, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.78rem',
                padding: '3px 10px',
                background: 'var(--enterprise-blue-subtle)',
                color: 'var(--primary)',
                borderRadius: '6px',
                fontWeight: 600,
                border: '1px solid var(--border)'
              }}
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      <ul className="svc-bullets">
        {service.points.map((pt, index) => (
          <li key={index}>{pt}</li>
        ))}
      </ul>
    </article>
  );
}
