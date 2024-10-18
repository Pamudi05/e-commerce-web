import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { TextField } from "@mui/material";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";

function forgotPassword() {
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
            <p>Forgot Password</p>
            <h4>Enter your details below</h4>
            <div className="textField">
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
              <TextField
                id="standard-basic"
                label="Confirm Password"
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
            <div className="login">
              <Link to="/login" style={{ textDecoration: 'none', color:'white'}}>Change Password</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default forgotPassword;
