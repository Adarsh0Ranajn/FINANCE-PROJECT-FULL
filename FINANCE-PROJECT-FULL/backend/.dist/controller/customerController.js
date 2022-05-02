"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatestatustoaccept = exports.updatestatustoreject = exports.updatestatustomanger = exports.deleteCustomer = exports.updateCustomer = exports.storeCustomer = exports.findAllwithstatus = exports.findAlluser = exports.findAllcustomer = void 0;
const repository = __importStar(require("../repository/customerRepository"));
let findAllcustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield repository.findAllcustomer();
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAllcustomer = findAllcustomer;
let findAlluser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resu = req.params.cname2;
    let result = yield repository.findAlluser(resu);
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAlluser = findAlluser;
let findAllwithstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let stat = req.params.sta;
    let result = yield repository.findAllstatus(stat);
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAllwithstatus = findAllwithstatus;
let storeCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = req.body;
    let customer1 = { _id: customer._id,
        cname: customer.cname,
        cphnumber: customer.cphnumber,
        cgender: customer.cgender,
        loan_id: customer.loan_id,
        loan_type: customer.loan_type,
        loan_amt: customer.loan_amt,
        status: "null"
    };
    try {
        let result = yield repository.storeCustomer(customer1);
        res.json({ "msg": "Record inserted successfully" });
    }
    catch (ex) {
        res.json({ "msg": "Record didn't inserted" });
    }
});
exports.storeCustomer = storeCustomer;
let updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = req.body;
    let customer1 = { _id: customer._id,
        cname: customer.cname,
        cphnumber: customer.cphnumber,
        cgender: customer.cgender,
        loan_id: customer.loan_id,
        loan_type: customer.loan_type,
        loan_amt: customer.loan_amt,
        status: "null"
    };
    let result = yield repository.updateCustomer(customer1);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updateCustomer = updateCustomer;
let deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cid = eval(req.params._id);
    let result = yield repository.deleteCustomer(cid);
    try {
        if (result.deletedCount > 0) {
            res.send("Record deleted successfully");
        }
        else {
            res.send("Record not present");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.deleteCustomer = deleteCustomer;
let updatestatustomanger = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = req.body;
    let customer1 = { _id: customer._id,
        cname: customer.cname,
        cphnumber: customer.cphnumber,
        cgender: customer.cgender,
        loan_id: customer.loan_id,
        loan_type: customer.loan_type,
        loan_amt: customer.loan_amt,
        status: "Manager"
    };
    let result = yield repository.updateCustomer(customer1);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updatestatustomanger = updatestatustomanger;
let updatestatustoreject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = req.body;
    let customer1 = { _id: customer._id,
        cname: customer.cname,
        cphnumber: customer.cphnumber,
        cgender: customer.cgender,
        loan_id: customer.loan_id,
        loan_type: customer.loan_type,
        loan_amt: customer.loan_amt,
        status: "reject"
    };
    let result = yield repository.updateCustomer(customer1);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updatestatustoreject = updatestatustoreject;
let updatestatustoaccept = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let customer = req.body;
    let customer1 = { _id: customer._id,
        cname: customer.cname,
        cphnumber: customer.cphnumber,
        cgender: customer.cgender,
        loan_id: customer.loan_id,
        loan_type: customer.loan_type,
        loan_amt: customer.loan_amt,
        status: "accept"
    };
    let result = yield repository.updateCustomer(customer1);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updatestatustoaccept = updatestatustoaccept;
