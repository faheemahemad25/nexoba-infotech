import React from 'react';
import CtaBanner from '../components/CtaBanner';
import { COMPANY_INFO } from '../data/companyData';
import { Users, Code2, Server, Database, Bot, Zap, Shield, Check } from 'lucide-react';

export default function About() {
  const techStack = [
    { name: "Frontend", tools: "React 18+, Vite, Next.js, React Native, Tailwind CSS" },
    { name: "Backend", tools: "Node.js, Express, Python FastAPI, Go, GraphQL, REST" },
    { name: "AI & ML", tools: "Gemini API, OpenAI GPT-4o, Claude 3.5, LangChain, RAG Pipelines, Pinecone" },
    { name: "Databases", tools: "PostgreSQL, MongoDB, Redis, Supabase, DynamoDB" },
    { name: "Cloud & DevOps", tools: "AWS, GCP, Docker, Kubernetes, CI/CD GitHub Actions" }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">About Nexoba Infotech</span>
          <h1>Software Built to Be Used, Then Kept Running</h1>
          <p>
            Nexoba Infotech is an engineering and AI solutions company that turns ambitious business problems
            into high-performing web platforms, mobile apps, and autonomous automations.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="band" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="split-grid">
            <div>
              <span className="eyebrow">Who we are</span>
              <h2>A delivery team that stays with the product</h2>
            </div>
            <div className="prose">
              <p>
                We build mobile apps, web platforms, AI features and business systems for companies that need software
                that fits how they actually work, not an off-the-shelf template they have to bend around.
              </p>
              <p>
                Every project starts with your real users and your actual workflows. We agree on clear scope, show working
                software early and often in weekly iterations, and stay actively available after launch to monitor,
                tune, and scale what we shipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate: 4 Habits */}
      <section className="band band-tint">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">How we operate</span>
              <h2>Four habits behind every project</h2>
              <p>The core operating principles that keep our engineering predictable and high-quality.</p>
            </div>
          </div>

          <div className="values-grid">
            {COMPANY_INFO.habits.map((habit, idx) => (
              <div key={idx} className="value-card">
                <h3>{habit.title}</h3>
                <p>{habit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With & Company Facts */}
      <section className="band">
        <div className="wrap">
          <div className="split-grid">
            <div>
              <span className="eyebrow">Who we work with</span>
              <h2>Startups, growing scaleups, and established teams</h2>
              <p style={{ marginTop: '14px', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Whether you need a full product engineering squad or specialized AI integration to supplement your internal staff, we adapt our engagement model to match your roadmap.
              </p>
            </div>

            <dl className="facts-dl">
              {COMPANY_INFO.facts.map((fact, idx) => (
                <div key={idx}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Modern Technology Architecture */}
      <section className="band band-tint band-bordered">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Technologies</span>
              <h2>Our technical foundation</h2>
              <p>Modern, battle-tested tools selected for developer velocity, security, and long-term maintainability.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {techStack.map((stack, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>{stack.name}</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {stack.tools}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBanner
        title="Let us talk about what you are building"
        description="A short message is enough to get started. We'll reply within 24 hours with architectural thoughts and next steps."
        buttonText="Contact us"
        buttonLink="/contact"
      />
    </div>
  );
}
