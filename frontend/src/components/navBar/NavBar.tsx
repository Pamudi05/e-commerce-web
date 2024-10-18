import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="container">
        <div className="logo">
          <Link to="/homepage">Exclusive</Link>
        </div>
        <div className="navLink">
          <ul>
            <li><Link to="/homepage">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/singUp">SignUp</Link></li>
          </ul>
        </div>
        <div className="frame">
          <ul>
            <li>
              <div>
                <input
                  type="search"
                  name="search"
                  placeholder="What are you looking for"
                />
                <img src="/assets/search.png" alt="search" />
              </div>
            </li>
            <li>
              <Link to="/wishlist"><img src="/assets/wishlist.png" alt="wishlist" /></Link>
            </li>
            <li>
            <Link to="/cart"><img src="/assets/cart.png" alt="cart" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
