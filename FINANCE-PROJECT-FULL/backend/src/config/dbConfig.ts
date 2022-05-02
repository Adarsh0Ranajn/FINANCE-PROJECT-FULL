import mongoose from "mongoose";

let url ="mongodb://127.0.0.1:27017/rl_meanbatch";

export let dbConnection = mongoose.connect(url).then(res=>console.log("db Connected")).catch(err=>console.log(err));