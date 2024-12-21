import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import ProductCard from "../components/productCard/productCard";
import TopHeader from "../components/topHeader/topHead";
import { useEffect, useState } from "react";
import AxiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import LinearLoadingComponent from "../components/loading/LinearLoadingComponent";
import { AxiosResponse } from "axios";
import WhishList from "../interfaces/Wishlist";

interface WishlistProps {
  searchText: string;
}

function Wishlist({ searchText }: WishlistProps) {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWhislists] = useState<WhishList[]>([]);

  const customerId = localStorage.getItem("customerId");

  const getAllWhislist = async (searchQuery: string = "") => {
    setLoading(true);
    try {
      const response: AxiosResponse<{ data: WhishList[] }> =
        await AxiosInstance.get("/whishlists/" , {
          params: { searchText: searchQuery },
        });
      setWhislists(response.data.data);
    } catch (error: any) {
      //toast.error(`${error.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleProductDelete = (productId: string) => {
    setWhislists((prevWishlist) =>
      prevWishlist.filter((product) => product.productId._id !== productId)
    );
  };

  const moveToCart = async () => {
    setLoading(true);
    try {
      
      await AxiosInstance.post("/carts/add", {
        customerId,
        products: wishlist.map((product) => ({
          productId: product.productId._id,
          quantity: product.productId.qty,
        })),
      });

      for (const product of wishlist) {
        await AxiosInstance.delete(
          `/whishlists/${customerId}/${product.productId._id}`
        );
      }

      setWhislists([]);
      toast.success("All items moved to the cart successfully!");
    } catch (error: any) {
      console.log(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getAllWhislist(searchText);
  }, [searchText]);

  const [,setSearchText] = useState('');

  return (
    <>
      <TopHeader />
      <NavBar setSearchText={setSearchText} />
      <div className="wishlist">
        <div className="content">
          <p style={{ color: "grey" }}>Home</p>
          <p>/</p>
          <p>WhishList</p>
        </div>
        <div className="wish">
          <h5>Wishlist ({wishlist.length})</h5>
          <div onClick={moveToCart}>
            <h5>Move All to Bag</h5>
          </div>
        </div>
        <div className="wishCard">
          {loading ? (
            <p>
              <LinearLoadingComponent />
            </p>
          ) : wishlist.length === 0 ? (
            <p style={{width: '100%',  textAlign: 'center'}}>No items in your wishlist.</p>
          ): (
            wishlist.map((product) => (
              <ProductCard
                key={product.productId._id}
                product={{
                  _id: product.productId._id,
                  name: product.productId.name,
                  price: product.productId.price,
                  image: product.productId.image,
                  category: product.productId.category,
                  code: product.productId.code,
                }}
                showDeleteButton={true}
                products={product.productId._id}
                customer={customerId || undefined}
                onProductDelete={handleProductDelete}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
