import { useEffect, useState } from "react";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import LinearLoadingComponent from "../components/loading/LinearLoadingComponent";
import Product from "../interfaces/Product";
import ProductCard from "../components/productCard/productCard";

interface AllProductsProps {
  searchText: string;
}

function AllProducts({ searchText }: AllProductsProps) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const customerId = localStorage.getItem("customerId");

  const getProducts = async (searchQuery: string = "") => {
    setLoading(true);
    try {
      const response = await AxiosInstance.get("/products/findAll" , {
        params: { searchText: searchQuery },
      });
      setProducts(response.data);
      console.log(response);
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(searchText);
  }, [searchText]);

  return (
    <div className="category">
      <div>
        <div className="title">
          <div className="box"></div>
          <p>All Products</p>
        </div>
        <div className="wishCard" style={{margin: '0px', padding: '40px 30px'}}>
        {loading ? (
          <p>
            <LinearLoadingComponent />
          </p>
        ) :  products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={{
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                code: product.code,
              }}
              showLikeButton={true}
              products={product._id}
              customer={customerId || undefined}
            />
          ))
        ) : (
          <p style={{width: '100%',  textAlign: 'center'}}>No products found.</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
