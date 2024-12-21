
import NavBar from "../components/navBar/NavBar";
import TopHeader from "../components/topHeader/topHead";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import Footer from "../components/footer/Footer";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.post("/customers/create", {
        fullName,
        email,
        phoneNumber,
        address,
        password,
      });
      console.log(response);
      toast.success(response.data.message || "Account created successfully!");

      setFullName("");
      setEmail("");
      setPhoneNum("");
      setPassword("");
      setAddress("");

      navigate("/login")
    } catch (error) {
      toast.error("Failed to create account. Please try again.")
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const email = event.target.value;
    setEmail(email);

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return
    }else{
      setEmailError("");
    }
  };

  const isValidPassowrd = (password: string) => {
    const passRegex = /.{8,}/;
    return passRegex.test(password);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);

    if (!isValidPassowrd(password)) {
      setPasswordError("Please enter 8 charatcters");
      return;
    } else {
      setPasswordError("");
    }

  }

  const isValidNumber = (phoneNumber: string) => {
    const numRegex = /^[0-9]{10}$/;
    return numRegex.test(phoneNumber);
  }

  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value;
    setPhoneNum(phoneNumber);

    if(!isValidNumber(phoneNumber)){
      setNumberError('Please enter valid Phone Number');
      return
    }else{
      setNumberError("");
    }
  }

  const isFormValid = () => {
    return (
      fullName &&
      isValidEmail(email) &&
      isValidPassowrd(password) &&
      isValidNumber(phoneNumber) &&
      address
    );
  };

  const [,setSearchText] = useState("")
  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText}/>
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
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                //id="standard-basic"
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
                type="email"
                onChange={handleEmail}
                value={email}
                error={!!emailError}
                helperText={emailError}
                //id="standard-basic"
                label="Enter Email"
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
                onChange={handlePhoneNumber}
                value={phoneNumber}
                error={!!numberError}
                helperText={numberError}
                //id="standard-basic"
                label="Enter Phone Number"
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
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                //id="standard-basic"
                label="Enter Address"
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
                type="password"
                onChange={handlePassword}
                value={password}
                error={!!passwordError}
                helperText={passwordError}
                //id="standard-basic"
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

            <button 
              className="login" 
              onClick={signUp}
              disabled={!isFormValid() || loading}
            > 
            {loading ? <CircularProgress size={20}/> : "Create Account"}
            </button>

            <div className="google">
              <img src="/assets/google.png" alt="" />
              SignUp with Google
            </div>
          </div>
          <div className="acc">
            <p>Already have account?</p>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
