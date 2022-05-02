import mongoose from 'mongoose';

mongoose.pluralize(null);   

let customerSchema = new mongoose.Schema({
    _id:Number,
    cname:String,
    cphnumber:Number,
    cgender:String,
    loan_id:Number,
    loan_type:String,
    loan_amt:Number,
    status:String
})


export let customerModel = mongoose.model("Customer_details",customerSchema );