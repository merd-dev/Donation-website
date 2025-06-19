export default function PartnerLogos() {
  const partners = [
    {
      name: "UNICEF",
      logo: "../src/assets/10001.svg",
    },
    {
      name: "Red Cross",
      logo: "https://www.redcross.org/content/dam/redcross/imported-images/redcross-logo.png.img.png",
    },
    {
      name: "WHO",
      logo: "https://www.who.int/images/default-source/infographics/who-emblem.png",
    },
    {
      name: "UNESCO",
      logo: "../src/assets/10002.svg",
    },
    {
      name: "ph",
      logo: "../src/assets/ph_43121_165625.png",
    },
    {
      name: "logo6",
      logo: "../src/assets/logo7.png",
    },
    {
      name: "logo2",
      logo: "../src/assets/logo-2.jpg",
    },
    {
      name: "unnamed",
      logo: "../src/assets/unnamed.png",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Trusted Partners</h2>
        <div className="row justify-content-center align-items-center g-4">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="partner-logo p-4 d-flex align-items-center justify-content-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "80px",
                    filter: "grayscale(100%)",
                    opacity: 0.7,
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
