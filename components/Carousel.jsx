// components/Carousel.js
import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex">
        <img
          src={items[currentIndex]}
          className="transition-opacity duration-1000"
        ></img>
      </div>
      
      <div className="fixed left-5 border-black top-1/2 transform -translate-y-1/2 flex flex-col">
        <button className="mb-4" onClick={() => handleChange(0)}>
          <img
            src="/graza.jpg"
            alt="Button 1"
            className="rounded-full w-12 h-12"
          />
        </button>
        <button className="mb-4" onClick={() => handleChange(1)}>
          <img
            src="/graza1.jpg"
            alt="Button 2"
            className="rounded-full w-12 h-12"
          />
        </button>
        <button className="mb-4" onClick={() => handleChange(2)}>
          <img
            src="/graza2.jpg"
            alt="Button 3"
            className="rounded-full w-12 h-12"
          />
        </button>
        <button onClick={() => handleChange(3)}>
          <img
            src="/graza3.jpg"
            alt="Button 4"
            className="rounded-full w-12 h-12"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
