import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Footer from '../mainComponents/footer/Footer'; 
import Header from '../mainComponents/header/Header';
import CustomCarousel from '../mainComponents/carousel/CustomCarousel';
import HeroSection from '../mainComponents/heroSection/HeroSection';
import FeaturedArtworks from '../mainComponents/featuredArtworks/FeaturedArtworks';
import NewsletterSignup from '../mainComponents/newsletterSignup/NewsletterSignup';
import './MainPage.css'; 

const categories = ["Paintings", "Sculptures", "Photography", "Drawings", "Ceramics", "Digital", "3D", "Glass"];
const popularArtists = ["Omer Amsalem", "Lior Mekdasi", "Alfred Shoho", "Neta Chen", "Maria Egozim"];
const artworks = [
  {
    image: "https://cdn.pixabay.com/photo/2023/01/08/02/24/landscape-7704393_640.jpg",
    title: "Sunset Over the Ocean",
    artist: "Jane Doe",
    price: 200
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/09/28/21/14/abstract-8282554_640.jpg",
    title: "Abstract Shapes",
    artist: "John Smith",
    price: 150
  }
  // Add more artworks as needed
];

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      
      <HeroSection 
        title="Welcome to ArtPort" 
        subtitle="Discover and buy unique custom-made art from talented artists around the world." 
        buttonText="Explore Art" 
      />

      <FeaturedArtworks artworks={artworks} />

      <section className="categories">
        <h2>Categories</h2>
        <CustomCarousel items={categories} />
      </section>

      <section className="popular-artists">
        <h2>Popular Artists</h2>
        <CustomCarousel items={popularArtists} />
      </section>

      <NewsletterSignup 
        placeholderText="Enter your email" 
        buttonText="Sign Up" 
      />

      <Footer />
    </div>
  );
};

export default MainPage;