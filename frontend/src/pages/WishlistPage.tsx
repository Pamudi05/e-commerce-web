import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import ProductCard from "../components/productCard/productCard";
import TopHeader from "../components/topHeader/topHead";
import { useEffect, useState } from "react";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import LinearLoadingComponent from "../components/loading/LinearLoadingComponent";

function Wishlist() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
        const response = await AxiosInstance.get("/products/findAll");
        setProducts(response.data)
        console.log(response);
        toast.success(response.data.message || "Wishlist loaded successfully")
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <>
      <TopHeader />
      <NavBar />
      <div className="wishlist">
      <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>WhishList</p>
        </div>
        <div className="wish">
          <h5>Wishlist ({products.length})</h5>
          <Link to="/cart">
            <div>
              <h5>Move All to Bag</h5>
            </div>
          </Link>
        </div>
        <div className="wishCard">
          {loading ? (
            <p><LinearLoadingComponent /></p>
          ) : (
            products.map((product) => (
              <ProductCard key={product} product={product} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
