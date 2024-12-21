import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";

function About() {
  const [, setSearchText] = useState("");
  
  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
      <div className="about">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>About</p>
        </div>
        <div className="story">
          <div className="story-left">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="story-right">
            <img src="/assets/Fash.png" alt="Fashion" />
          </div>
        </div>
        <div className="services">
          <div>
            <img src="/assets/Services.png" alt="services" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div>
            <img src="/assets/Services (1).png" alt="services" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            <img src="/assets/Services (2).png" alt="services" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
