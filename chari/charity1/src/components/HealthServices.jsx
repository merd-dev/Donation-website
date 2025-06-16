import React from "react";
import "../css/donationservices.css"; // Create this CSS file

export default function HealthServices() {
  const handleDonate = (packageName, price) => {
    alert(
      `You chose: ${packageName} - ${price}\n\nDonation functionality coming soon!`
    );
  };

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">🏥 Health Services Sector</h2>
        <p>
          <strong>Sector Leader:</strong> Dr. Amina Mohammed
        </p>
        <div className="highlight">
          <p>
            <strong>Mission:</strong> To provide essential healthcare services
            to underserved communities, ensuring access to medical treatment,
            medicines, and preventive care.
          </p>
        </div>
        <p>
          <strong>Medical Services:</strong> Our team of volunteer doctors and
          nurses provide free consultations, basic treatments, and health
          education.
        </p>
        <p>
          <strong>Impact:</strong> At <em>Majmuaa Zillul Yatim wal Miskin</em>,
          we've treated thousands of patients and provided life-saving
          medications to those who couldn't afford them.
        </p>
        <p>
          <strong>How You Can Help:</strong> Support our medical initiatives by
          choosing a donation package below.
        </p>
      </div>

      <div className="section">
        <h2>💊 Healthcare Support Packages</h2>
        <div className="pricing-table">
          {[
            {
              title: "BASIC MEDICINE PACK",
              price: "ETB 500",
              items: [
                "Basic first aid supplies",
                "Pain relievers for 50 patients",
                "Antibiotics for 20 treatments",
                "Bandages and dressings",
                "Oral rehydration salts",
              ],
            },
            {
              title: "FAMILY HEALTH PACK",
              price: "ETB 1,000",
              items: [
                "Complete first aid kit",
                "Medicines for common illnesses",
                "Prenatal vitamins for 5 mothers",
                "Children's health supplements",
                "Basic diagnostic tools",
                "Health education materials",
              ],
            },
            {
              title: "EMERGENCY CARE PACK",
              price: "ETB 2,500",
              items: [
                "Emergency medical supplies",
                "IV fluids and equipment",
                "Advanced medications",
                "Trauma care supplies",
                "Support for ambulance fuel",
                "Medical equipment maintenance",
              ],
            },
          ].map((pack, index) => (
            <div className="pricing-plan" key={index}>
              <h3>{pack.title}</h3>
              <ul>
                {pack.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="price">{pack.price}</div>
              <div
                className="button"
                onClick={() => handleDonate(pack.title, pack.price)}
              >
                Donate Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
