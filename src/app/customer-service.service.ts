import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http : HttpClient) { }
  public doRegistration(customer){
    return this.http.post("http://localHost:8080/register",customer,{responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localHost:8080/getCustomers");
  }
}
