import { useState } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import AxiosInstance from "../config/axiosInstance"
import { toast } from "react-toastify";

function Contact() {
  const [, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.post("/contacts/send", formData);
      console.log(response);
      toast.success(response.data.message || "Email sent successfully!");

    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  const [, setSearchText] = useState("");

  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
      <div className="contact">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>Contact</p>
        </div>
        <div className="con">
          <div className="contact-left">
            <div className="call">
              <div>
                <img src="/assets/icons-phone.png" alt="phone" />
                <h3 style={{ padding: "8px" }}>Call to us</h3>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="write">
              <div>
                <img src="/assets/icons-mail.png" alt="mail" />
                <h3 style={{ padding: "8px" }}>Email to us</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="contact-right">
                <div>
                  <input type="text" placeholder="Your Name *" name="name" value={formData.name} onChange={handleChange} required />
                  <input type="email" placeholder="Your Email *" name="email" value={formData.email} onChange={handleChange} required />
                  <input type="text" placeholder="Your Phone Number *"  name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <textarea name="message" id="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Send Message</button>
              </div>          
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
