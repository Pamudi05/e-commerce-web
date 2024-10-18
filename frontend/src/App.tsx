import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetails";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/singUp" element={<SignupPage />}/>
        <Route path="/forgotPassword" element={<ForgotPassPage />}/>
        <Route path="/homepage" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/productDetails" element={<ProductDetailsPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/error" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
