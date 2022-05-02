import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { BankEmployeeComponent } from './bank-employee/bank-employee.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerApplyComponent } from './customer-apply/customer-apply.component';
import { ManagerComponent } from './manager/manager.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    BankEmployeeComponent,
    CustomerComponent,
    CustomerApplyComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
