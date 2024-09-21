import React, { useState }  from 'react';
import './FAQPage.css'; 

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is BloodAfya?",
      answer: "BloodAfya is a platform that connects blood donors with recipients in need, facilitates blood drive announcements, and promotes health awareness related to blood donation."
    },
    {
      question: "How does BloodAfya work?",
      answer: "BloodAfya allows blood recipients to post blood requests, and eligible donors can search for donation opportunities. The app also provides updates on local blood drives and health information related to blood donation."
    },
    {
      question: "Who can sign up as a blood donor on BloodAfya?",
      answer: "Anyone who meets the local blood donation eligibility criteria, such as being in good health, within the required age range, and having no disqualifying medical conditions, can sign up."
    },
    {
      question: "How do I find blood drives near me?",
      answer: "You can find blood drives by using our “Find A Blood Drive” feature, where we list upcoming blood donation events by location."
    },
    {
      question: "Is BloodAfya free to use?",
      answer: "Yes, BloodAfya is free for both donors and recipients. Our mission is to facilitate life-saving connections and promote blood health education."
    },
    {
      question: "How do I post a blood request?",
      answer: "You can post a blood request by signing up or logging in to your account, navigating to the 'Post Blood Request' section, and filling in the necessary details such as blood type, location, and urgency."
    },
    {
      question: "Can I track my blood donation history?",
      answer: "Yes, once you log in to your profile, you can view your donation history, including past donations and upcoming appointments."
    },
    {
      question: "Is my personal information safe on BloodAfya?",
      answer: "Absolutely. We take data privacy seriously. Your information is securely stored and will not be shared with third parties without your consent."
    },
    {
      question: "How do I become a registered user on BloodAfya?",
      answer: "You can register by clicking on the 'Sign Up' button, providing basic details like your name, email, and phone number, and creating a secure password."
    },
    {
      question: "How can organizations post their blood drives on BloodAfya?",
      answer: "Organizations can contact us directly or create an organizational account, which allows them to post and manage blood drives through our platform."
    },
    {
      question: "Why should I donate blood through BloodAfya?",
      answer: "BloodAfya offers a convenient, community-driven way to connect donors and recipients. By donating through our platform, you contribute directly to life-saving efforts and receive real-time updates about blood donation opportunities near you."
    }
  ];
  return (
    <section className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h2 onClick={() => toggleFAQ(index)}>{faq.question}</h2>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQPage;