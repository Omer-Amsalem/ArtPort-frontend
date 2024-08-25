import React from 'react';
import './ProfileSection.css'; // This file will contain the CSS for ProfileSection

const ProfileSection = ({ profileImageUrl, altText }) => {
  return (
    <div className="profile-section">
      <img 
        src={profileImageUrl} 
        alt={altText} 
        className="profile-image"
      />
    </div>
  );
};

export default ProfileSection;