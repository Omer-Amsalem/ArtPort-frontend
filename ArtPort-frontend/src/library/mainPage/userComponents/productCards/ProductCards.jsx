import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import './ProductCards.css';

const ProductCards = ({ mediaItems }) => {
    return (
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        {mediaItems.map((item, index) => (
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }} key={index}>
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
      </Box>
    );
  };
  
  export default ProductCards;