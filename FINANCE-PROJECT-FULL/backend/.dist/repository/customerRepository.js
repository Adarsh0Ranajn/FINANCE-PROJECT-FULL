"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.storeCustomer = exports.findAllstatus = exports.findAlluser = exports.findAllcustomer = void 0;
const customerModel_1 = require("../model/customerModel");
let findAllcustomer = () => {
    return customerModel_1.customerModel.find({});
};
exports.findAllcustomer = findAllcustomer;
let findAlluser = (username) => {
    return customerModel_1.customerModel.find({ cname: username });
};
exports.findAlluser = findAlluser;
let findAllstatus = (stat) => {
    return customerModel_1.customerModel.find({ status: stat });
};
exports.findAllstatus = findAllstatus;
let storeCustomer = (customer1) => {
    return customerModel_1.customerModel.insertMany(customer1);
};
exports.storeCustomer = storeCustomer;
let updateCustomer = (customer) => {
    return customerModel_1.customerModel.updateOne({ _id: customer._id }, { $set: { cphnumber: customer.cphnumber, loan_amt: customer.loan_amt, status: customer.status, loan_type: customer.loan_type } });
};
exports.updateCustomer = updateCustomer;
let deleteCustomer = (_Id) => {
    return customerModel_1.customerModel.deleteOne({ _id: _Id });
};
exports.deleteCustomer = deleteCustomer;
