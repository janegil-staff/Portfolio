// src/app/page.js
import { site, projects, skills } from "@/data/projects";
import { Phone } from "@/components/Device";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  const [first] = projects;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar__inner">
          <a className="brand" href="#top">
            {site.name}
          </a>
          <nav aria-label="Main">
            <ul>
              {projects.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>{p.name}</a>
                </li>
              ))}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="wrap hero__inner">
            <div className="hero__text">
              <p className="hero__who">
                {site.role} at {site.studio}, {site.location}
              </p>
              <h1>Apps for iPhone, Android and the web, built from start to finish.</h1>
              <p className="hero__intro">{site.intro}</p>
              <div className="hero__actions">
                <a className="button" href={`#${first.id}`}>
                  See the apps
                </a>
                <a className="button button--ghost" href={`mailto:${site.email}`}>
                  Email me
                </a>
              </div>
            </div>

            <div className="hero__stage" aria-hidden="true">
              {projects.slice(0, 3).map((p, i) => (
                <div key={p.id} className={`hero__card hero__card--${i}`} style={{ "--accent": p.accent }}>
                  <Phone src={p.screens[0].src} alt={p.name} accent={p.accent} priority={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}

        <section className="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 id="skills-title">One person, the whole product</h2>
            <ul className="skills__list">
              {skills.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap contact__inner">
            <h2 id="contact-title">Have an app idea?</h2>
            <p>Tell me what you want to build. I'll reply within a couple of days.</p>
            <a className="button button--light" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {site.studio}
          </p>
        </div>
      </footer>
    </>
  );
}
