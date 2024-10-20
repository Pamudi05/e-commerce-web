import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";

function CheckOut() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="checkout">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p style={{ color: "grey" }}>/</p>
          <p style={{ color: "grey" }}>Cart</p>
          <p>/</p>
          <p>CheckOut</p>
        </div>
        <div className="check">
          <div className="check-left element">
            <p>Billing Details</p>
            <div>
              <label>First Name</label>
              <input style={{width: '470px'}} type="text" required />
            </div>
            <div>
              <label>Company Name</label>
              <input style={{width: '470px'}} type="text" required />
            </div>
            <div>
              <label>Address</label>
              <input style={{width: '470px'}} type="text" required />
            </div>
            <div>
              <label>Town / City</label>
              <input style={{width: '470px'}} type="text" required />
            </div>
            <div>
              <label>Phone Number</label>
              <input style={{width: '470px'}} type="text" required />
            </div>
            <div>
              <label>Email Address</label>
              <input style={{width: '470px'}} type="email" required />
            </div>
          </div>

          <div className="check-right element">
            <div>
              <img src="assets/Category-Computer.png" alt="" />
              <p>$650</p>
            </div>
            <div>
              <img src="assets/Category-Computer.png" alt="" />
              <p>$650</p>
            </div>

            <div className="check-total">
              <div
                style={{
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>SubTotal</p>
                <p>$456</p>
              </div>
              <div
                style={{
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div>
                <p>Total</p>
                <p>$456</p>
              </div>
              <div className="input">
                <input type="radio" name="payment" value='Card' id="input" />
                <label style={{paddingLeft:'20px', color:'black'}}>Card</label>
              </div>
              <div className="input">
                <input type="radio" name="payment" value= 'Cash on delievry' id="input" />
                <label style={{paddingLeft:'20px', color:'black'}}>Cash on Delivery</label>
              </div>
              <div className="button">
                <button style={{ margin: "0" }}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CheckOut;
