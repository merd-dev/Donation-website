import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactGet from "../components/ContactGet";
import BackToTop from "../components/BackToTop";
import PageHeader from "../components/PageHeader";
import Map from "../components/Map";

export default function Contact() {
  return (
    <>
      <Navbar />
      <PageHeader title="Contact Us" path="contact" name="Contact" />
      <ContactGet />
      <ContactForm />
      <Map />
      <Footer />
      <BackToTop />
    </>
  );
}
