import * as repository from '../repository/customerRepository';
import { Request,Response } from "express";
import { Customer, Customer1 } from '../model/customer';
export let findAllcustomer = async (req:Request,res:Response)=> {
            let result = await repository.findAllcustomer();  
            try{
                res.json(result);
             }catch(ex){
                res.json(ex);
             }
} 
export let findAlluser = async (req:Request,res:Response)=> {
   let resu=req.params.cname2;
   let result = await repository.findAlluser(resu);  
   try{
       res.json(result);
    }catch(ex){
       res.json(ex);
    }
} 
export let findAllwithstatus = async (req:Request,res:Response)=> {
   let stat:String=req.params.sta;
   let result = await repository.findAllstatus(stat);  
   try{
       res.json(result);
    }catch(ex){
       res.json(ex);
    }
} 

export let storeCustomer = async (req:Request,res:Response)=> {
   let customer:Customer= req.body;
   let customer1:Customer1={_id:customer._id,
      cname:customer.cname,
      cphnumber:customer.cphnumber,
      cgender:customer.cgender,
      loan_id:customer.loan_id,
      loan_type:customer.loan_type,
      loan_amt:customer.loan_amt,
      status:"null"
  }
   try{
     let result = await repository.storeCustomer(customer1);  
       res.json({"msg":"Record inserted successfully"});
    }catch(ex){
       
       res.json({"msg":"Record didn't inserted"});
    }
}
export let updateCustomer= async (req:Request,res:Response)=> {
   let customer:Customer = req.body;
   let customer1:Customer1={_id:customer._id,
      cname:customer.cname,
      cphnumber:customer.cphnumber,
      cgender:customer.cgender,
      loan_id:customer.loan_id,
      loan_type:customer.loan_type,
      loan_amt:customer.loan_amt,
      status:"null"
  }
   let result = await repository.updateCustomer(customer1);  
   try{
          if(result.modifiedCount>0){
          res.send("Record updated successfully");
          }else if(result.matchedCount>0){
          res.send("Record exist but didn't update");
          }else {
          res.send("Record didn't update");
          }
    }catch(ex){
       res.send(ex);
    }
}
export let deleteCustomer = async (req:Request,res:Response)=> {
   let cid:Number = eval(req.params._id);
   let result = await repository.deleteCustomer(cid);  
   try{
          if(result.deletedCount>0){
                 res.send("Record deleted successfully");
          }else {
                 res.send("Record not present");
          }
    }catch(ex){
       res.send(ex);
    }
}
export let updatestatustomanger= async (req:Request,res:Response)=> {
   let customer:Customer = req.body;
   let customer1:Customer1={_id:customer._id,
      cname:customer.cname,
      cphnumber:customer.cphnumber,
      cgender:customer.cgender,
      loan_id:customer.loan_id,
      loan_type:customer.loan_type,
      loan_amt:customer.loan_amt,
      status:"Manager"
  }
   let result = await repository.updateCustomer(customer1);  
   try{
          if(result.modifiedCount>0){
          res.send("Record updated successfully");
          }else if(result.matchedCount>0){
          res.send("Record exist but didn't update");
          }else {
          res.send("Record didn't update");
          }
    }catch(ex){
       res.send(ex);
    }
}
export let updatestatustoreject= async (req:Request,res:Response)=> {
   let customer:Customer = req.body;
   let customer1:Customer1={_id:customer._id,
      cname:customer.cname,
      cphnumber:customer.cphnumber,
      cgender:customer.cgender,
      loan_id:customer.loan_id,
      loan_type:customer.loan_type,
      loan_amt:customer.loan_amt,
      status:"reject"
  }
   let result = await repository.updateCustomer(customer1);  
   try{
          if(result.modifiedCount>0){
          res.send("Record updated successfully");
          }else if(result.matchedCount>0){
          res.send("Record exist but didn't update");
          }else {
          res.send("Record didn't update");
          }
    }catch(ex){
       res.send(ex);
    }
}
export let updatestatustoaccept= async (req:Request,res:Response)=> {
   let customer:Customer = req.body;
   let customer1:Customer1={_id:customer._id,
      cname:customer.cname,
      cphnumber:customer.cphnumber,
      cgender:customer.cgender,
      loan_id:customer.loan_id,
      loan_type:customer.loan_type,
      loan_amt:customer.loan_amt,
      status:"accept"
  }
   let result = await repository.updateCustomer(customer1);  
   try{
          if(result.modifiedCount>0){
          res.send("Record updated successfully");
          }else if(result.matchedCount>0){
          res.send("Record exist but didn't update");
          }else {
          res.send("Record didn't update");
          }
    }catch(ex){
       res.send(ex);
    }
}
