import { Customer, Customer1 } from '../model/customer';
import { customerModel } from '../model/customerModel';

export let findAllcustomer= ()=>{
    return customerModel.find({});
}
export let findAlluser= (username:string)=>{
    return customerModel.find({cname:username});
}

export let findAllstatus= (stat:String)=>{
    return customerModel.find({status:stat});
}

export let storeCustomer=(customer1:Customer1)=>{
    return customerModel.insertMany(customer1);
}

export let updateCustomer=(customer:Customer1)=>{
    return customerModel.updateOne({_id:customer._id},{$set:{cphnumber:customer.cphnumber,loan_amt:customer.loan_amt,status:customer.status,loan_type:customer.loan_type}});
}

export let deleteCustomer=(_Id:Number)=>{
    return customerModel.deleteOne({_id:_Id});
}