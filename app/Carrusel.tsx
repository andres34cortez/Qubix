'use client'
import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/300x200/33FF57/000000?text=Image+2",
  "https://via.placeholder.com/300x200/5733FF/FFFFFF?text=Image+3",
];

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='w-full max-w-screen-md mx-auto p-4 relative'>
      <button
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white'
        onClick={prevImage}
      >
        &lt;
      </button>
      <img
        className='w-full h-auto'
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
      />
      <button
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white'
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
