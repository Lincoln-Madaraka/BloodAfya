import React from 'react';
import './ProfilePage.css'; 

const ProfilePage = () => {
  return (
    <section className="profile-page">
      <h1>User Profile</h1>
      {/* Background Header Photo */}
      <div className='pagex'>
      <div className="profile-header">
        <div className="profile-picture-container">
          <img src="/path-to-user-photo.jpg" alt="User" className="profile-picture" />
        </div>
      </div>

      {/* User Details Section */}
      <div className="user-details">
        <h2 className="user-name">Kevin Kelly</h2>
        <p className="user-info">Blood Group: O+</p>
        <p className="user-info">Location: Nairobi, Kenya</p>
        <p className="user-info">Age: 29</p>
      </div>

      {/* Contact Info, Bio, Blood Requests */}
      <div className="profile-sections">
        <div className="section">
          <h3>Contact Info</h3>
          <p>Email: john.doe@gmail.com</p>
          <p>Phone: +254723012311</p>
        </div>

        <div className="section">
          <h3>Bio</h3>
          <p>Donor and advocate for blood donations, passionate about helping those in need.</p>
        </div>

        <div className="section">
          <h3>Blood Requests</h3>
          <p>No active requests.</p>
        </div>

        <div className="section">
          <h3>Blood Request History</h3>
          <ul>
            <li>Blood donation for James (March 2024)</li>
            <li>Blood request for Mary (April 2024)</li>
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Search BloodAfya" />
      </div>
      </div>
    </section>
    
  );
};

export default ProfilePage;