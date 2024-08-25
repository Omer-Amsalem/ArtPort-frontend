import React from 'react';
import Header from '../mainComponents/header/Header';
import Footer from '../mainComponents/footer/Footer';
import HeroSection from '../mainComponents/heroSection/HeroSection';
import ProfileSection from '../userComponents/ProfileSection';
import './UserGallery.css'; 

const userData = {firstName: "Omer", lastName: "Amsalem", title: "Amazing sentence about my art and how much I don't like css at the same time.",
  profileImageUrl: "https://cdn.pixabay.com/photo/2023/07/05/11/14/alpaca-8108043_640.png"
};  

const MyGallery = () => {
  return (
    <div className="my-gallery-page">
      <Header />

      <HeroSection
        title= {userData.firstName + " " + userData.lastName+"'s Gallery"}
        subtitle= {userData.title}
        buttonText="Follow"
      />

      <ProfileSection
        profileImageUrl= {userData.profileImageUrl}
        altText="Profile"
      />

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
