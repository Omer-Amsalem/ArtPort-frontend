import React from 'react';


const NewsletterSignup = ({ placeholderText, buttonText }) => {
  return (
    <section className="newsletter-signup">
      <h2>Join Our Newsletter</h2>
      <p>Stay updated with the latest artworks and artists.</p>
      <input type="email" placeholder={placeholderText} />
      <button className="signup-btn">{buttonText}</button>
    </section>
  );
};

export default NewsletterSignup;