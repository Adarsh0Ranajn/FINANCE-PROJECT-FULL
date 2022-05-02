"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let customerSchema = new mongoose_1.default.Schema({
    _id: Number,
    cname: String,
    cphnumber: Number,
    cgender: String,
    loan_id: Number,
    loan_type: String,
    loan_amt: Number,
    status: String
});
exports.customerModel = mongoose_1.default.model("Customer_details", customerSchema);
