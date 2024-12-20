interface WhishList {
    _id: string;
    customerId: object;
    productId: {
        _id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        qty: number;
        code: string;
      };
  }
  
  export default WhishList;
  