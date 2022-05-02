"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let url = "mongodb://127.0.0.1:27017/rl_meanbatch";
exports.dbConnection = mongoose_1.default.connect(url).then(res => console.log("db Connected")).catch(err => console.log(err));
