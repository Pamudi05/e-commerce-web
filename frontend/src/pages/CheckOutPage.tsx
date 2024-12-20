import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import Carts from "../interfaces/Cart";

function CheckOut() {

  const [, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const [carts, setCarts] = useState<Carts[]>([]);
  const customerId = localStorage.getItem("customerId");

  const handleSubmit =  async() => {
    setLoading(true);
    try {
      const products = carts.map((cart) => ({
        productId: cart.productId._id,
        quantity: cart.quantity,
        price: cart.productId.price,
      }));

      const response = await AxiosInstance.post("/orders/create", {
        fullName, companyName, address, city, phoneNumber, email, paymentType,products, subTotal,
        grandTotal,
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
  
  const getAllCart = async () => {
    try {
      const response = await AxiosInstance.get(`/carts/${customerId}`);
      setCarts(response.data.data);
    } catch (error) {
      console.log("Failed to get all cart items");
    }
  };

  useEffect(()=> {
    getAllCart()
  }, [])

  const subTotal = carts.reduce((acc, product) => {
    return acc + Number(product.quantity) * product.productId.price;
  }, 0);

  const grandTotal = subTotal + 300;

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
            {carts.map((cart) => (
              <div>
                <img src={cart.productImage.image[0]} alt={cart.productId.name} />
                <p>Rs.{cart.productId.price}</p>
              </div>
            ))}
            <div className="check-total">
              <div
                style={{
                  borderBottom: "2px solid rgba(0,0,0,0.3)",
                }}
              >
                <p>SubTotal</p>
                <p>Rs.{subTotal}</p>
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
                <p>Rs.{grandTotal}</p>
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
