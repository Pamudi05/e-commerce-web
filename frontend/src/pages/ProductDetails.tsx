import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import { useState } from "react";

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const products = location.state?.product;
  console.log(products)

  const [qty, setQty] = useState(products.qty);
  if (!products) {
    return <p>Product details not found.</p>;
  }
  
  const handleSubmit = () => {
    const updatedPrice = Number(qty) * products.price;
    navigate('/checkout', { state: { product: {...products, qty , price: updatedPrice}} })
  }

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, setSearchText] = useState("");
  
  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
      <div className="productDetail">
        <div className="content">
          <p style={{ color: "grey" }}>Product</p>
          <p>/</p>
          <p>{products.name}</p>
        </div>

        <div className="details">
          <div className="details-left">
          {products.image && products.image.slice(0, 4).map((img: string, index: number) => (
            <div key={index}>
              <img src={img} alt={`Image ${index}`} style={{ width: '100%' }} />
            </div>
          ))}
          </div>
          <div className="details-right">
            {products.image && products.image.slice(4).map((img: string, index: number) => (
              <div key={index + 4}>
                <img src={img} alt={`Image ${index + 4}`} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
          <div className="product-details">
            <h3>{products.name}</h3>
            <p>Rs.{Number(qty) * products.price}</p>
            <p style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)', width:'350px', paddingBottom:'40px'}}>
              {products.note}
            </p>
            <div className="qty">
              <div onClick={decreaseQty} style={{ cursor: "pointer" }}>-</div>
              <div style={{ width: "80px" }}>{qty}</div>
              <div onClick={increaseQty} style={{ marginRight: "10px", cursor: "pointer"  }}>+</div>
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
