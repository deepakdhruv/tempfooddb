import React from 'react';
import burgerimg from './burger.png';
import momosimg from './momos.jpg';
import pizzaimg from './pizza.jpg';

function Carousal() {
  return (
    <div>
      <style>
        {`
          #carouselExampleCaptions {
            height: 50vh; /* Set carousel height to 50% of viewport */
          }
          #carouselExampleCaptions .carousel-inner {
            height: 100%; /* Match inner height to the carousel container */
          }
          #carouselExampleCaptions .carousel-inner img {
            height: 100%;
            object-fit: cover; /* Ensure the images fill the carousel */
          }
          .carousel-caption form {
            width: 50%; /* Adjust the width of the search bar */
            margin: 0 auto; /* Center the form horizontally */
          }
        `}
      </style>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={burgerimg}
              className="d-block w-100"
              alt="Burger"
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={momosimg}
              className="d-block w-100"
              alt="Momos"
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={pizzaimg}
              className="d-block w-100"
              alt="Pizza"
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
