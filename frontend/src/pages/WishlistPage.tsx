import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import ProductCard from "../components/productCard/productCard";
import TopHeader from "../components/topHeader/topHead";

function Wishlist() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="wishlist">
      <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>WhishList</p>
        </div>
        <div className="wish">
          <h5>Wishlist (9)</h5>
          <Link to="/cart">
            <div>
              <h5>Move All to Bag</h5>
            </div>
          </Link>
        </div>
        <div className="wishCard">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
