import React from "react";
import "../css/donationservices.css"; // Create this CSS file

export default function EducationServices() {
  const handleDonate = (packageName, price) => {
    alert(
      `You chose: ${packageName} - ${price}\n\nDonation functionality coming soon!`
    );
  };

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">📚 Education Services Sector</h2>
        <p>
          <strong>Sector Leader:</strong> Sheikh Ibrahim Abdullahi
        </p>
        <div className="highlight">
          <p>
            <strong>Mission:</strong> To provide quality education to
            underprivileged children, equipping them with knowledge and skills
            for a better future.
          </p>
        </div>
        <p>
          <strong>Educational Programs:</strong> We run schools, provide
          scholarships, and supply educational materials to children in need.
        </p>
        <p>
          <strong>Impact:</strong> At <em>Majmuaa Zillul Yatim wal Miskin</em>,
          we've educated hundreds of children, built schools, and transformed
          communities through knowledge.
        </p>
        <p>
          <strong>How You Can Help:</strong> Support a child's education by
          choosing one of our sponsorship packages below.
        </p>
      </div>

      <div className="section">
        <h2>✏️ Education Support Packages</h2>
        <div className="pricing-table">
          {[
            {
              title: "SCHOOL SUPPLIES PACK",
              price: "ETB 600",
              items: [
                "Notebooks for 5 students",
                "Pens and pencils for 10 students",
                "Textbooks for 2 subjects",
                "School bag for 1 student",
                "Basic art supplies",
              ],
            },
            {
              title: "MONTHLY SPONSORSHIP",
              price: "ETB 1,200",
              items: [
                "Full school uniform",
                "All necessary textbooks",
                "Monthly stationery supply",
                "School meal program",
                "Extracurricular activities",
                "Transportation support",
              ],
            },
            {
              title: "ANNUAL SCHOLARSHIP",
              price: "ETB 10,000",
              items: [
                "Full year tuition fees",
                "Complete set of uniforms",
                "All required textbooks",
                "School supplies for entire year",
                "Examination fees",
                "Computer literacy training",
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
