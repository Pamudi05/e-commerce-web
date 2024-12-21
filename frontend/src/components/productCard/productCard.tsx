import { Card } from "@mui/material";
import "./productsCard.css";
//import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "../../interfaces/Product";
import AxiosInstance from "../../config/axiosInstance";
import Carts from "../../interfaces/Cart";
import WhishList from "../../interfaces/Wishlist";

interface ProductCardProps {
  product: Product;
  showDeleteButton?: boolean;
  showLikeButton?: boolean;
  products?: string;
  customer?: string;
  onProductDelete?: (productId: string) => void;
}

function ProductCard({
  product,
  showDeleteButton = false,
  showLikeButton = false,
  products,
  customer,
  onProductDelete,
}: ProductCardProps) {

  const [isSelected, setIsSelected] = useState(false);
  const [, setWhislists] = useState<WhishList[]>([]);
  const [, setCart] = useState<Carts[]>([]);
  const [, setLoading] = useState(false);

  useEffect(() => {
    if (customer && products) {
      const getAwhishlist = async () => {
        try {
          const response = await AxiosInstance.get(`/whishlists/${customerId}`);
          // console.log(response.data.data)
          // console.log(products)
          const isInWishlist = response.data.data.some(
            (wishlistItem: any) => wishlistItem.productId._id === products
          );
          setIsSelected(isInWishlist);
          //console.log(isInWishlist)

        } catch (error) {
          console.log("Failed to check wishlist status", error);
        }
      };

      getAwhishlist();
    }
  }, [customer, products]);

  const handleHeart = async () => {
    setLoading(true);
    try {
      if (isSelected) {
        await AxiosInstance.delete(`/whishlists/${customer}/${products}`);
        toast.success("Removed from Wishlist");
      } else {
        await AxiosInstance.post("/whishlists/create", {
          customerId: customer,
          productId: products,
        });
        //toast.success("Added to Wishlist");
      }
      setIsSelected((prev) => !prev);
    } catch (error) {
      toast.error("Product already in the Wishlist");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await AxiosInstance.delete(`/whishlists/${customer}/${products}`);
      if (onProductDelete && products) {
        onProductDelete(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const customerId = localStorage.getItem("customerId");

  const handleSubmit = async () => {
    setLoading(true);
    try {

      if (customer && products) {
          await AxiosInstance.delete(
            `/whishlists/${customerId}/${product._id}`
          );
      }

      await AxiosInstance.post("/carts/add", {
        customerId,
        products: [
          {
            productId: product._id,
            quantity: product.qty || 1,
          },
        ],
      });

      setWhislists([]);
      setCart([]);
      toast.success("product moved to the cart successfully!");
    } catch (error: any) {
      console.log(`${error.response.data.message}`);
    }
  };

  return (
    <>
      <Card className="productCard">
        <div className="img-card">
          {showDeleteButton && (
            <div className="heart-card">
              <img
                src="/assets/delete.png"
                alt="heart"
                onClick={handleDelete}
              />
            </div>
          )}
          {showLikeButton && (
            <div className="heart-card">
              <img
                src={
                  isSelected
                    ? "/assets/red-heart.svg"
                    : "/assets/heart-regular.svg"
                }
                alt="heart"
                onClick={handleHeart}
              />
            </div>
          )}
          <img src={product.image?.[0]} alt={product.name} />
          <div
            className="btn"
            onClick={handleSubmit}
            key={product._id}
          >
            <img src="/assets/cart.png" alt="cart" />
            <p>Add To Cart</p>
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
