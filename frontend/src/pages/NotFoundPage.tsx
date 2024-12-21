import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import { useState } from "react";

function NotFound() {
  const [, setSearchText] = useState("");
  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
      <div className="notFound">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>404 Error</p>
        </div>
        <div className="error">
          <p style={{fontSize:'100px', marginBottom:'40px', padding:'0'}}>404 Not Found</p>
          <p style={{fontSize:'18px', marginBottom:'40px', padding:'0'}}>Your visited page not found. You may go home page.</p>
          <Link to="/homepage">
            <button>Back to home page</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
