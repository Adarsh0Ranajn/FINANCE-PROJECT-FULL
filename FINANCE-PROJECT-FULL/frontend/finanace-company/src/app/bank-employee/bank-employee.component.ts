import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-bank-employee',
  templateUrl: './bank-employee.component.html',
  styleUrls: ['./bank-employee.component.css']
})
export class BankEmployeeComponent implements OnInit {

  bempref = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })

  bEMpRef = new FormGroup({
    _id:new FormControl(),
    cname:new FormControl(),
    cphnumber:new FormControl(),
    cgender:new FormControl(),
    loan_id:new FormControl(),
    loan_type:new FormControl(),
    loan_amt:new FormControl()
  })
  customers:Array<Customer>=[];
  msg:string="";
  k1:boolean=true;
  k2:boolean=false;
  k3:boolean=false;
  k4:boolean=false;
  k5:boolean=false;
  flag:boolean=false;
  id:number=0;
  storeMsg:string="";
  deleteMsg:string="";
  updateMsg:string="";
  _id:number=0;
  cname:string="";
  cphnumber:number=0;
  cgender:string="";
  loan_id:number=0;
  loan_type:string="";
  loan_amt:number=0;
  constructor(public aser:CustomerService) { }

  ngOnInit(): void {
  }
checkUser(){
  this.k1=false;
  this.k2=true;
}
bank_employee(){
  let customer_value=this.bEMpRef.value;
  console.log(customer_value);
  this.aser.storeCustomerInfo(customer_value).subscribe(result=>this.msg=result);
  this.bEMpRef.reset();
}
add_new_customer(){
  this.k2=false;
  this.k3=true;

}
delete_customer(id:number){
  let result = confirm("Do you want to delete the records?");
   if(result){
    this.aser.deleteCustomer(id).subscribe(result=>this.deleteMsg=result,error=>console.log(error),()=>this.retrieve_customer_info());
   
  }else {
     alert("Record didn't delete");
   }


}
send_customer(cus:Customer){
this.aser.updatestatustomanager(cus).subscribe(result=>console.log(result),error=>console.log(error),()=>this.retrieve_customer_info());
}
retrieve_customer_info(){
  this.aser.retrievestatusinfo("null").subscribe(result=>this.customers=result);
}
retrievestatusinfo1(){
  this.aser.retrievestatusinfo("Manager").subscribe(result=>this.customers=result);
}
view_application(){
  this.k2=false;
  this.k4=true;
this.retrieve_customer_info();
}
update_application(){
  this.k2=false;
  this.k5=true;
  this.retrieve_customer_info();

}

update_customer(cus:Customer){
  //console.log(product);
  this.flag=true;
  this._id=cus._id;
  this.cname=cus.cname;
  this.cphnumber=cus.cphnumber;
  this.cgender=cus.cgender;
  this.loan_id=cus.loan_id;
  this.loan_amt=cus.loan_amt;
  this.loan_type=cus.loan_type;
}

updateCustomerFromDb(){
  console.log("Running");
  let customer:Customer = {_id:this._id,cname:this.cname,cphnumber:this.cphnumber,cgender:this.cgender,loan_id:this.loan_id,loan_amt:this.loan_amt,loan_type:this.loan_type};
  this.aser.updateCustomerInfo(customer).subscribe(result=>{this.updateMsg=result;console.log(result)},error=>console.log(error),()=>this.retrieve_customer_info());
  this.flag=false;
}

}
