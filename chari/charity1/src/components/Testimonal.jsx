export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This organization transformed our village with clean water access.",

      author: "Ahmed Mohammed",
      role: "Community Leader, Nile Delta",
      image: "../src/assets/test1.jpg",
    },
    {
      quote:
        "Their education programs gave my children a future they never dreamed possible.",
      author: "Fatima Abdullah",
      role: "Mother of three",
      image: "../src/assets/test2.jpeg",
    },
  ];

  return (
    <section className="py-5 text-white" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container">
        <h2 className="text-center mb-5">Stories of Impact</h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6">
              <div className="card border-0 bg-primary-white h-100">
                <div className="card-body p-4">
                  <blockquote className="mb-4">
                    <p className="lead">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          border: "2px solid white",
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://i.pravatar.cc/150?img=0";
                        }}
                      />
                    </div>
                    <div>
                      <h5 className="mb-0">{testimonial.author}</h5>
                      <small>{testimonial.role}</small>
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
