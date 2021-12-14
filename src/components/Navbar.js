import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import authService from "../Services/auth-service";

export const Navbar = () => {

    let navigate = useNavigate();

    const handleLogout =()=>{
        authService.logout();
        navigate("/login")
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to = "/">Home</Link>
        </li>
        {!localStorage.getItem("user")?
         <li></li>:
         <li className="nav-item">
         <Link className="nav-link" to = "/cart">Shopping Cart</Link>
         </li>
         
        }
        {!localStorage.getItem("user")?
         <li></li>:
         <li className="nav-item">
         <Link className="nav-link" to = "/orders">All Orders</Link>
         </li>
         
        }
      </ul>
      {!localStorage.getItem("user")?
      <div className="nav">
        <Link className="nav-link" to = "/register">Register</Link>
        <Link className="nav-link" to = "/login">Login</Link>
      </div>
      :<button className="btn btn-primary" onClick={handleLogout}>Logout</button> }
    </div>
  </div>
</nav>
  );
};
