import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  f0:boolean=true;
  f1:boolean=false;
  f2:boolean=false;
  f3:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  bank_employee_login():void{
    this.f0=false;
    this.f2=true;


  }
  bank_manager_login(){
    this.f0=false;
    this.f1=false;
    this.f2=false;
    this.f3=true;


  }
  customer_login(){
    this.f0=false;
    this.f1=true;

  }

}
