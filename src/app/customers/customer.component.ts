import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = new Customer();
  customerForm :FormGroup;

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    // this.customerForm = new FormGroup({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    //   email : new FormControl(),
    //   sendCatalog : new FormControl(false),
    // })

    this.customerForm = this.fb.group({
      firstName:'',
      lastName :{value:'n/a', disabled:true},
      email:'',
      sendCatalog : true
    })

  }

  save(): void {
    console.log(this.customerForm)
   
  }

  populateTestData():void{
    this.customerForm.setValue({
      firstName :'Md.',
      lastName :'Mamun',
      email : 'mamun9398263@gmail.com',
      sendCatalog : false,

    })
  }
}
