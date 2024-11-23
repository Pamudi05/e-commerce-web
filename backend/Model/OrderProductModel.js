const mongoose= require('mongoose');

const OrderProductSchema = new mongoose.Schema({
    orderId:{type:String, required:true},
    productId:{type:String, required:true},
    totalQty:{type:String, required:true},
    returnCount:{type:String, required:true},
    image:{type:String, required:true},
    activeState:{type:Boolean, required:true},
    createdAt:{type:Date, required:true},
    lastUpdated:{type:Date, required:true},
});
module.exports = mongoose.model('orderProduct', OrderProductSchema);