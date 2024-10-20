import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import Footer from "../components/footer/Footer";
import React from "react";
import { Link } from "react-router-dom";

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
            
            <div className="cart-total">
                <div>
                    <p style={{fontSize: '20px', fontWeight:'500'}}>Cart Total</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between',  borderBottom: '2px solid rgba(0,0,0,0.3)'}}>
                      <p>SubTotal</p>
                      <p>$456</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between',  borderBottom: '2px solid rgba(0,0,0,0.3)'}}>
                      <p>Shipping</p>
                      <p>Free</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                      <p>Total</p>
                      <p>$456</p>
                    </div>
                    <div className="button">
                      <Link to='/checkout'>
                      <button style={{ width: '260px'}}>Process to checkOut</button>
                      </Link>
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
