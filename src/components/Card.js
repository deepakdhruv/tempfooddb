import React, { useState } from 'react';
import { UseDispatchCart } from './ContextReducer';

function Card(props) {
  const image = props.foodItem.img;
  const options = props.options;
  const foodName = props.foodItem.name;

  const dispatch = UseDispatchCart();
  const priceOptions = Object.keys(options || {});
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(priceOptions[0] || "");
  const [isLoading, setIsLoading] = useState(false);

  const calculateTotalPrice = () => {
    const pricePerUnit = options[selectedOption] || 0;
    return pricePerUnit * selectedQuantity;
  };

  const handleAddToCart = async () => {
    if (selectedOption === "" || !options[selectedOption]) {
      alert("Please select a valid option.");
      return;
    }

    setIsLoading(true);
    try {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: foodName,
        price: options[selectedOption],
        qty: selectedQuantity,
        size: selectedOption,
      });
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', maxHeight: '360px', margin: 'auto' }}>
        <img 
          src={image} 
          className="card-img-top" 
          alt={foodName} 
          style={{ height: "120px", objectFit: "cover" }} 
        />
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
          <div className="container w-100">
            {/* Quantity Selector */}
            <select 
              className="m-2 h-100 bg-success"
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
              value={selectedQuantity}
              aria-label="Select Quantity"
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            {/* Option Selector */}
            <select 
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              aria-label="Select Option"
              disabled={priceOptions.length === 0}
            >
              {priceOptions.length === 0 ? (
                <option value="">No options available</option>
              ) : (
                priceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} - ₹{options[option]}
                  </option>
                ))
              )}
            </select>

            {/* Total Price Display */}
            <div className="d-inline h-100 fs-5">
              <br />
              Total Price: ₹{calculateTotalPrice()}
            </div>
          </div>

          <hr />
          <button 
            className="btn btn-success justify-center ms-2" 
            onClick={handleAddToCart}
            disabled={isLoading || priceOptions.length === 0}
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
