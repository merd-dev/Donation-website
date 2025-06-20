import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import '../css/service.css';

export default function Service() {
  const navigate = useNavigate();
  // State for collapsible subsections
  const [openSections, setOpenSections] = useState({});

  // Toggle subsection visibility
  const toggleSection = (category, subsection) => {
    const key = `${category}-${subsection}`;
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Service data (structured for reusability)
  const services = [
    {
      category: 'Welfare Assistance',
      description: 'Comprehensive Support for Those in Need',
      icon: 'fas fa-hands-helping',
      subsections: [
        {
          title: 'Emergency Relief',
          icon: '🚑',
          content: [
            { highlight: 'Food Aid', text: 'Provision of non-perishable food items and ready-to-eat meals.' },
            { highlight: 'Clothing and Bedding', text: 'Distribution of essential clothing, shoes, and bedding.' },
            { highlight: 'Temporary Shelter', text: 'Assistance in finding temporary housing for those who are homeless or displaced.' },
            { highlight: 'Crisis Support', text: 'Short-term financial assistance for urgent expenses such as medical emergencies or unexpected repairs.' },
          ],
        },
        {
          title: 'Financial Aid',
          icon: '💰',
          content: [
            { highlight: 'Rent and Utility Assistance', text: 'Help with covering rent and utility bills.' },
            { highlight: 'Medical Expenses', text: 'Support for medical bills and treatments.' },
            { highlight: 'Educational Expenses', text: 'Financial help for school fees and supplies.' },
          ],
        },
        {
          title: 'Food Distribution',
          icon: '🛒',
          content: [
            { highlight: 'Food Pantries', text: 'Access to local food pantries that offer a variety of grocery items.' },
            { highlight: 'Meal Programs', text: 'Community meal services providing balanced, nutritious meals.' },
          ],
        },
        {
          title: 'Counseling and Support Services',
          icon: '👥',
          content: [
            { highlight: 'Social Work Services', text: 'Professional guidance and support to help individuals navigate their challenges.' },
            { highlight: 'Support Groups', text: 'Facilitated group sessions for emotional support and shared experiences.' },
          ],
        },
      ],
    },
    {
      category: 'Health Services',
      description: 'Health and Medical Support',
      icon: 'fas fa-heartbeat',
      subsections: [
        {
          title: 'Health Screenings',
          icon: '🏥',
          content: [
            { highlight: 'Basic Health Checks', text: 'Vital signs and condition screenings.' },
            { highlight: 'Specialist Referrals', text: 'Access to further diagnosis.' },
          ],
        },
        {
          title: 'Medical Treatment',
          icon: '💊',
          content: [
            { highlight: 'Primary Care Services', text: 'Treatment for common illnesses and minor injuries.' },
            { highlight: 'Chronic Disease Management', text: 'Ongoing care and support for chronic conditions like diabetes and hypertension.' },
          ],
        },
        {
          title: 'Vaccinations and Preventive Care',
          icon: '💉',
          content: [
            { highlight: 'Immunization Clinics', text: 'Providing essential vaccinations for children and adults.' },
            { highlight: 'Health Education', text: 'Workshops and informational sessions on healthy living and disease prevention.' },
          ],
        },
        {
          title: 'Mental Health Support',
          icon: '🧠',
          content: [
            { highlight: 'Counseling Services', text: 'Professional counseling for mental health issues such as anxiety, depression, and stress.' },
            { highlight: 'Support Programs', text: 'Programs and resources for mental health education and support.' },
          ],
        },
      ],
    },
    {
      category: 'Educational Programs',
      description: 'Educational Support and Development',
      icon: 'fas fa-graduation-cap',
      subsections: [
        {
          title: 'Scholarships and Grants',
          icon: '🏆',
          content: [
            { highlight: 'Tuition Assistance', text: 'Scholarships covering school or college tuition fees.' },
            { highlight: 'Educational Grants', text: 'Financial aid for books, supplies, and other educational needs.' },
          ],
        },
        {
          title: 'Tutoring and Mentorship',
          icon: '👩‍🏫',
          content: [
            { highlight: 'One-on-One Tutoring', text: 'Academic support in subjects where students need extra help.' },
            { highlight: 'Mentorship Programs', text: 'Guidance and support from experienced mentors to aid personal and academic growth.' },
          ],
        },
        {
          title: 'Educational Materials',
          icon: '📚',
          content: [
            { highlight: 'School Supplies', text: 'Distribution of textbooks, notebooks, and stationery.' },
            { highlight: 'Technology Access', text: 'Providing computers and other technology to aid learning.' },
          ],
        },
        {
          title: 'Adult Education',
          icon: '👨‍🎓',
          content: [
            { highlight: 'Literacy Classes', text: 'Basic education in reading, writing, and numeracy.' },
          ],
        },
      ],
    },
    {
      category: 'Financial Aid and Management',
      description: 'Transparent and Effective Financial Support',
      icon: 'fas fa-money-check-alt',
      subsections: [
        {
          title: 'Grants and Loans',
          icon: '🏦',
          content: [
            { highlight: 'Emergency Grants', text: 'Funds for urgent needs like medical emergencies or essential repairs.' },
            { highlight: 'Business Loans', text: 'Microloans for individuals to start or expand small businesses.' },
          ],
        },
        {
          title: 'Financial Counseling',
          icon: '📈',
          content: [
            { highlight: 'Budgeting Assistance', text: 'Help with creating and sticking to a budget.' },
            { highlight: 'Debt Management', text: 'Guidance on handling debt and improving credit scores.' },
          ],
        },
        {
          title: 'Investment in Community Projects',
          icon: '🤝',
          content: [
            { highlight: 'Infrastructure Development', text: 'Support for projects such as building community centers or improving local facilities.' },
            { highlight: 'Community Programs', text: 'Funding for programs that address local needs, such as after-school activities or youth programs.' },
          ],
        },
        // {
        //   title: 'Transparency and Accountability',
        //   icon: '🔍',
        //   content: [
        //     { highlight: 'Regular Reporting: '', text: 'Detailed reports on how funds are allocated and used.' },
        //     { highlight: 'Audits', text: 'Independent audits to verify that resources are managed properly and effectively.' },
        //   ],
        // },
      ],
    },
  ];

  return (
    <div className="service-page">
      <Navbar />

      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Our Services</h2>
              <p className="mx-auto">
                Empowering communities through comprehensive welfare, health, education, and financial support programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container-content">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <i className={`${service.icon} service-icon`}></i>
                <h2 className="service-category">{service.category}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              {service.subsections.map((subsection, subIdx) => {
                const sectionKey = `${index}-${subIdx}`;
                return (
                  <div key={subIdx} className="subsection">
                    <h3
                      className="subsection-title"
                      onClick={() => toggleSection(index, subIdx)}
                    >
                      <span className="icon">{subsection.icon}</span>
                      {subsection.title}
                      <i
                        className={`fas fa-chevron-right ${
                          openSections[sectionKey] ? 'open' : ''
                        }`}
                      ></i>
                    </h3>
                    {openSections[sectionKey] && (
                      <ul className="service-list">
                        {subsection.content.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <i className="fas fa-check-circle"></i>
                            <strong className="highlight">{item.highlight}</strong> {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Support Our Services</h2>
              <p className="cta-text">
                Your donation fuels our mission to uplift communities. Make a difference today!
              </p>
              <button
                className="donate-btn btn btn-success"
                onClick={() => navigate('/donate')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}