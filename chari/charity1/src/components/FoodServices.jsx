import React from "react";
import "../css/donationservices.css"; // Create this CSS file

export default function FoodServices() {
  const handleDonate = (packageName, price) => {
    alert(`You chose: ${packageName} - ${price}\n\nDonation functionality coming soon!`);
  };

  return (
    <div className="container">
      <div className="section">
        <h2 className="title">🌾 Food Services Sector</h2>
        <p><strong>Sector Leader:</strong> Ustaz Hamza Mahammad Nur</p>
        <div className="highlight">
          <p><strong>Mission:</strong> To ensure no family in need sleeps hungry by delivering nutritious food packages that sustain 3–5 people for a day.</p>
        </div>
        <p><strong>Food Packaging:</strong> Volunteers prepare and package food carefully to meet hygiene, nutrition, and dignity standards.</p>
        <p><strong>Impact:</strong> At <em>Majmuaa Zillul Yatim wal Miskin</em>, we've helped feed hundreds of families through donations. This sector fights hunger and gives hope.</p>
        <p><strong>How You Can Help:</strong> Choose a package and help a family today.</p>
      </div>

      <div className="section">
        <h2>🍽️ Food Package Options</h2>
        <div className="pricing-table">
          {[
            {
              title: "BASIC PACKAGE",
              price: "ETB 750",
              items: ["Rice: 1.5 kg", "Lentils: 1 kg", "Cooking Oil: 750 ml", "Sugar: 750 g", "Tea: 200 g", "Vegetables: 1 kg"]
            },
            {
              title: "STANDARD PACKAGE",
              price: "ETB 1,000",
              items: ["Rice: 2 kg", "Lentils: 1.5 kg", "Cooking Oil: 1 liter", "Sugar: 1 kg", "Tea: 250 g", "Vegetables: 1.5 kg", "Meat: 1 kg"]
            },
            {
              title: "PREMIUM PACKAGE",
              price: "ETB 1,500",
              items: ["Rice: 2.5 kg", "Lentils: 2 kg", "Cooking Oil: 1.5 liters", "Sugar: 1.5 kg", "Tea: 300 g", "Vegetables: 2 kg", "Meat: 1.5 kg", "Fruits: 1 kg", "Dairy: 500 g"]
            }
          ].map((pack, index) => (
            <div className="pricing-plan" key={index}>
              <h3>{pack.title}</h3>
              <ul>
                {pack.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="price">{pack.price}</div>
              <div className="button" onClick={() => handleDonate(pack.title, pack.price)}>Donate Now</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
