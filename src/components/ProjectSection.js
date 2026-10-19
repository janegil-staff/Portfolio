// src/components/ProjectSection.js
// One full-width section per app, coloured with that app's own accent.

/* eslint-disable @next/next/no-img-element */
import { Phone, Browser } from "./Device";

export default function ProjectSection({ project }) {
  const { id, name, tagline, accent, accentSoft, dark, icon, banner, description, features, screens, web, links, stack } = project;

  return (
    <section id={id} className={dark ? "project project--dark" : "project"} style={{ "--accent": accent, "--accent-soft": accentSoft }} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <header className="project__head">
          <div className="project__id">
            {icon ? (
              <img className="project__icon" src={icon} alt="" width="72" height="72" />
            ) : (
              <span className="project__icon project__icon--blank" aria-hidden="true">
                {name.replace("Qup ", "").charAt(0)}
              </span>
            )}
            <div>
              <h2 id={`${id}-title`} className="project__name">
                {name}
              </h2>
              <p className="project__tagline">{tagline}</p>
            </div>
          </div>

          <ul className="project__links" aria-label={`Get ${name}`}>
            {links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a className="pill" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <span className="pill pill--muted">{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </header>

        {banner && (
          <figure className="banner">
            <img src={banner.src} alt={banner.alt} loading="lazy" />
          </figure>
        )}

        <div className="project__body">
          <div className="project__text">
            {description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}

            <ul className="features">
              {features.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="project__phones">
            {screens.map((s, i) => (
              <Phone key={i} src={s.src} alt={s.alt} accent={accent} className={`phone--${i}`} />
            ))}
          </div>
        </div>

        <div className="project__web">
          {web.shots ? (
            <div className="web-shots">
              {web.shots.map((shot) => (
                <Browser key={shot.src} url={web.url} src={shot.src} alt={shot.alt} accent={accent} />
              ))}
            </div>
          ) : (
            <Browser url={web.url} src={web.src} alt={web.alt} accent={accent} />
          )}
          <p className="stack">
            <span>Built with</span> {stack.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
