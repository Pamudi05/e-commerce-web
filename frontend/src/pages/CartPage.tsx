import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import Footer from "../components/footer/Footer";
import React from "react";

function Cart() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="cart">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>Cart</p>
        </div>
        <div className="cart-card">
            <div className="cart-title">
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>SubTotal</li>
                </ul>
            </div>

            <div className="cart-product">
                <ul>
                    <li>
                        <img src="/assets/delete.png" alt="" />
                        <p>Name of the product</p>
                    </li>
                    <li>$234</li>
                    <li>1</li>
                    <li>$234</li>
                </ul>
            </div>
            
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
