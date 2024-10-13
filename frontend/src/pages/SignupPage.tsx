import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function SignUp() {
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
            <p>Create an account</p>
            <h4>Enter your details below</h4>
            <div className="textField">
              <TextField
                id="standard-basic"
                label="Enter Your Name"
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
            <div className="login">Create Account</div>
            <div className="google"></div>
          </div>
          <div className="acc">
            <p>Already have account?</p> 
            <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
