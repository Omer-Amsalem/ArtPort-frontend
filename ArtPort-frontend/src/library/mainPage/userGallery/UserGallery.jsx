import React from 'react';
import Header from '../mainComponents/header/Header';
import Footer from '../mainComponents/footer/Footer';
import HeroSection from '../mainComponents/heroSection/HeroSection';
import ProfileSection from '../userComponents/ProfileSection';
import ProductCards from '../userComponents/productCards/ProductCards';
import { CiCirclePlus } from "react-icons/ci";
import './UserGallery.css';

const mediaItems = [
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2023/06/14/04/45/mountain-8062284_640.png',
    srcSet: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x',
    alt: 'Art Image 1',
    title: 'Starry Night'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2024/07/19/12/23/woman-8906207_640.jpg',
    poster: 'https://cdn.pixabay.com/photo/2024/07/19/12/23/woman-8906207_640.jpg',
    title: 'waterfall'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_640.jpg',
    srcSet: 'https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_640.jpg',
    alt: 'Art Image 1',
    title: 'Starry Night'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2021/08/18/19/26/background-6556413_640.jpg',
    poster: 'https://cdn.pixabay.com/photo/2021/08/18/19/26/background-6556413_640.jpg',
    title: 'waterfall'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2021/04/26/01/39/trees-6207925_640.jpg',
    srcSet: 'https://cdn.pixabay.com/photo/2021/04/26/01/39/trees-6207925_640.jpg',
    alt: 'Art Image 1',
    title: 'Starry Night'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_640.png',
    poster: 'https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_640.png',
    title: 'waterfall'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2021/11/01/20/02/ship-6761585_640.jpg',
    srcSet: 'https://cdn.pixabay.com/photo/2021/11/01/20/02/ship-6761585_640.jpg',
    alt: 'Art Image 1',
    title: 'Starry Night'
  },
  {
    type: 'image',
    src: 'https://cdn.pixabay.com/photo/2024/01/20/07/51/ai-generated-8520530_640.png',
    poster: 'https://cdn.pixabay.com/photo/2024/01/20/07/51/ai-generated-8520530_640.png',
    title: 'waterfall'
  },
  
 
];

const userData = {
  firstName: "Omer", lastName: "Amsalem", title: "Amazing sentence about my art and how much I don't like css at the same time.",
  profileImageUrl: "https://cdn.pixabay.com/photo/2023/07/05/11/14/alpaca-8108043_640.png"
};

const MyGallery = () => {
  return (
    <div className="my-gallery-page">
      <Header />

      <HeroSection
        title={userData.firstName + " " + userData.lastName + "'s Gallery"}
        subtitle={userData.title}
        buttonText="Follow"
      />

      <ProfileSection
        profileImageUrl={userData.profileImageUrl}
        altText="Profile"
      />

      <div className="upload-section">
        <button className="upload-btn">Upload New Art to My Gallery</button>
      </div>

      <div className="gallery-section">
        <ProductCards mediaItems={mediaItems} /> {/* Pass mediaItems as a prop */}
      </div>

      <Footer />
    </div>
  );
};

export default MyGallery;
