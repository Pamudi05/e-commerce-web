import { CircularProgress, TextField } from "@mui/material";
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import AxiosInstance from "../config/axiosInstance";

function Login() {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ()=> {
    setLoading(true);
    try {
      const response = await AxiosInstance.post("/auth/login", {
        email,
        password
      });

      //console.log(response.data);    
      const customerId = response.data.customer.customerId;
      
    if (customerId) {
      localStorage.setItem("customerId", customerId);
      toast.success(response.data.message || "Login successfully");

      setEmail("");
      setPassword("");

      navigate("/homepage");
    } else {
      toast.error("Customer ID not found in response.");
      console.log("Failed to set customerId: customerId is undefined");
    }
    } catch (error) {
      toast.error("Failed to create account. Please try again.")
      console.log(error);
    }finally {
      setLoading(false);
    }
  }

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
                type="email"
                id="standard-basic"
                label="Enter your Email"
                variant="standard"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
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
                type="password"
                id="standard-basic"
                label="Password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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

            <button
            className="login"
            onClick={login}
            disabled={!login || loading}>
              {loading ? <CircularProgress size={20}/> : "Login"}
            </button>
            {/* <Link to="/homePage" style={{textDecoration: 'none'}}>
              <div className="login" onClick={login}>Login</div>
            </Link> */}
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
