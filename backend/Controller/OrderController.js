const Order = require("../Model/OrderModel")

const createOrder = async (req, res) => {
  try {

    const order = new Order({
      fullName: req.body.fullName,
      companyName: req.body.companyName,
      address: req.body.address,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      paymentType: req.body.paymentType,
      activeState: true,
      products: req.body.products,
      subTotal: req.body.subTotal,
      grandTotal: req.body.grandTotal,
    });

    const result = await order.save();

    res.status(201).json({
      message: "Order Placed Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

// const findAllProduct = (req, res) => {
//   try {
//     const searchText = req.query.searchText || "";

//     const pageNumber = parseInt(req.query.pageNumber) || 1;
//     const pageSize = parseInt(req.query.size) || 10;

//     const query = {
//       $or : [
//         {name: new RegExp(searchText, "i")},
//         {category: new RegExp(searchText, "i")}
//       ]
//     };

//     Product.find(query)
//       .skip((pageNumber - 1) * pageSize)
//       .limit(pageSize)
//       .then((response) => {
//         const allProducts = response.map((product) => {
//           return {
//             ...product._doc,
//             image: product.image.map((img) => `${req.protocol}://${req.get('host')}/${img}`),
//           };
//         });
//         return res.status(200).json(allProducts);
//       })
//   } catch (error) {
//     res.status(500).json({ message: "internal server error", error: error });
//   }
// };

// const findById = (req, res) => {
//   try {
//     const productId = req.params.id;

//     Product.findById(productId).then((result) => {
//       if(result) {
//         res.status(200).json({ data: result});
//       } else {
//         res.status(404).json({ message : "Product Not Found"});
//       }
//     }).catch((error) => {
//       res.status(500).json({ message : "Something went wrong", error: error})
//     })
//   } catch (error) {
//     res.status(500).json({ message: "Internal Error", error: error });
//   }
// };

// const update = async (req, res) => {

//   const updateProducts = {
//     name: req.body.name,
//     price: req.body.price,
//     qty: req.body.qty,
//     note: req.body.note,
//     category: req.body.category
//   }

//   if (req.files && req.files.length > 0) {
//     const image = req.files.map((file) => file.path);
//     updateProducts.image = image;
//   }

//   const update =  await Product.findOneAndUpdate(
//     { _id: req.params.id},
//     {$set: updateProducts},
//     {new: true}
//   );

//   if (update) {
//     return res.status(200).json({ message: "Product Successfully Updated" , update});
//   } else {
//     return res.status(500).json({ message: "Internal Server Error" });
//   }

// }

// const deleteData = async (req, res) => {
//   const deleteData = await Product.findOneAndDelete(
//     {_id: req.params.id}
//   );

//   if (deleteData) {
//     return res.status(200).json({ message: "Product Successfully Deleted" , deleteData});
//   } else {
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }

module.exports = { createOrder };
