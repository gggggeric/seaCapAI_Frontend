import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner, fill in your details including email and password, and verify your email address through the link we send you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are securely processed through encrypted channels."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. The link will expire in 24 hours for security reasons."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all our premium plans. If you're not satisfied with our service, contact our support team within 30 days of purchase for a full refund."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide 24/7 customer support through email, live chat, and phone. Our average response time is under 2 hours for priority issues and within 24 hours for standard inquiries."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time from your account settings. When upgrading, you'll be charged the prorated difference. When downgrading, the changes will take effect at your next billing cycle."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption, regular security audits, and comply with GDPR regulations. Your data is stored on secure servers with multiple backups and redundancy systems."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access to premium features until the end of your current billing period."
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <FaQuestionCircle />
            </div>
            <h1>Frequently Asked Questions</h1>
            <p>Find quick answers to common questions about our services and platform.</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="container">
        <div className="faq-content">
          <div className="faq-intro">
            <h2>Need Help? We've Got Answers</h2>
            <p>Can't find what you're looking for? <a href="/contactUs">Contact our support team</a> for personalized assistance.</p>
          </div>

          <div className="faq-grid">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="help-section">
            <div className="help-card">
              <h3>Still Have Questions?</h3>
              <p>Our support team is here to help you with any additional questions or concerns you might have.</p>
              <div className="help-actions">
                <a href="/contactUs" className="help-btn primary">Contact Support</a>
                <a href="/documentation" className="help-btn secondary">View Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="faq-footer">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;