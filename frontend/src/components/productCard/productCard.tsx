import { Card } from "@mui/material";
import "./productsCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Product from "../../interfaces/Product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    toast.success("Product removed");
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      <Card className="productCard">
        <div className="img-card">
          <div className="bin-card" onClick={handleDelete}>
            <img src="/assets/delete.png" alt="" />
          </div>
          <img src={product.image} alt={product.name} />
          <div className="btn">
            <img src="/assets/cart.png" alt="cart" />
            <Link to="/cart">
              <p>Add To Cart</p>
            </Link>
          </div>
          <div className="price-card">
            <p>{product.name}</p>
            <p style={{ color: "red" }}>Rs.{product.price}</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
