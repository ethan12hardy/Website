"use client";

import { useState } from "react";

const data = {
  name: "Your Name",
  title: "MIS Student & AI Enthusiast",
  university: "University Name",
  degree: "B.S. Management Information Systems, Minor in AI in Business",
  bio: "I'm a student passionate about the intersection of technology, data, and business strategy. I build systems that solve real problems — and I'm always learning something new.",
  resume: "/Ethan Hardy Main Resume.pdf",
  email: "you@email.com",
  github: "github.com/yourhandle",
  linkedin: "linkedin.com/in/yourhandle",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of what this project does, the problem it solves, and the impact it had.",
      tags: ["Python", "SQL", "Tableau"],
      link: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe the tools and frameworks used, and any interesting technical or business challenges you overcame.",
      tags: ["React", "Node.js", "REST API"],
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "Maybe an AI-related project, a business analysis, or a data pipeline you built for a class or internship.",
      tags: ["Machine Learning", "Excel", "Power BI"],
      link: "#",
    },
  ],
  experience: [
    {
      role: "IT Intern",
      company: "Company Name",
      period: "Summer 2024",
      bullets: [
        "Assisted in maintaining internal databases and dashboards used by 50+ employees.",
        "Automated a reporting workflow using Python, reducing manual effort by 3 hours/week.",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "Department of MIS",
      period: "Fall 2023 – Present",
      bullets: [
        "Supported instructor in grading and holding office hours for intro database course.",
        "Created supplementary SQL practice sets used by 120+ students.",
      ],
    },
  ],
};

export default function Page() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const sections = ["about", "projects", "experience", "contact"];

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
          --accent: #2d5a3d;
          --accent-light: #e8f0eb;
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

        /* NAV */
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

        /* LAYOUT */
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

        /* HERO */
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

        /* SECTION HEADER */
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
          cursor: pointer;
          transition: background 0.18s;
          position: relative;
        }

        .project-card:last-child { border-bottom: none; }
        .project-card:hover { background: var(--accent-light); }

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

        .contact-link-value {
          color: var(--ink);
        }

        /* FOOTER */
        footer {
          text-align: center;
          padding: 2.5rem 0;
          font-size: 0.78rem;
          color: var(--ink-light);
          letter-spacing: 0.04em;
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.55s ease both;
        }

        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }

        @media (max-width: 600px) {
          #about { grid-template-columns: 1fr; }
          .hero-monogram { display: none; }
          .exp-item { grid-template-columns: 1fr; gap: 0.5rem; }
          .nav-links { gap: 1.2rem; }
        }
        .resume-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  transition: background 0.2s, transform 0.2s;
}

.resume-button:hover {
  background: #1f4620;
  transform: translate(-2px, -2px);
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
<div className="fade-up fade-up-4" style={{ marginTop: "1.5rem" }}>
 <a 
  href={data.resume} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="resume-button fade-up fade-up-4"
  style={{ marginTop: "1.5rem" }}
>
  View Resume
</a>
</div>
    </div>
          <div
            className="hero-monogram fade-up fade-up-2"
            aria-hidden="true"
          >
            {data.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <p className="section-label">Work</p>
          <h2 className="section-title serif">Projects</h2>
          <div className="projects-grid">
            {data.projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                className="project-card"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ textDecoration: "none" }}
              >
                <div className="project-row">
                  <div>
                    <p className="project-name">{p.title}</p>
                    <p className="project-desc">{p.description}</p>
                    <div className="tag-row">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <p className="section-label">Background</p>
          <h2 className="section-title serif">Experience</h2>
          <div className="experience-list">
            {data.experience.map((e, i) => (
              <div key={i} className="exp-item">
                <p className="exp-period">{e.period}</p>
                <div>
                  <p className="exp-company">{e.company}</p>
                  <p className="exp-role">{e.role}</p>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <p className="section-label">Say Hello</p>
          <h2 className="section-title serif">Contact</h2>
          <p className="contact-intro">
            I'm always open to new opportunities, collaborations, or just a good
            conversation about tech and business. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={`mailto:${data.email}`} className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">{data.email}</span>
            </a>
            <a href={`https://${data.linkedin}`} className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">{data.linkedin}</span>
            </a>
            <a href={`https://${data.github}`} className="contact-link" target="_blank" rel="noreferrer">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">{data.github}</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {data.name} · Built with Next.js
      </footer>
    </>
  );
}
