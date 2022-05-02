import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-apply',
  templateUrl: './customer-apply.component.html',
  styleUrls: ['./customer-apply.component.css']
})
export class CustomerApplyComponent implements OnInit {
  dataref = new FormGroup({
    _id:new FormControl(),
    cname:new FormControl(),
    cphnumber:new FormControl(),
    cgender:new FormControl(),
    loan_id:new FormControl(),
    loan_type:new FormControl(),
    loan_amt:new FormControl()
    
  }) 
  G1:boolean=true;
  G2:boolean=false;
  msg:any="";
  flag: boolean=true;
  _id:Number=0;
  name:String="";
  updateMsg: any;

  constructor(public aser:CustomerService) { }

  ngOnInit(): void {
    
  }
  customer(){
    let customer_value=this.dataref.value;
    this.aser.storeCustomerInfo(customer_value).subscribe(result=>this.msg=result);
    
  }
  retrieveAllCustomer():void{
    this.aser.retrieveCustomerInfo().subscribe(result=>this.msg=result,error=>console.log(error));
  }

}
