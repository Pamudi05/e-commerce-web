import { TextField } from "@mui/material";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="signUp">
        <div className="signUp-left element">
          <img src="/assets/Side-Image.png" alt="side" />
        </div>
        <div className="signUp-right element">
          <div>
            <p>Log in to Exclusive</p>
            <h4>Enter your details below</h4>
            <div className="textField">
              <TextField
                id="standard-basic"
                label="Enter Email or Phone Number"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "black",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                sx={{
                  "& label.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "black",
                  },
                }}
              />
            </div>
            <Link to="/homePage" style={{textDecoration: 'none'}}>
              <div className="login">Login</div>
            </Link>
            <div className="google">
              <img src="/assets/google.png" alt="" />
              Login with Google
            </div>
          </div>
          <div
            className="acc"
            style={{
              width: "280px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/forgotPassword"
              style={{
                textDecoration: "none",
                color: "#DB4444",
                fontSize: "13px",
              }}
            >
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
