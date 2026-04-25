import React, { useState } from 'react';
import './PageStyles.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">Contact Us</h1>
        <div className="page-content">
          <p className="page-intro">
            This page is lazy loaded when you navigate to it. Notice how the loading spinner
            appears briefly before this content loads!
          </p>

          <h2>Get In Touch</h2>
          <p>
            Have questions about this application? Fill out the form below and we'll get back to you.
          </p>

          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <h3>Thank you for contacting us!</h3>
              <p>We'll respond to your message soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}

          <h2>Other Ways to Reach Us</h2>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
