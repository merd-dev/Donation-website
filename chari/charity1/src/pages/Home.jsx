import Navbar from "../components/Navbar.jsx";
// import space from "../assets/page-header.jpg";
import "../css/donate.css";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";

export default function Donate() {
  return (
    <>
      <Navbar />
      {/* <div>
        <div className="img-container">
          <img src={space} />
          <div className="overlay-text">
            <h1>"Your Help Changes Lives – One Gift at a Time"</h1>
            <p>
              Every donation, big or small, creates real impact. Join us in
              making a difference today—because hope starts with you.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <Landing />
      <Initiatives />
      <Funds />
      <ContactForm />
      <Footer />
      <BackToTop /> */}
    </>
  );
}
