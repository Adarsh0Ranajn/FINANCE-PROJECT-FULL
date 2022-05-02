import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer, Customer1 } from './customer';
import { Observable } from 'rxjs';
// ng g s product ie ProductService 
@Injectable({
  providedIn: 'root'  // equal to register in provided attribute in app.module.ts
})
export class CustomerService {

  constructor(public http:HttpClient) { }   // DI for HttpClient
  //it return json or string. 
  storeCustomerInfo(customer:Customer):Observable<any>{
    return this.http.post("http://localhost:2022/api/storeCustomerDetails",customer);
  }
  // list of project or array object 
  retrieveCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:2022/api/findAllCustomer");
  }
  retrievestatusinfo(sta:string):Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:2022/api/findAllwithstatus/"+sta);
  }
  retrieveloans(sta:string):Observable<Customer1[]>{
    return this.http.get<Customer1[]>("http://localhost:2022/api/findAllloans/"+sta);
  }
  // string deleted or didn't delete
  deleteCustomer(cid:number):Observable<string>{
    return this.http.delete("http://localhost:2022/api/deleteCustomerInfo/"+cid,{responseType:'text'});
  }
  // string updated or didn't update 
  updateCustomerInfo(customer:Customer):Observable<string> {
    return this.http.put("http://localhost:2022/api/updateCustomerDetails",customer,{responseType:'text'});
  }
  updatestatustomanager(cus:Customer):Observable<string>{
    return this.http.put("http://localhost:2022/api/updatestatus",cus,{responseType:'text'});
  }
  updatestatustoreject(cus:Customer):Observable<string>{
    return this.http.put("http://localhost:2022/api/updatestatus1",cus,{responseType:'text'});
  }
  updatestatustoaccept(cus:Customer):Observable<string>{
    return this.http.put("http://localhost:2022/api/updatestatus2",cus,{responseType:'text'});
  }
}