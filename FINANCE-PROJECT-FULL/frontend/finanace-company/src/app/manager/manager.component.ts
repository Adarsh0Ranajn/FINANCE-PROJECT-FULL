import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(public aser:CustomerService) { }

  ngOnInit(): void {
    this.retrievestatusinfo1();
  }
  customers:Array<Customer>=[];
  retrievestatusinfo1(){
    this.aser.retrievestatusinfo("Manager").subscribe(result=>this.customers=result);
  }
  ace(cus:Customer){
    this.aser.updatestatustoaccept(cus).subscribe(result=>console.log(result),error=>console.log(error),()=>this.retrievestatusinfo1());
  }
  del(cus:Customer){
    this.aser.updatestatustoreject(cus).subscribe(result=>console.log(result),error=>console.log(error),()=>this.retrievestatusinfo1());
  }
}
