import * as controller from '../controller/customerController';


import express from 'express';
let customerrouter = express.Router();

                       //Customer Router

customerrouter.get("/findAllwithstatus/:sta",controller.findAllwithstatus);
customerrouter.get("/findAllCustomer",controller.findAllcustomer);
customerrouter.get("/findAllloans/:cname2",controller.findAlluser);
customerrouter.post("/storeCustomerDetails",controller.storeCustomer);
customerrouter.delete("/deleteCustomerInfo/:_id",controller.deleteCustomer);
customerrouter.put("/updateCustomerDetails",controller.updateCustomer);
customerrouter.put("/updatestatus",controller.updatestatustomanger);
customerrouter.put("/updatestatus1",controller.updatestatustoreject);
customerrouter.put("/updatestatus2",controller.updatestatustoaccept);



                       //Loan Router

                       //Bank Router

export=customerrouter;
