"use client";

import { useState, useEffect, useRef } from "react";

const data = {
  name: "Ethan Hardy",
  title: "MIS Student · AI in Business · Texas A&M",
  university: "Texas A&M University, Class of 2028",
  degree: "BBA in Management Information Systems · Minor: AI in Business",
  bio: "Howdy, I am currently pursuing a Management Information Systems degree with minors in Artificial Intelligence in Business at Texas A&M University, with a focus on building expertise in data analytics, operational risk, and cloud infrastructure.",
  email: "ethan12hardy@gmail.com",
  github: "github.com/ethan12hardy",
  linkedin: "linkedin.com/in/ethan12hardy",
  projects: [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and built a personal portfolio site to showcase projects, experience, and skills — featuring smooth scroll animations, a clean editorial aesthetic, and responsive layout.",
      tags: ["Next.js", "TypeScript", "CSS", "Web Design"],
      link: "https://ethanjhardy.com",
      showArrow: true,
    },
    {
      title: "AITP Tableau Career Outcomes Dashboard",
      description:
        "Leading a team to design and build a Tableau dashboard matching MIS student profiles to industry career outcomes data, to be deployed on the Association of Information Technology Professionals public website.",
      tags: ["Tableau", "Data Analytics", "Team Leadership"],
      link: "#",
      showArrow: false,
    },
    {
      title: "Lawn Care Business Operations System",
      description:
        "Founded Tuition Lawn Care and built financial tracking and forecasting models in Excel to monitor revenue, operating expenses, and scheduling efficiency — supporting a full crew and stable client base.",
      tags: ["Excel", "Financial Modeling", "Operations", "Entrepreneurship"],
      link: "#",
      showArrow: false,
    },
  ],
  experience: [
    {
      role: "Operations Team Specialist",
      company: "Texas A&M Formula SAE Electric",
      period: "Apr 2025 – Present",
      bullets: [
        "Oversee operational risk and safety compliance for a 100+ member engineering organization, ensuring adherence to university regulations and event protocols.",
        "Manage a cross-functional team to standardize and streamline engineering workflows, reducing operational inefficiencies and failure points.",
        "Monitor and track incoming inventory and parts delivery, ensuring supply chain accuracy and timely fulfillment of mission-critical components.",
      ],
    },
    {
      role: "Operations Specialist",
      company: "Texas A&M Dept. of Recreational Sports",
      period: "Jan 2026 – Present",
      bullets: [
        "Process and record high-volume membership and transaction data using Innosoft Fusion, maintaining accuracy across a 373,000 sq ft. facility and 50-acre complex.",
        "Enforce facility policies and manage entry control for a large-scale recreational environment, ensuring regulatory compliance and member safety.",
      ],
    },
    {
      role: "IT Committee Member",
      company: "AITP, Texas A&M",
      period: "Jan 2025 – Present",
      bullets: [
        "Leading a team to design and build a Tableau career outcomes dashboard matching MIS student profiles to industry data, to be deployed on the AITP public website.",
      ],
    },
    {
      role: "Mentor",
      company: "Future Business Leaders of America, TAMU",
      period: "Aug 2025 – Present",
      bullets: [
        "Expanded active membership from 50 to 110 students through targeted recruitment.",
        "Mentor incoming pledge class on professional and personal development.",
      ],
    },
    {
      role: "Founder & CEO",
      company: "Tuition Lawn Care",
      period: "May 2025 – Aug 2025",
      bullets: [
        "Reviewed scheduling and billing workflows using NIST CSF concepts to improve data organization, account security, and access management.",
        "Built financial tracking and forecasting models in Excel to monitor revenue, operating expenses, and scheduling efficiency, enabling data-driven business decisions.",
        "Directed a crew of employees, managing task delegation, quality control, and client satisfaction across all service engagements.",
      ],
    },
  ],
  certifications: [
        {
      title: "CompTIA Security+ (SY0-701)",
      issuer: "CompTIA",
      date: "Aug 2026",
    },
    {
      title: "3rd Place — CMIS Case Competition",
      issuer: "Texas A&M University",
      date: "Apr 2026",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Apr 2026",
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "Aug 2025",
    },
    {
      title: "Data Analytics: Foundations + Extended Applications",
      issuer: "LinkedIn Learning",
      date: "Aug 2025",
    },
    {
      title: "Eagle Scout",
      issuer: "Boy Scouts of America",
      date: "Apr 2020",
    },
  ],
  skills: [
    { category: "Programming & Analysis", items: ["Python", "Java", "JavaScript", "C#", "HTML", "Data Modeling", "Financial Analysis"] },
    { category: "Platforms & Tools", items: ["AWS", "Tableau", "Microsoft Office Suite", "Google Workspace"] },
    { category: "Interpersonal", items: ["Leadership & Team Motivation", "Cross-functional Collaboration", "Professional Communication", "Analytical Problem Solving", "Client Relations"] },

  ],
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealDiv({
  children, delay = 0, className = "", style = {},
}: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const sections = ["about", "projects", "experience", "credentials", "contact"];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f9f8f6;
          --ink: #1a1a18;
          --ink-light: #6b6b63;
          --accent: #500000;
          --accent-light: #f5e6e6;
          --rule: #e0ddd8;
          --card-bg: #ffffff;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.6;
          min-height: 100vh;
        }

        .serif { font-family: 'DM Serif Display', serif; }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(249, 248, 246, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--rule);
          padding: 0 2rem;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          letter-spacing: 0.01em;
          color: var(--ink);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links button {
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-light);
          cursor: pointer;
          padding: 4px 0;
          border-bottom: 1.5px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }

        .nav-links button.active,
        .nav-links button:hover {
          color: var(--ink);
          border-bottom-color: var(--accent);
        }

        .nav-resume {
          background: var(--accent);
          color: white;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .nav-resume:hover { opacity: 0.85; }

        main {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        section {
          padding: 96px 0 64px;
          border-bottom: 1px solid var(--rule);
        }

        section:last-child { border-bottom: none; }

        #about {
          padding-top: 140px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: start;
        }

        .hero-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .hero-name {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.4rem, 6vw, 3.8rem);
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 1rem;
          color: var(--ink-light);
          font-weight: 400;
          margin-bottom: 1.75rem;
        }

        .hero-bio {
          font-size: 1rem;
          color: var(--ink);
          max-width: 480px;
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        .hero-degree {
          display: inline-block;
          background: var(--accent-light);
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 6px 14px;
          border-radius: 4px;
        }

        .hero-monogram {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 2.5rem;
          color: white;
          flex-shrink: 0;
          margin-top: 8px;
        }

        .section-label {
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-light);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          margin-bottom: 2.5rem;
          color: var(--ink);
        }

        /* PROJECTS */
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border: 1px solid var(--rule);
          border-radius: 10px;
          overflow: hidden;
        }

        .project-card {
          background: var(--card-bg);
          padding: 1.75rem 2rem;
          border-bottom: 1px solid var(--rule);
          transition: background 0.18s;
          position: relative;
          text-decoration: none;
          display: block;
          color: inherit;
        }

        .project-card:last-child { border-bottom: none; }
        .project-card:hover { background: var(--accent-light); }
        .project-card--no-link { cursor: default; }
        .project-card--no-link:hover { background: var(--card-bg); }

        .project-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .project-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
          color: var(--ink);
          margin-bottom: 0.4rem;
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--ink-light);
          line-height: 1.65;
          max-width: 540px;
          margin-bottom: 1rem;
        }

        .tag-row { display: flex; gap: 0.5rem; flex-wrap: wrap; }

        .tag {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--accent);
          background: var(--accent-light);
          padding: 3px 10px;
          border-radius: 100px;
        }

        .project-arrow {
          font-size: 1.1rem;
          color: var(--ink-light);
          margin-top: 2px;
          flex-shrink: 0;
          transition: transform 0.2s, color 0.2s;
        }

        .project-card:hover .project-arrow {
          transform: translate(3px, -3px);
          color: var(--accent);
        }

        /* EXPERIENCE */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .exp-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1.5rem;
        }

        .exp-period {
          font-size: 0.78rem;
          color: var(--ink-light);
          font-weight: 400;
          padding-top: 3px;
          line-height: 1.5;
        }

        .exp-company {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .exp-role {
          font-family: 'DM Serif Display', serif;
          font-size: 1.15rem;
          color: var(--ink);
          margin-bottom: 0.75rem;
        }

        .exp-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .exp-bullets li {
          font-size: 0.9rem;
          color: var(--ink-light);
          padding-left: 1rem;
          position: relative;
          line-height: 1.6;
        }

        .exp-bullets li::before {
          content: "–";
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        /* CREDENTIALS */
        .credentials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .cert-card {
          background: var(--card-bg);
          border: 1px solid var(--rule);
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
        }

        .cert-title {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 0.25rem;
          line-height: 1.4;
        }

        .cert-meta {
          font-size: 0.76rem;
          color: var(--ink-light);
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
        }

        .cert-issuer { color: var(--accent); font-weight: 500; }

        /* SKILLS */
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 1rem;
          align-items: start;
        }

        .skill-category {
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-light);
          font-weight: 500;
          padding-top: 4px;
        }

        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        /* CONTACT */
        .contact-intro {
          font-size: 1.05rem;
          color: var(--ink);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: var(--ink);
          font-size: 0.95rem;
          font-weight: 400;
          padding: 1rem 1.25rem;
          background: var(--card-bg);
          border: 1px solid var(--rule);
          border-radius: 8px;
          transition: border-color 0.18s, background 0.18s;
          width: fit-content;
          min-width: 280px;
        }

        .contact-link:hover {
          border-color: var(--accent);
          background: var(--accent-light);
        }

        .contact-link-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-light);
          font-weight: 500;
          min-width: 70px;
        }

        .contact-link-value { color: var(--ink); }

        footer {
          text-align: center;
          padding: 2.5rem 0;
          font-size: 0.78rem;
          color: var(--ink-light);
          letter-spacing: 0.04em;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.55s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }

        @media (max-width: 600px) {
          #about { grid-template-columns: 1fr; }
          .hero-monogram { display: none; }
          .exp-item { grid-template-columns: 1fr; gap: 0.5rem; }
          .skill-row { grid-template-columns: 1fr; gap: 0.4rem; }
          .credentials-grid { grid-template-columns: 1fr; }
          .nav-links { gap: 1.2rem; }
        }
      `}</style>

      <nav>
        <span className="nav-name serif">{data.name.split(" ")[0]}</span>
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s}>
              <button
                className={activeSection === s ? "active" : ""}
                onClick={() => scrollTo(s)}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-resume"
        >
          Resume
        </a>
      </nav>

      <main>
        {/* ABOUT */}
        <section id="about">
          <div>
            <p className="hero-eyebrow fade-up fade-up-1">{data.university}</p>
            <h1 className="hero-name fade-up fade-up-2">{data.name}</h1>
            <p className="hero-title fade-up fade-up-2">{data.title}</p>
            <p className="hero-bio fade-up fade-up-3">{data.bio}</p>
            <span className="hero-degree fade-up fade-up-4">{data.degree}</span>
          </div>
          <div className="hero-monogram fade-up fade-up-2" aria-hidden="true">
            {data.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <RevealDiv delay={0}>
            <p className="section-label">Work</p>
            <h2 className="section-title serif">Projects</h2>
          </RevealDiv>
          <div className="projects-grid">
            {data.projects.map((p, i) => (
              <RevealDiv key={i} delay={i * 100}>
                {p.showArrow ? (
                  <a href={p.link} className="project-card" target="_blank" rel="noreferrer">
                    <div className="project-row">
                      <div>
                        <p className="project-name">{p.title}</p>
                        <p className="project-desc">{p.description}</p>
                        <div className="tag-row">
                          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>
                      <span className="project-arrow">↗</span>
                    </div>
                  </a>
                ) : (
                  <div className="project-card project-card--no-link">
                    <div className="project-row">
                      <div>
                        <p className="project-name">{p.title}</p>
                        <p className="project-desc">{p.description}</p>
                        <div className="tag-row">
                          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </RevealDiv>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <RevealDiv delay={0}>
            <p className="section-label">Background</p>
            <h2 className="section-title serif">Experience</h2>
          </RevealDiv>
          <div className="experience-list">
            {data.experience.map((e, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="exp-item">
                  <p className="exp-period">{e.period}</p>
                  <div>
                    <p className="exp-company">{e.company}</p>
                    <p className="exp-role">{e.role}</p>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials">
          <RevealDiv delay={0}>
            <p className="section-label">Certifications & Honors</p>
            <h2 className="section-title serif">Credentials</h2>
          </RevealDiv>
          <RevealDiv delay={100}>
            <div className="credentials-grid">
              {data.certifications.map((c, i) => (
                <div key={i} className="cert-card">
                  <p className="cert-title">{c.title}</p>
                  <div className="cert-meta">
                    <span className="cert-issuer">{c.issuer}</span>
                    <span>{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealDiv>
          <RevealDiv delay={200}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Technical Skills</p>
            <div className="skills-list">
              {data.skills.map((s, i) => (
                <div key={i} className="skill-row">
                  <span className="skill-category">{s.category}</span>
                  <div className="skill-tags">
                    {s.items.map((item) => <span key={item} className="tag">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </RevealDiv>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <RevealDiv delay={0}>
            <p className="section-label">Say Hello</p>
            <h2 className="section-title serif">Contact</h2>
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, or just a good
              conversation about tech and business. Feel free to reach out.
            </p>
          </RevealDiv>
          <div className="contact-links">
            <RevealDiv delay={100}>
              <a href={`mailto:${data.email}`} className="contact-link">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">{data.email}</span>
              </a>
            </RevealDiv>
            <RevealDiv delay={200}>
              <a href={`https://${data.linkedin}`} className="contact-link" target="_blank" rel="noreferrer">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">{data.linkedin}</span>
              </a>
            </RevealDiv>
            <RevealDiv delay={300}>
              <a href={`https://${data.github}`} className="contact-link" target="_blank" rel="noreferrer">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">{data.github}</span>
              </a>
            </RevealDiv>
            <RevealDiv delay={400}>
              <a href="/resume.pdf" className="contact-link" target="_blank" rel="noreferrer">
                <span className="contact-link-label">Resume</span>
                <span className="contact-link-value">View / Download PDF</span>
              </a>
            </RevealDiv>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Ethan Hardy · Built with Next.js
      </footer>
    </>
  );
}

