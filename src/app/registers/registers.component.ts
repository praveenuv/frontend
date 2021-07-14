import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
 import { CustomerServiceService } from '../customer-service.service';
import { Customer } from 'src/Customer';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

   customer : Customer = new Customer("","");
  message : any;
  
  constructor(private service : CustomerServiceService) { }

  ngOnInit(): void {
  }
  public registerNow(){
  let response =  this.service.doRegistration(this.customer);
  response.subscribe(data => {
    this.message=data;

  })
  }
}
