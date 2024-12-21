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
import CheckOutPage from "./pages/CheckOutPage";
import DreassesPage from "./pages/Category/DreassesPage";
import ShoesPage from "./pages/Category/ShoesPage";
import AccessoryPage from "./pages/Category/AssessoryPage";
import HandBagsPage from "./pages/Category/HandbagPage";
import MenDreassesPage from "./pages/Category/MenDressesPage";
import MenShoesPage from "./pages/Category/MenShoesPage";
import MenBagsPage from "./pages/Category/MenBagsPage";
import MenAccessoryPage from "./pages/Category/MenAccessoryPage";
import ElectronicPage from "./pages/Category/ElectronicPage";
import HomeLifePage from "./pages/Category/HomeLifeStylePage";
import MedicinePage from "./pages/Category/MedicinePage";
import SportPage from "./pages/Category/SportsOutdoorPage";
import BabyToyPage from "./pages/Category/BabyToysPage";
import GroceryPage from "./pages/Category/GroceriesPage";
import HealthPage from "./pages/Category/HealthPage";
import { useState } from "react";
import AllProducts from "./pages/AllProducts";

function App() {
  const [searchText] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singUp" element={<SignupPage />} />
        <Route path="/forgotPassword" element={<ForgotPassPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/wishlist" element={<WishlistPage searchText={searchText} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/allproducts" element={<AllProducts searchText={searchText}/>}/>
        <Route path="/dresess" element={<DreassesPage searchText={searchText} />} />
        <Route path="/shoes" element={<ShoesPage searchText={searchText} />} />
        <Route path="/accessories" element={<AccessoryPage searchText={searchText} />} />
        <Route path="/handbags" element={<HandBagsPage searchText={searchText} />} />
        <Route path="/mens-dresses" element={<MenDreassesPage searchText={searchText} />} />
        <Route path="/mens-shoes" element={<MenShoesPage searchText={searchText}/>} />
        <Route path="/mens-accessories" element={<MenAccessoryPage searchText={searchText} />} />
        <Route path="/mens-bags" element={<MenBagsPage searchText={searchText}/>} />
        <Route path="/electronics" element={<ElectronicPage searchText={searchText} />} />
        <Route path="/home-lifestyle" element={<HomeLifePage searchText={searchText} />} />
        <Route path="/medicine" element={<MedicinePage searchText={searchText} />} />
        <Route path="/sports-outdoor" element={<SportPage searchText={searchText} />} />
        <Route path="/babys-toys" element={<BabyToyPage searchText={searchText} />} />
        <Route path="/groceries-pets" element={<GroceryPage searchText={searchText} />} />
        <Route path="/health-beauty" element={<HealthPage searchText={searchText} />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
