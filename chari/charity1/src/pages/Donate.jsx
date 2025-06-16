import Navbar from "../components/Navbar.jsx";
import "../css/donate.css";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import "../css/page_header.css";

export default function Donate() {
  return (
    <>
      <Navbar />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4>Your Help Changes Lives – One Gift at a Time</h4>
            </div>
            <div className="col-12 text-center">
              <p className="mx-auto" style={{ maxWidth: "800px" }}>
                Every donation, big or small, creates real impact. Join us in
                making a difference today—because hope starts with you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Landing />
      <Initiatives />
      <Funds />
      <ContactForm />
      <Footer />
      <BackToTop />
    </>
  );
}
