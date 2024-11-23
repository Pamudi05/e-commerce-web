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

function App() {
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
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        {/* <Route path="/allproducts" element={<AllProducts />}/> */}
        <Route path="/dresess" element={<DreassesPage />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/accessories" element={<AccessoryPage />} />
        <Route path="/handbags" element={<HandBagsPage />} />
        <Route path="/mens-dresses" element={<MenDreassesPage />} />
        <Route path="/mens-shoes" element={<MenShoesPage />} />
        <Route path="/mens-accessories" element={<MenAccessoryPage />} />
        <Route path="/mens-bags" element={<MenBagsPage />} />
        <Route path="/electronics" element={<ElectronicPage />} />
        <Route path="/home-lifestyle" element={<HomeLifePage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/sports-outdoor" element={<SportPage />} />
        <Route path="/babys-toys" element={<BabyToyPage />} />
        <Route path="/groceries-pets" element={<GroceryPage />} />
        <Route path="/health-beauty" element={<HealthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
