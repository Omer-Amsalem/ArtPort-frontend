import React from 'react';

const FeaturedArtworks = ({ artworks }) => {
  return (
    <section className="featured-artworks">
      <h2>Featured Artworks</h2>
      <div className="artworks-grid">
        {artworks.map((artwork, index) => (
          <div key={index} className="artwork-item">
            <img src={artwork.image} alt={artwork.title} />
            <h3>{artwork.title}</h3>
            <p>by {artwork.artist}</p>
            <p>${artwork.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtworks;
