// src/components/Device.js
// Phone and browser frames. When an image src is missing, a placeholder screen is shown
// with the file path to add, so the layout looks finished before screenshots exist.

/* eslint-disable @next/next/no-img-element */

function Placeholder({ alt, accent, wide }) {
  return (
    <div
      className={wide ? "placeholder placeholder--wide" : "placeholder"}
      style={{ "--accent": accent }}
      role="img"
      aria-label={alt}
    >
      <span className="placeholder__ring" />
      <span className="placeholder__text">{alt}</span>
      <span className="placeholder__hint">Screenshot coming soon</span>
    </div>
  );
}

export function Phone({ src, alt, accent, className = "", priority = false }) {
  return (
    <figure className={`phone ${className}`}>
      <div className="phone__screen">
        {src ? (
          <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} />
        ) : (
          <Placeholder alt={alt} accent={accent} />
        )}
      </div>
    </figure>
  );
}

export function Browser({ url, src, alt, accent }) {
  return (
    <figure className="browser">
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser__url">{url}</span>
      </div>
      <div className={src ? "browser__screen" : "browser__screen browser__screen--empty"}>
        {src ? <img src={src} alt={alt} loading="lazy" /> : <Placeholder alt={alt} accent={accent} wide />}
      </div>
    </figure>
  );
}
