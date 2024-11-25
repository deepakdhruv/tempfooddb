import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import burgerimg from '../components/burger.png';
import momosimg from '../components/momos.jpg';
import pizzaimg from '../components/pizza.jpg';
import Carousal from '../components/Carousal';

function Home() {
  const [search, setSearch] = useState('');
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        setFoodItem(data[0]);
        setFoodCat(data[1]);
        setLoading(false);
      } else {
        console.error("Error fetching data:", data.message || "Unknown error");
      }
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const carouselStyle = {
    zIndex: "1020",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "2rem"
  };

  const searchInputStyle = {
    maxWidth: "500px",
    padding: "12px 20px",
    borderRadius: "25px",
    border: "2px solid #fff",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const categoryHeaderStyle = {
    borderBottom: "2px solid #e0e0e0",
    padding: "15px 0",
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "600"
  };

  const carouselImageStyle = {
    height: "500px",
    objectFit: "cover",
    filter: "brightness(0.8)"
  };

  const carouselCaptionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px"
  };

  return (
    <>
      <Navbar />
      <Carousal/>

      <div className="container py-4">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading delicious food options...</p>
          </div>
        ) : (
          foodCat?.map((category) => (
            <div className="row mb-5" key={category._id}>
              <div className="col-12">
                <h3 style={categoryHeaderStyle}>{category.CategoryName}</h3>
              </div>
              <div className="d-flex flex-wrap gap-4">
                {foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === category.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((item) => (
                    <div key={item._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem={item} options={item.options[0]} />
                    </div>
                  ))}
                {foodItem.filter(
                  (item) =>
                    item.CategoryName === category.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                  <div className="col-12 text-center py-4">
                    <p className="text-muted">No items found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
