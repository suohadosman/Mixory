import React from "react";
import "./Slider.css";
import image1  from './Images/image-1.jpg';
import image2  from './Images/image-2.jpg';
import image3  from './Images/image-3.jpg';
function Slider() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" 
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src={image1}

            className="d-block w-100 slider-img"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Discover Our Latest Collection</h2>
            <p>Trendy fashion and unique accessories just for you.</p>
            <a href="/shop" className="btn btn-primary mt-3">
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100 slider-img"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Style Meets Comfort</h2>
            <p>Premium shoes designed for your lifestyle.</p>
            <a href="/shop" className="btn btn-primary mt-3">
              Explore Now
            </a>
          </div>
        </div>


        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100 slider-img"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Smart Tech at Your Fingertips</h2>
            <p>Discover the latest in electronic innovation.</p>
            <a href="/shop" className="btn btn-primary mt-3">
              View Products
            </a>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
