import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroCircuit() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const navigate = useNavigate();

  const handleNodeClick = () => {
    navigate('/services');
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 460 420"
        role="img"
        aria-label="Nexoba software & AI circuit hub"
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(343, 75%, 58%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(343, 75%, 58%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Glow Halo */}
        <circle cx="230" cy="210" r="80" fill="url(#hubGlow)" />

        {/* Circuit Traces */}
        <g fill="none" stroke="hsl(343,75%,58%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path className="trace" d="M218 210V30H141" />
          <path className="trace" d="M206 210V120H141" />
          <path className="trace" d="M196 210H141" />
          <path className="trace" d="M206 210V300H141" />
          <path className="trace" d="M218 210V390H141" />
          <path className="trace" d="M242 210V75H319" />
          <path className="trace" d="M254 210V165H319" />
          <path className="trace" d="M254 210V255H319" />
          <path className="trace" d="M242 210V345H319" />
        </g>

        {/* Junction Nodes */}
        <g fill="hsl(343,75%,58%)">
          <circle cx="218" cy="30" r="3.5" />
          <circle cx="206" cy="120" r="3.5" />
          <circle cx="206" cy="300" r="3.5" />
          <circle cx="218" cy="390" r="3.5" />
          <circle cx="242" cy="75" r="3.5" />
          <circle cx="254" cy="165" r="3.5" />
          <circle cx="254" cy="255" r="3.5" />
          <circle cx="242" cy="345" r="3.5" />
        </g>

        {/* Pill Nodes - Left Column */}
        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('mobile')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="1" y="8" width="140" height="44" rx="22"
            fill={hoveredNode === 'mobile' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'mobile' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="71" y="23" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">Mobile app</text>
          <text x="71" y="37" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">development</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('web')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="1" y="98" width="140" height="44" rx="22"
            fill={hoveredNode === 'web' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'web' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="71" y="113" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">Web</text>
          <text x="71" y="127" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">development</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('ai')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="1" y="188" width="140" height="44" rx="22"
            fill={hoveredNode === 'ai' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'ai' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="71" y="210" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">AI integration</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('agents')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="1" y="278" width="140" height="44" rx="22"
            fill={hoveredNode === 'agents' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'agents' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="71" y="300" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">AI agents</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('workflow')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="1" y="368" width="140" height="44" rx="22"
            fill={hoveredNode === 'workflow' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'workflow' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="71" y="383" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">AI workflow &amp;</text>
          <text x="71" y="397" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">automation</text>
        </g>

        {/* Pill Nodes - Right Column */}
        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('saas')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="319" y="53" width="140" height="44" rx="22"
            fill={hoveredNode === 'saas' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'saas' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="389" y="75" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">SaaS</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('market')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="319" y="143" width="140" height="44" rx="22"
            fill={hoveredNode === 'market' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'market' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="389" y="165" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">Marketplace</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('shop')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="319" y="233" width="140" height="44" rx="22"
            fill={hoveredNode === 'shop' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'shop' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="389" y="255" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">E-commerce</text>
        </g>

        <g
          style={{ cursor: 'pointer' }}
          onClick={handleNodeClick}
          onMouseEnter={() => setHoveredNode('erp')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <rect
            x="319" y="323" width="140" height="44" rx="22"
            fill={hoveredNode === 'erp' ? 'hsla(343, 75%, 45%, 0.35)' : 'rgba(255,245,247,.08)'}
            stroke={hoveredNode === 'erp' ? 'hsl(343,85%,72%)' : 'rgba(255,245,247,.25)'}
            strokeWidth="1.2"
            style={{ transition: 'all 0.2s' }}
          />
          <text x="389" y="338" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">CRM &amp; ERP</text>
          <text x="389" y="352" fill="#fff5f7" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="central">portal</text>
        </g>

        {/* Central Hub Core */}
        <circle cx="230" cy="210" r="48" fill="none" stroke="rgba(255,245,247,.2)" strokeDasharray="3 6" />
        <circle cx="230" cy="210" r="36" fill="hsl(343,67%,34%)" stroke="hsl(343,75%,58%)" strokeWidth="2.5" />
        <text
          x="230" y="211"
          fill="#ffffff"
          fontSize="28"
          fontWeight="800"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          N
        </text>
      </svg>
    </div>
  );
}
