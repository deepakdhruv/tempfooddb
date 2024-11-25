import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
function MyOrders() {
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = "USER_ID_HERE"; // Replace with actual user ID, e.g., from context or auth

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get(`/api/orders/${userId}`);
        setOrders(response.data);
      } catch (err) {
        setError('Failed to fetch orders');
        console.error('Failed to fetch orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    
   <>
   <Navbar/>
    <div className="container mt-5">
      <h2>My Orders</h2>
      {error ? (
        <div className="text-center mt-4">
          <h5>{error}</h5>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center mt-4">
          <h5>You have no orders yet!</h5>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Order Date</th>
                <th>Items</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{new Date(order.orderDate).toLocaleString()}</td>
                  <td>
                    {order.items.map((item, i) => (
                      <div key={i}>
                        {item.name} ({item.size}) x {item.qty} - ₹{item.price * item.qty}
                      </div>
                    ))}
                  </td>
                  <td>₹{order.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div></>
  );
}

export default MyOrders;
