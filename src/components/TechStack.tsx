import { useEffect, useRef, useState } from "react";
import "./styles/TechStack.css";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiHtml5,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa";

const techStackData = [
  { icon: SiPython, name: "PYTHON", category: "BACKEND", color: "#3776AB" },
  { icon: SiDjango, name: "DJANGO", category: "FRAMEWORK", color: "#092E20" },
  { icon: SiHtml5, name: "HTML5", category: "MARKUP", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", category: "STYLING", color: "#1572B6" },
  { icon: FaAws, name: "AWS", category: "CLOUD", color: "#232F3E" },
  { icon: SiReact, name: "REACT", category: "FRONTEND CORE", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "NEXT.JS", category: "FRAMEWORK", color: "#ffffff" },
  { icon: SiNodedotjs, name: "NODE.JS", category: "RUNTIME", color: "#339933" },
  { icon: SiExpress, name: "EXPRESS", category: "SERVER API", color: "#ffffff" },
  { icon: SiMongodb, name: "MONGODB", category: "NOSQL DB", color: "#47A248" },
  { icon: SiPostgresql, name: "POSTGRESQL", category: "RELATIONAL DB", color: "#4169E1" },
  { icon: SiSupabase, name: "SUPABASE", category: "BAAS", color: "#3ECF8E" },
  { icon: SiTypescript, name: "TYPESCRIPT", category: "TYPE SYSTEM", color: "#3178C6" },
  { icon: SiJavascript, name: "JAVASCRIPT", category: "BASE LOGIC", color: "#F7DF1E" },
];

const TechStack = () => {
  return (
    <div className="techstack-futuristic" id="techstack">
      <div className="tech-bg-grid"></div>
      
      <div className="tech-header">
        <div className="tech-hud-line"></div>
        <h2 className="glitch" data-text="// SKILLS">// SKILLS</h2>
        <div className="tech-hud-line"></div>
      </div>

      <div className="tech-grid">
        {techStackData.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div key={i} className="tech-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="tech-card-borders">
                <span></span><span></span><span></span><span></span>
              </div>
              <div className="tech-card-inner">
                <div className="tech-hologram-effect"></div>
                <div className="tech-icon-wrapper" style={{ color: tech.color }}>
                  <Icon size={60} className="tech-icon" />
                </div>
                <div className="tech-info">
                  <div className="tech-name">{tech.name}</div>
                  <div className="tech-category">[{tech.category}]</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
