import React from 'react';

export default function Carousel({ search, setSearch }) {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{ zIndex: "9" }}>
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2 w-75 bg-white text-dark"
              type="search"
              placeholder="Search in here..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn text-white bg-danger" onClick={() => setSearch('')}>X</button>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://api.api-ninjas.com/v1/randomimage?category=food"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.api-ninjas.com/v1/randomimage?category=food"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.api-ninjas.com/v1/randomimage?category=food"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
