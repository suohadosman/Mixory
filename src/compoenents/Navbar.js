import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import './Nav.css'
import mixory from './Images/mixory.png';
function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
     <nav className="navbar Nav navbar-expand-lg shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={mixory} alt="Logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-3">
      <Link to="/cart" className="nav-link cart-icon position-relative">
        <i className="fas fa-shopping-cart fa-lg"></i>
        {cartItems.length > 0 && (
          <span className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        )}
      </Link>
    </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
