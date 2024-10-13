import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="logo">
        <Link to="/homepage">Exclusive</Link>
      </div>
      <div className="support">
        <ul>
          <li>SUPPORT</li>
          <li>
            No.918.4, Debarawewa,
            <br /> Tissamaharama
          </li>
          <li>pamudiniw05@gmail.com</li>
          <li>+94 114 54 16</li>
        </ul>
      </div>
      <div className="account">
        <ul>
          <li>ACCOUNT</li>
          <li>My Account</li>
          <li>Login/Register</li>
          <li>Cart</li>
          <li>Whishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="privacy">
        <ul>
          <li>QUICK LINK</li>
          <li>Privacy Policies</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social">
        <ul>
          <li>SOCIAL</li>
          <li><Link to=""><img src="/assets/facebook.png" alt="facebook" /></Link></li>
          <li><Link to=""><img src="/assets/twitter.png" alt="twitter" /></Link></li>
          <li><Link to=""><img src="/assets/insta.png" alt="insta" /></Link></li>
          <li><Link to=""><img src="/assets/linked.png" alt="linked" /></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
