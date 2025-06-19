export default function Hero({
  title,
  subtitle,
  ctaText,
  secondaryText,
  backgroundImage,
}) {
  return (
    <header
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      <div className="container h-100 d-flex align-items-center">
        <div className="text-white">
          <h1 className="display-4 fw-bold mb-4">{title}</h1>
          <p className="lead mb-4">{subtitle}</p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary btn-lg px-4">{ctaText}</button>
            <button className="btn btn-outline-light btn-lg px-4">
              {secondaryText}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
