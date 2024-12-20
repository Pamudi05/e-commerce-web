import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";

function ProductDetails() {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate('/checkout')
  }

  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="productDetail">
        <div className="content">
          <p style={{ color: "grey" }}>Product</p>
          <p>/</p>
          <p>Name of the product</p>
        </div>
        <div className="details">
          <div className="details-left">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="details-right"></div>
          <div className="product-details">
            <h3>Havic HV G-92 Gamepad</h3>
            <p>Rs.192.00</p>
            <p style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', width:'350px', paddingBottom:'40px'}}>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="qty">
              <div>-</div>
              <div style={{ width: "80px" }}>2</div>
              <div style={{ marginRight: "10px" }}>+</div>
              <button style={{ width: "165px", height: "44px", margin: "0" }} onClick={handleSubmit}>
                Buy Now
              </button>
            </div>
            <div className="delivery">
              <div className="delivery-item">
                <div>
                  <img src="/assets/icon-delivery.png" alt="" />
                </div>
                <div>
                  <p style={{ fontWeight: "500" }}>Free Delivery</p>
                  <p style={{ fontSize: "12.5px" }}>
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="delivery-item">
                <div>
                  <img src="/assets/icon-return.png" alt="" />
                </div>
                <div>
                  <p style={{ fontWeight: "500" }}>Return Delivery</p>
                  <p style={{ fontSize: "13px" }}>
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
