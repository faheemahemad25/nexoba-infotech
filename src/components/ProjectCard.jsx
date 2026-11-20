import React from 'react';
import { CAT_LABEL } from '../data/projectsData';

const P = "#901c3d";
const A = "#d41b52";
const D = "#1c050c";
const DL = "#4a1322";
const S = "#fff5f7";
const B = "#f0e1e5";
const W = "#fff";

export function ProjectThumbSvg({ cat }) {
  if (cat === "saas") {
    return (
      <svg viewBox="0 0 320 180" role="img" aria-label="SaaS Interface Preview">
        <rect width="320" height="180" fill={S} />
        <rect x="16" y="16" width="288" height="148" rx="8" fill={W} stroke={B} />
        <rect x="16" y="16" width="56" height="148" rx="8" fill={D} />
        <rect x="44" y="16" width="28" height="148" fill={D} />
        <rect x="28" y="32" width="32" height="6" rx="3" fill={A} />
        <rect x="28" y="52" width="32" height="5" rx="2.5" fill="#fff" opacity=".28" />
        <rect x="28" y="66" width="26" height="5" rx="2.5" fill="#fff" opacity=".28" />
        <rect x="28" y="80" width="30" height="5" rx="2.5" fill="#fff" opacity=".28" />
        <rect x="86" y="28" width="90" height="8" rx="4" fill={DL} />
        <rect x="86" y="46" width="64" height="32" rx="6" fill={S} stroke={B} />
        <rect x="158" y="46" width="64" height="32" rx="6" fill={S} stroke={B} />
        <rect x="230" y="46" width="62" height="32" rx="6" fill={S} stroke={B} />
        <rect x="94" y="54" width="26" height="5" rx="2.5" fill={B} />
        <rect x="94" y="64" width="38" height="8" rx="3" fill={P} />
        <rect x="166" y="54" width="26" height="5" rx="2.5" fill={B} />
        <rect x="166" y="64" width="30" height="8" rx="3" fill={P} />
        <rect x="238" y="54" width="26" height="5" rx="2.5" fill={B} />
        <rect x="238" y="64" width="34" height="8" rx="3" fill={P} />
        <g fill={P}>
          <rect x="92" y="126" width="16" height="26" rx="2" />
          <rect x="116" y="112" width="16" height="40" rx="2" />
          <rect x="140" y="120" width="16" height="32" rx="2" />
          <rect x="164" y="100" width="16" height="52" rx="2" fill={A} />
          <rect x="188" y="108" width="16" height="44" rx="2" />
          <rect x="212" y="92" width="16" height="60" rx="2" fill={A} />
          <rect x="236" y="104" width="16" height="48" rx="2" />
          <rect x="260" y="86" width="16" height="66" rx="2" fill={A} />
        </g>
        <path d="M86 152h206" stroke={B} />
      </svg>
    );
  }

  if (cat === "marketplace") {
    const tiles = [];
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const x = 20 + c * 96;
        const y = 54 + r * 62;
        tiles.push(
          <g key={`${r}-${c}`}>
            <rect x={x} y={y} width="88" height="54" rx="6" fill={W} stroke={B} />
            <rect x={x + 6} y={y + 6} width="76" height="24" rx="4" fill={c === 1 ? A : P} opacity={r ? "0.55" : "0.8"} />
            <circle cx={x + 12} cy={y + 41} r="5" fill={DL} />
            <rect x={x + 22} y={y + 36} width="34" height="5" rx="2.5" fill={B} />
            <rect x={x + 22} y={y + 44} width="22" height="4" rx="2" fill={B} />
            <rect x={x + 62} y={y + 37} width="18" height="10" rx="5" fill={S} stroke={B} />
          </g>
        );
      }
    }
    return (
      <svg viewBox="0 0 320 180" role="img" aria-label="Marketplace Interface Preview">
        <rect width="320" height="180" fill={S} />
        <rect x="20" y="16" width="280" height="26" rx="13" fill={W} stroke={B} />
        <circle cx="36" cy="29" r="5" fill="none" stroke={P} strokeWidth="1.6" />
        <rect x="48" y="26" width="70" height="6" rx="3" fill={B} />
        <rect x="240" y="21" width="52" height="16" rx="8" fill={P} />
        {tiles}
      </svg>
    );
  }

  if (cat === "ecommerce") {
    const cols = [];
    for (let c = 0; c < 3; c++) {
      const x = 20 + c * 96;
      cols.push(
        <g key={c}>
          <rect x={x} y="52" width="88" height="112" rx="6" fill={W} stroke={B} />
          <rect x={x + 6} y="58" width="76" height="62" rx="4" fill={c === 0 ? P : c === 1 ? DL : A} opacity={c === 1 ? "0.85" : "0.7"} />
          <rect x={x + 6} y="128" width="48" height="5" rx="2.5" fill={DL} />
          <rect x={x + 6} y="139" width="28" height="6" rx="3" fill={P} />
          <circle cx={x + 70} cy="146" r="8" fill={D} />
          <path d={`M${x + 66} 146h8M${x + 70} 142v8`} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    }
    return (
      <svg viewBox="0 0 320 180" role="img" aria-label="E-commerce Interface Preview">
        <rect width="320" height="180" fill={S} />
        <rect x="20" y="14" width="46" height="8" rx="4" fill={D} />
        <rect x="90" y="16" width="30" height="4" rx="2" fill={B} />
        <rect x="128" y="16" width="30" height="4" rx="2" fill={B} />
        <rect x="166" y="16" width="30" height="4" rx="2" fill={B} />
        <circle cx="288" cy="18" r="9" fill="none" stroke={P} strokeWidth="1.6" />
        <circle cx="296" cy="10" r="5" fill={A} />
        <rect x="20" y="30" width="280" height="14" rx="7" fill={W} stroke={B} />
        {cols}
      </svg>
    );
  }

  if (cat === "erp") {
    const kpis = [];
    for (let i = 0; i < 4; i++) {
      const x = 20 + i * 70;
      kpis.push(
        <g key={i}>
          <rect x={x} y="18" width="64" height="38" rx="6" fill={W} stroke={B} />
          <rect x={x + 8} y="26" width="28" height="5" rx="2.5" fill={B} />
          <rect x={x + 8} y="38" width="38" height="9" rx="3" fill={i === 2 ? A : P} />
        </g>
      );
    }
    const rows = [];
    for (let j = 0; j < 5; j++) {
      const y = 96 + j * 14;
      const ok = j % 3 !== 1;
      rows.push(
        <g key={j}>
          <rect x="30" y={y} width="64" height="5" rx="2.5" fill={j ? B : DL} />
          <rect x="120" y={y} width="50" height="5" rx="2.5" fill={B} />
          <rect x="196" y={y} width="40" height="5" rx="2.5" fill={B} />
          <rect x="252" y={y - 3} width="38" height="11" rx="5.5" fill={ok ? S : "#fee2e2"} stroke={ok ? P : A} strokeWidth="0.8" />
          {j < 4 && <path d={`M24 ${y + 9}h272`} stroke={B} />}
        </g>
      );
    }
    return (
      <svg viewBox="0 0 320 180" role="img" aria-label="ERP & CRM Portal Preview">
        <rect width="320" height="180" fill={S} />
        {kpis}
        <rect x="20" y="66" width="280" height="106" rx="8" fill={W} stroke={B} />
        <rect x="20" y="66" width="280" height="20" rx="8" fill={D} />
        <rect x="20" y="76" width="280" height="10" fill={D} />
        <rect x="30" y="73" width="40" height="5" rx="2.5" fill="#fff" opacity=".6" />
        <rect x="120" y="73" width="30" height="5" rx="2.5" fill="#fff" opacity=".6" />
        {rows}
      </svg>
    );
  }

  // EdTech & LMS default
  const lessons = [];
  for (let i = 0; i < 4; i++) {
    const y = 40 + i * 30;
    lessons.push(
      <g key={i}>
        <rect x="214" y={y} width="88" height="24" rx="5" fill={W} stroke={i === 1 ? P : B} />
        <circle cx="226" cy={y + 12} r="5" fill={i === 0 ? P : "none"} stroke={P} strokeWidth="1.3" />
        {i === 0 && <path d={`M223.5 ${y + 12}l2 2 3.5-4`} stroke="#fff" strokeWidth="1.3" fill="none" strokeLinecap="round" />}
        <rect x="236" y={y + 7} width={i === 1 ? 48 : 40} height="4" rx="2" fill={B} />
        <rect x="236" y={y + 14} width="26" height="3.5" rx="1.75" fill={B} />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="EdTech & LMS Interface Preview">
      <rect width="320" height="180" fill={S} />
      <rect x="18" y="16" width="184" height="104" rx="8" fill={D} />
      <circle cx="110" cy="62" r="20" fill={P} />
      <path d="M104 52l17 10-17 10z" fill="#fff" />
      <rect x="30" y="102" width="160" height="4" rx="2" fill="#fff" opacity=".22" />
      <rect x="30" y="102" width="86" height="4" rx="2" fill={A} />
      <circle cx="116" cy="104" r="5" fill="#fff" />
      <rect x="18" y="132" width="110" height="9" rx="4.5" fill={DL} />
      <rect x="18" y="148" width="170" height="5" rx="2.5" fill={B} />
      <rect x="18" y="159" width="130" height="5" rx="2.5" fill={B} />
      <rect x="214" y="16" width="60" height="8" rx="4" fill={DL} />
      {lessons}
    </svg>
  );
}

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card" onClick={onSelect} style={{ cursor: onSelect ? 'pointer' : 'default' }}>
      <div className="project-thumb">
        <ProjectThumbSvg cat={project.cat} />
      </div>

      <div className="project-body">
        <span className="pill">{CAT_LABEL[project.cat] || project.cat}</span>
        <h3>{project.name}</h3>
        <p>{project.text}</p>

        <ul className="project-chips">
          {project.tags.map((tag, idx) => (
            <li key={idx} className="project-chip">{tag}</li>
          ))}
        </ul>

        {project.impact && (
          <div className="project-meta-bar">
            <span><strong>Impact:</strong> {project.impact}</span>
            <span>{project.year}</span>
          </div>
        )}
      </div>
    </article>
  );
}
