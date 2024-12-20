const Cart = require("../Model/CartModel");
const Product = require("../Model/PoductModel");

const addToCart = async (req, res) => {
    try {
      const { customerId, products } = req.body;

      for (const { productId, quantity } of products) {
        const product = await Product.findById(productId);

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
  
        const existingCartItem = await Cart.findOne({
          customerId: customerId,
          productId: productId,
        });
  
        if (existingCartItem) {
          existingCartItem.quantity += quantity;
          await existingCartItem.save();
        } else {
          const newCartItem = new Cart({
            customerId: customerId,
            productId: productId,
            quantity: quantity,
          });
          await newCartItem.save();
        }
      }


      return res.status(200).json({ data: products, message: "Cart updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error });
    }
  };
  
const getCartItems = async (req, res) => {
  try {
    const customerId = req.params.customerId;

    const cartItems = await Cart.find({ customerId: customerId }).populate(
      "productId"
    );

    if (cartItems.length === 0) {
      return res.status(404).json({ message: "No items in cart" });
    }

    const response = cartItems.map((product) => ({
      ...product._doc,
      productName: product.productId.name,
      productPrice: product.productId.price,
      productImage: {
        ...product.productId._doc,
        image: product.productId.image.map(
          (img) => `${req.protocol}://${req.get("host")}/${img}`
        ),
      },
    }));

    return res.status(200).json({ data: response });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const { quantity } = req.body;

    const updatedItem = await Cart.findByIdAndUpdate(
      cartItemId,
      { quantity: quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res
      .status(200)
      .json({ message: "Cart item updated", data: updatedItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;

    const removedItem = await Cart.findByIdAndDelete(cartItemId);

    if (!removedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    return res
      .status(200)
      .json({ message: "Cart item removed", data: removedItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

const clearCart = async (req, res) => {
  try {
    const customerId = req.params.customerId;

    await Cart.deleteMany({ customerId: customerId });

    return res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
  clearCart,
};
