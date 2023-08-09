import React, { useState } from 'react';
import image1 from './img/cat.jpg'
import image2 from './img/vaca.jpg'
import image3 from './img/cerdo.jpg'
import ImageViewer from './ImageViewer';

function ImageGallery  ()  {
    
    const images = [
        image1,
        image2,
        image3,
        // Agregar más URLs de imágenes aquí
      ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div className="thumbnail-list">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>
      {selectedImage &&
       <ImageViewer imageUrl={selectedImage} onClose={handleCloseImage} />
       }
    </div>
  );
};



export default ImageGallery;