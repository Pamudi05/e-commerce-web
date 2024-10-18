import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";

function Contact() {
  return (
    <>
      <TopHeader />
      <NavBar />
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
                <h3 style={{ padding: "8px" }}>Call to us</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="contact-right">
            <div>
              <input type="name" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="text" placeholder="Your Phone Number *" required />
            </div>
            <textarea name="text" id="text" placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
