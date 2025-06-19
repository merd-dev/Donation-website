export default function Gallery() {
  const images = [
    { src: "../src/assets/water.jpg", caption: "Clean Water Project" },
    { src: "../src/assets/school.jpg", caption: "School Construction" },
    { src: "../src/assets/medical.jpg", caption: "Medical Camp" },
    { src: "../src/assets/community.jpg", caption: "Community Training" },
  ];

  return (
    <div className="row g-3">
      {images.map((img, index) => (
        <div key={index} className="col-md-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <img
              src={img.src}
              alt={img.caption}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="text-center text-muted mb-0">{img.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
