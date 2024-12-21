import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import Carts from "../interfaces/Cart";
import { useLocation } from "react-router-dom";

function CheckOut() {

  const [, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const [carts] = useState<Carts[]>([]);
  //const customerId = localStorage.getItem("customerId");

  const location = useLocation();
  const cart = location.state?.cart;
  console.log(cart)
  const product = location.state?.product;
  console.log(product)

  
  const subTotalCart  = cart?.reduce((acc: any, product: any) => {
    return acc + Number(product.quantity) * product.productId.price;
  }, 0);

  const subTotalProduct = product?.price;

  const grandTotalCart  = subTotalCart + 300;
  const grandTotalProduct = subTotalProduct + 300;

  const handleSubmit =  async() => {
    setLoading(true);
    try {
      const products = cart ? cart.map((carts: any) => ({
        productId: carts.productId._id,
        productName: carts.productName,
        quantity: carts.quantity,
        price: carts.productId.price,
      })) : [{
        productId: product?._id,
        productName: product?.name,
        quantity: product?.qty,
        price: product?.price,
      }];

      const response = await AxiosInstance.post("/orders/create", {
        fullName, companyName, address, city, phoneNumber, email, paymentType,products, 
        subTotal: cart ? subTotalCart : subTotalProduct,
        grandTotal: cart ? grandTotalCart : grandTotalProduct ,
      });

      setFullName('');
      setCompanyName('');
      setAddress('');
      setCity('');
      setPhoneNumber('');
      setEmail('');
      setPaymentType('');

      toast.success(response.data.message || "Order Placed successfully!");
    } catch (error) {
      console.error(error);
    }
  }

  const [, setSearchText] = useState("");

  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
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
              <input style={{width: '470px'}} type="text" value={fullName} onChange={(e) => {setFullName(e.target.value)}} required />
            </div>
            <div>
              <label>Company Name</label>
              <input style={{width: '470px'}} type="text" value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} />
            </div>
            <div>
              <label>Address</label>
              <input style={{width: '470px'}} type="text" value={address} onChange={(e) => {setAddress(e.target.value)}} required />
            </div>
            <div>
              <label>Town / City</label>
              <input style={{width: '470px'}} type="text" value={city} onChange={(e) => {setCity(e.target.value)}} required />
            </div>
            <div>
              <label>Phone Number</label>
              <input style={{width: '470px'}} type="text" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} required />
            </div>
            <div>
              <label>Email Address</label>
              <input style={{width: '470px'}} type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
          </div>

          <div className="check-right element">
            {/* If coming from ProductDetails (single product) */}
              {product ? (
                <div key={product._id}>
                  <img src={product.image[0]} alt={product.name} />
                  <p>Rs.{product.price}</p>
                </div>
              ) : null}

            {/* If coming from Cart (multiple products) */}
            {cart && cart.length > 0 ? (
              cart.map((carts: any) => (
                <div key={carts._id}>
                  <img src={carts.productImage.image[0]} alt={carts.productName} />
                  <p>Rs.{carts.productPrice}</p>
                </div>
              ))
            ) : null}
            <div className="check-total">
              <div
                style={{
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>SubTotal</p>
                <p>Rs.{cart ? subTotalCart : subTotalProduct}</p>
              </div>
              <div
                style={{
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>Shipping</p>
                <p>Rs.300</p>
              </div>
              <div>
                <p>Total</p>
                <p>Rs.{cart ? grandTotalCart : grandTotalProduct}</p>
              </div>
              <div className="input">
                <input type="radio" name="payment" value={'CREDIT'} id="input-credit" onChange={(e) => {setPaymentType(e.target.value)}}/>
                <label style={{paddingLeft:'20px', color:'black'}}>Card</label>
              </div>
              <div className="input">
                <input type="radio" name="payment" value= 'CASH' id="input-cash" onChange={(e) => {setPaymentType(e.target.value)}} />
                <label style={{paddingLeft:'20px', color:'black'}}>Cash on Delivery</label>
              </div>
              <div className="button" onClick={handleSubmit}>
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
