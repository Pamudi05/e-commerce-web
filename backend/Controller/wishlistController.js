const Wishlist = require('../Model/WhislistModel');

const createWishlist = async (req, res) => {
  try {
    const { customerId, productId } = req.body;

    if (!customerId || !productId) {
      return res.status(400).json({ message: 'Customer ID and Product ID are required' });
    }

    const existingItem = await Wishlist.findOne({ customerId, productId });

    if (existingItem) {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }

    const wishlistItem = new Wishlist({ customerId, productId });
    const result = await wishlistItem.save();

    res.status(201).json({
      message: 'Product added to wishlist',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

const findWishlist = async (req, res) => {
  try {
    const { customerId } = req.params;
    const wishlist = await Wishlist.find({ customerId }).populate('productId');
    
    if (wishlist.length === 0) {
      return res.status(404).json({ message: "No items in wishlist" });
    }
    
    res.status(200).json({ data: wishlist });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

const findAllWishlist = async (req, res) => {
  try {
    
    const wishlist = await Wishlist.find().populate('productId');

    if (wishlist.length === 0) {
      return res.status(404).json({ message: "No items in wishlist" });
    }

    const allWishlist = wishlist.map(product => ({
      ...product._doc,
      productId: {
        ...product.productId._doc,
        image: product.productId.image.map((img) => `${req.protocol}://${req.get('host')}/${img}`),
      }
    }));

    res.status(200).json({ data: allWishlist });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const { customerId, productId } = req.params;

    if (!customerId || !productId) {
      return res.status(400).json({ message: 'Customer ID and Product ID are required' });
    }
    
    await Wishlist.findOneAndDelete({ customerId, productId });

    res.status(200).json({ message: 'Product removed from wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

module.exports = { createWishlist, findWishlist, deleteWishlist, findAllWishlist };
