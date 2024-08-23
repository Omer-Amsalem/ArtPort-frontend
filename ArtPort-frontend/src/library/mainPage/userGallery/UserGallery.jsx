import React from 'react';
import Header from '../mainComponents/header/Header';
import Footer from '../mainComponents/footer/Footer';
import HeroSection from '../mainComponents/heroSection/HeroSection';
import './UserGallery.css'; 


const MyGallery = () => {
  return (
    <div className="my-gallery-page">
      <Header />

      <HeroSection
        title="Omer Amsalem Gallery"
        subtitle="Amazing sentence about my art and how much I don't like css at the same time."
        buttonText="Follow"
      />

      <div className="profile-section">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image"
        />
      </div>

      <div className="upload-section">
        <button className="upload-btn">Upload New Art to My Gallery</button>
      </div>

      <div className="gallery-section">
        {/* Placeholder for the user's gallery items */}
        <p>Your art will be displayed here...</p>
      </div>

      <Footer />
    </div>
  );
};

export default MyGallery;
