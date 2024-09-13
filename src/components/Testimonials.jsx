import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What People Are Saying</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>
            "BloodAfya helped me find a donor in a matter of hours. I am forever grateful to the platform for saving my father’s life." – <strong>Alice M., Nairobi</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Organizing a blood drive has never been easier. With BloodAfya, I was able to post our community drive, and we received more donations than ever before!" – <strong>John K., Mombasa</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "I have always wanted to donate blood but did not know where to start. BloodAfya gave me the perfect opportunity to help others in need." – <strong>Faith O., Kisumu</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
