import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopHeader from "../../components/topHeader/topHead";
import AxiosInstance from "../../config/axiosInstance";
import { toast } from "react-toastify";
import LinearLoadingComponent from "../../components/loading/LinearLoadingComponent";
import ProductCard from "../../components/productCard/productCard";
import Product from "../../interfaces/Product";

function SportPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const customerId = localStorage.getItem("customerId");

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/products/findAll");
      setProducts(response.data);
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

  const sport = products.filter(
    (product) => product.category === "Sports"
    
  );

  return (
    <div>
      <TopHeader />
      <NavBar />
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
              <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <LinearLoadingComponent />
              </p>
            ) : (
              sport.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    showLikeButton={true}
                    products={product._id}
                    customer={customerId || undefined}
                  />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportPage;
