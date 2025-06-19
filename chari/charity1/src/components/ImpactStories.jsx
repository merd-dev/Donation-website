export default function ImpactStories() {
  const stories = [
    {
      image: "../src/assets/water.jpg",
      title: "Clean Water for 10 Villages",
      stats: "5,000+ people served",
      text: "Our water purification project has reduced waterborne diseases by 80% in these communities.",
    },
    {
      image: "../src/assets/education.jpg",
      title: "Education for 500 Children",
      stats: "12 schools supported",
      text: "Scholarship programs have enabled children to attend school for the first time.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Impact</h2>
        <div className="row g-4">
          {stories.map((story, index) => (
            <div key={index} className="col-md-6">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <div className="row g-0 h-100">
                  <div className="col-md-6">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="img-fluid h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-4 d-flex flex-column h-100">
                      <h3>{story.title}</h3>
                      <p className="text-primary fw-bold">{story.stats}</p>
                      <p>{story.text}</p>
                      <button className="btn btn-outline-primary mt-auto align-self-start">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
