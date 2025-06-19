export default function Team() {
  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      bio: "Environmental scientist with 15 years experience in Nile conservation.",
      img: "../src/assets/alimor1.jpg",
    },
    {
      name: "Mariam Ali",
      role: "Program Director",
      bio: "Community development specialist focused on women's empowerment.",
      img: "../src/assets/karolina.jpg",
    },
    {
      name: "Youssef Mahmoud",
      role: "Field Coordinator",
      bio: "Works directly with riverside communities to implement projects.",
      img: "../src/assets/nappy.jpg",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Team</h2>
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h4>{member.name}</h4>
                  <p className="text-primary">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
