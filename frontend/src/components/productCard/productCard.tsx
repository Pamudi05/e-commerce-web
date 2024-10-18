import { Card } from "@mui/material";
import "./productsCard.css";
import { Link } from "react-router-dom";

function productCard() {
  return (
    <>
      <Card className="productCard">
        <div className="img-card">
          <div className="bin-card">
            <img src="/assets/delete.png" alt="" />
          </div>
          <img src="/assets/bag.png" alt="product-image" />
          <div className="btn">
            <img src="/assets/cart.png" alt="cart" />
            <Link to="/cart">
              <p>Add To Cart</p>
            </Link>
          </div>
          <div className="price-card">
            <p>Gucci duffle bag</p>
            <p style={{ color: "red" }}>$960</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default productCard;
