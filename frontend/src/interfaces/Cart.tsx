interface Carts {
    _id: string;
    customerId: string;
    productImage: {
      image: string;
    }
    productId: {
        _id: string;
        name: string;
        price: number;
        image: string;
        qty: number;
      };
    quantity: string;
  }
  
  export default Carts;
  