import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer, Customer1 } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custLogInRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  k1:boolean=true;
  k2:boolean=false;
  e1:boolean=false;
  e2:boolean=false;
  e8:boolean=false;
  z1:boolean=false;
  customers:Array<Customer1>=[];
  
  constructor(public aser:CustomerService) { }

  ngOnInit(): void {
  }
  checkUser(){
    let val=this.custLogInRef.value;
    if(val.user=="Admin" && val.pass=="123"){
    this.k1= false;
    this.k2=true;
    
    }

  }
  apply(){
    this.e1=true;
    this.k2=false;
  }
  status2(){
    this.k2=false;
    this.e8=true;
  }
  valuelo=new FormGroup({
    useridr:new FormControl()
  })
  status29(useride:HTMLInputElement){

    let val6=useride.value;
    console.log(val6);
    this.aser.retrieveloans(val6).subscribe(result=>this.customers=result);
  }

}
