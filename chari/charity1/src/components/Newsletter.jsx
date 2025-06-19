export default function Newsletter() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="mb-3">Stay Updated</h2>
            <p className="mb-4">
              Subscribe to our newsletter for updates on our projects and impact
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <small className="text-muted">
              We'll never share your email. Unsubscribe anytime.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
