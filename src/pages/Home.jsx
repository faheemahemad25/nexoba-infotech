import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Award } from 'lucide-react';
import HeroCircuit from '../components/HeroCircuit';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CtaBanner from '../components/CtaBanner';
import { SERVICES } from '../data/servicesData';
import { PROJECTS, FEATURED_PROJECT_IDS } from '../data/projectsData';
import { COMPANY_INFO } from '../data/companyData';

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => FEATURED_PROJECT_IDS.includes(p.id));

  return (
    <div>
      {/* Hero Section */}
      <section className="hero on-dark">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Nexoba Infotech</span>
            <h1>
              A Cutting-Edge <em>Software &amp; AI</em> Development Company
            </h1>
            <p className="lead">
              We engineer enterprise web applications, mobile apps, AI workflows, intelligent automation pipelines, and autonomous AI agents.
            </p>

            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">
                <span>View our work</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Talk to us
              </Link>
            </div>

            {/* Live Stats */}
            <div className="hero-stats-bar">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="hero-stat-item">
                  <div className="stat-num">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <HeroCircuit />
          </div>
        </div>
      </section>

      {/* Services Overview Band */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Our services</h2>
              <p>Specialized engineering services tailored to bring complex software and AI products to life.</p>
            </div>
            <Link to="/services" className="link-arrow">
              <span>All services</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="tiles">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} mode="tile" />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Band */}
      <section className="band band-tint">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Products we have shipped for clients</h2>
              <p>Real-world SaaS, marketplaces, e-commerce, and enterprise portals engineered for scale.</p>
            </div>
            <Link to="/portfolio" className="link-arrow">
              <span>Full portfolio</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="projects">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Band */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>From first call to live product</h2>
              <p>A proven, transparent methodology designed to minimize risk and accelerate time-to-market.</p>
            </div>
          </div>

          <div className="steps-grid">
            {COMPANY_INFO.workflowSteps.map((step, idx) => (
              <div key={idx} className="step-card">
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexoba Value Pillars */}
      <section className="band band-tint band-bordered">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div>
              <span className="eyebrow">Why Nexoba</span>
              <h2>Engineering built around your business goals</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#fff', padding: '28px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--enterprise-blue-subtle)', color: 'var(--primary)', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                <Zap size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>High Velocity Sprints</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                We ship working software in weekly increments. You get testable builds early, allowing your team to validate assumptions with actual users.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '28px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--enterprise-blue-subtle)', color: 'var(--primary)', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Enterprise-Grade Security</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Built-in role-based access control, HIPAA/GDPR readiness, end-to-end data encryption, and rigorous penetration safeguards.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '28px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'var(--enterprise-blue-subtle)', color: 'var(--primary)', display: 'grid', placeItems: 'center', marginBottom: '16px' }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Post-Launch Support</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Our partnership doesn't end on release day. We provide monitoring, automated alert triage, server optimization, and continuous feature roadmapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBanner />
    </div>
  );
}
