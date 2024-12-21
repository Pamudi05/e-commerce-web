import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../config/axiosInstance";
import { useEffect, useState } from "react";
import Carts from "../interfaces/Cart";

function Cart() {
  const [carts, setCarts] = useState<Carts[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const customerId = localStorage.getItem("customerId");

  const getAllCart = async () => {
    try {
      const response = await AxiosInstance.get(`/carts/${customerId}`);
      setCarts(response.data.data);
    } catch (error) {
      console.log("Failed to get all cart items");
    }
  };

  const removeCartItem = async (cartId: string) => {
    try {
      console.log(cartId);

      await AxiosInstance.delete(`/carts/remove/${cartId}`);
      setCarts((prevCarts) => prevCarts.filter((cart) => cart._id !== cartId));

    } catch (error) {
      console.log("Failed to remove cart item");
    }
  }

  const clearAll = async () => {
    try {
      await AxiosInstance.delete(`/carts/clear/${customerId}`);
      setCarts([]);

    } catch (error) {
      console.log("Failed to remove cart item");
    }
  }

  const viewItem = async (productId: string)=> {
    try {
      const response = await AxiosInstance.get(`/products/findById/${productId}`);
      console.log(response.data.data)

      if (response?.data) {
        navigate('/productDetails', { state: { product: response.data.data } });
      }
    } catch (error) {
      
    }
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart: carts } });
  };

  useEffect(() => {
    getAllCart();
  }, []);

  const total = carts.reduce((acc, product) => {
    return acc + Number(product.quantity) * product.productId.price;
  }, 0);

  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
      <div className="cart">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>Cart</p>
        </div>
        <div className="wish">
          <h5>Cart products ({carts.length})</h5>
          <div onClick={clearAll}>
            <h5>Clear Cart</h5>
          </div>
        </div>
        <div className="cart-card">
          <div className="cart-title">
            <ul>
              <li></li>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>SubTotal</li>
              <li></li>
            </ul>
          </div>

          
            {carts.map((cart, index) => (
              <div className="cart-product" onClick={() => viewItem(cart.productId._id)}>
                <ul>
                  <li>
                    <img
                      src={cart.productImage.image[0]}
                      alt={cart.productId.name}
                    />
                  </li>
                  <li>{cart.productId.name}</li>
                  <li>Rs.{cart.productId.price}</li>
                  <li>{cart.quantity}</li>
                  <li>Rs.{Number(cart.quantity) * cart.productId.price}</li>
                  <li
                    key={cart._id}
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCartItem(cart._id);
                    }}
                    style={{
                      color: isHovered === index ? "red" : "gray",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >x</li>
                </ul>
              </div>
            ))}
         

          <div className="cart-total">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>Cart Total</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>SubTotal</p>
                <p>Rs.{total}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>Shipping</p>
                <p>300</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Total</p>
                <p>Rs.{total + 300}</p>
              </div>
              <div className="button" onClick={handleCheckout}>
                  <button style={{ width: "260px" }}>
                    Process to checkOut
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
