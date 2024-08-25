import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'; // Import the icon
import './ProductCards.css'; // Ensure you have a CSS file for custom styles

const ProductCards = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleDetailsClick = () => {
    // Handle details button click
    console.log('Details button clicked');
  };

  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      {mediaItems.map((item, index) => (
        <Card
          component="li"
          sx={{ minWidth: 300, flexGrow: 1 }}
          key={index}
          onClick={() => openModal(item)}
        >
          <CardCover>
            {item.type === 'image' ? (
              <img
                src={item.src}
                srcSet={item.srcSet}
                loading="lazy"
                alt={item.alt}
                className="media-image"
              />
            ) : (
              <video autoPlay loop muted poster={item.poster} className="media-video">
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Modal for displaying the enlarged image */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <MdOutlineKeyboardBackspace size={24} />
            </button>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="modal-image"
              />
            ) : (
              <video controls className="modal-video" poster={selectedItem.poster}>
                <source src={selectedItem.src} type="video/mp4" />
              </video>
            )}
            <button className="modal-details" onClick={handleDetailsClick}>
              Details 
            </button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default ProductCards;
