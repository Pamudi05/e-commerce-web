import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopHeader from "../../components/topHeader/topHead";
import AxiosInstance from "../../config/axiosInstance";
import { toast } from "react-toastify";
import LinearLoadingComponent from "../../components/loading/LinearLoadingComponent";
import ProductCard from "../../components/productCard/productCard";
import Product from "../../interfaces/Product";

function BabyToyPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/products/findAll");
      setProducts(response.data);
      console.log(response);
    } catch (error) {
      toast.error("Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const babyToys = products.filter(
    (product) => product.category === "BabyToys"
  );

  return (
    <div>
      <TopHeader />
      <NavBar />
      {/* using same css */}
      <div className="home">
        <div className="home-left element">
          <Sidebar />
        </div>
        <div
          className="home-right element"
          style={{ justifyContent: "flex-start" }}
        >
          <div className="wishCard" style={{ margin: 0, padding: "20px 90px" }}>
            {loading ? (
              <p>
                <LinearLoadingComponent />
              </p>
            ) : (
              babyToys.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabyToyPage;
