import React from "react";
import contact from "../assets/donate.jpg";
import "../css/contactForm.css";

function ContactForm() {
  return (
    <>
      {/* <!-- Contact Start --> */}
       <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <h3>Get In Touch</h3>
            <h2>Contact for Support</h2>
          </div>
          <div className="contact-img">
            <img src={contact} alt="Image" />
          </div>
          </div>
               
      <div className="charity-container">
        <div className="charity-header">
          <h2>Support Our Charity</h2>
          <p>
            Your contributions help us make a difference. Donate to any of our
            bank accounts below:
          </p>
        </div>
        <div className="charity-cards">
          <div className="charity-card">
            <h3>Hijra Bank</h3>
            <p>
              <strong>Account Number:</strong>
            </p>
            <p>100631033001</p>
          </div>
          {/* Card 2  */}
          <div className="charity-card">
            <h3>ZamZam Bank</h3>
            <p>
              <strong>Account Number:</strong>
            </p>
            <p>0043841520101</p>
          </div>
          {/* Card 3 */}
          <div className="charity-card">
            <h3>Cooperative Bank of Oromia</h3>
            <p>
              <strong>Account Number:</strong>
            </p>
            <p>1041200282487</p>
          </div>
          {/* Card 4 */}
          <div className="charity-card in-process">
            <h3>CBE (Commercial Bank of Ethiopia)</h3>
            <p>
              <strong>Status:</strong>
            </p>
            <p>In Process</p>
          </div>
          {/* Card 5  */}
          <div className="charity-card in-process">
            <h3>Rammis Bank</h3>
            <p>
              <strong>Status:</strong>
            </p>
            <p>In Process</p>
          </div>
          {/* Card 6 */}
          <div className="charity-card in-process">
            <h3>Bank of Abyssinia</h3>
            <p>
              <strong>Status:</strong>
            </p>
            <p>In Process</p>
          </div>
        </div>
        <div className="charity-contact">
          <h3>Contact Us</h3>
          <p>Feel free to reach out to us for any inquiries or assistance.</p>
          <ul>
            <li>
              <strong>Phone:</strong> +251984600700
            </li>
            <li>
              <strong>Email:</strong> info@majmuaa.com
            </li>
            <li>
              <strong>Website:</strong> www.majmuaa.com
            </li>
            <li>
              <strong>Address:</strong> Harar, Ethiopia
            </li>
          </ul>
        </div>
      </div>

      {/* </div>
				</div>
					</div> */}
    </div>
      {/* <!-- Contact End --> */}
    </>
  );
}

export default ContactForm;
