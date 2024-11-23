const mongoose= require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId:{type:String, required:true},
    discount:{type:String, required:true},
    paymentType:{type:String, enum : ['CASH, CREDIT'], default: 'CREDIT',required:true},
    subTotal:{type:Number, required:true},
    grandTotal:{type:Number, required:true},
    shipping:{type:String, required:true},
    Status:{type:String, enum: ['NEW, ACCEPTED, INPROGRESS, REJECTED, COMPLETED'], required:true},
    createdAt:{type:Date, required:true},
    lastUpdated:{type:Date, required:true},
});
module.exports = mongoose.model('order', OrderSchema);