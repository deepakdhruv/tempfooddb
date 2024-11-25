import React from 'react';
import { UseCart, UseDispatchCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function MyCart() {
  <Navbar />
  const cart = UseCart(); // Fetch cart items from context
  const dispatch = UseDispatchCart(); // Dispatch actions to modify the cart
  const navigate = useNavigate(); // For navigation

  // Function to remove an item from the cart
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  // Function to clear the cart with a confirmation prompt
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      dispatch({ type: "CLEAR" });
    }
  };

  return (
   <>
   <Navbar/>
    <div className="container mt-5">
      <h2>My Orders</h2>
      {cart.length === 0 ? (
        <div className="text-center mt-4">
          <h5>Your cart is empty!</h5>
          <p>Add some delicious food to your cart.</p>
        </div>
      ) : (
        <div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Food Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id || item.id || index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.size}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.price}</td>
                    <td>₹{item.price * item.qty}</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item._id || item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-end mt-3">
            <h5>
              Grand Total: ₹{cart.reduce((total, item) => total + (item.price * item.qty), 0)}
            </h5>
            <button 
              className="btn btn-warning mt-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button 
              className="btn btn-success mt-2 ms-3"
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div></>
  );
}

export default MyCart;
