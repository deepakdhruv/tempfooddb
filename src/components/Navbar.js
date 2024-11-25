import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css';



function Navbar() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 font-weight-bold font-italic"  to="/">UCampus</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fs-5" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className=" nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className=" nav-link active fs-5" to="/orders" aria-current="page" >My Orders</Link>
      </li>: ""
        }

      
      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>

      <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
      <Link className="btn bg-white text-success mx-1" to="/Createuser">Signup</Link>
      </div>:
      <div className='d-flex'>

{/* <div className='btn bg-white text-success mx-2'>
      My Cart
    </div> */}

<Link className="nav-link btn bg-white text-success mx-2" to="/MyCart">My Cart</Link>
      <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
        Logout
      </div>

      </div>
      
    }
     
        
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar