import { Link } from "react-router-dom";
import "./slider.css";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: "/assets/hero.png",
    logo: "/assets/apple-logo.png",
  },
  {
    id: 2,
    title: "leather handBag",
    subtitle: "Up to 5% off Voucher",
    image: "/assets/bag.avif",
    logo: "/assets/bag.png",
  },
  {
    id: 3,
    title: "Black Maxi Dress",
    subtitle: "Get Your Own One",
    image: "/assets/fashion.webp",
    logo: "/assets/fashion-logo.png",
  },
  {
    id: 4,
    title: "Black Sneakers",
    subtitle: "Wear With Beauty",
    image: "/assets/shoes.avif",
    logo: "/assets/shoe-logo.png",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <div className="text">
        <div className="text-1">
          <img src={slides[currentIndex].logo} alt="brand-logo" />
          <h5>{slides[currentIndex].title}</h5>
        </div>
        <div className="text-2">
          <p>{slides[currentIndex].subtitle}</p>
        </div>
        <div className="text-3">
          <Link to="/">Shop Now</Link>
          <img src="/assets/arrow-right.svg" alt="arrow-right" />
        </div>
      </div>
      <div className="img">
        <img src={slides[currentIndex].image} alt="hero" />
      </div>

      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
