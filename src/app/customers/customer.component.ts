import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl,FormBuilder , Validator} from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Customer } from './customer';

function ratingRange(c:AbstractControl):{[key:string]:boolean}{

  if (c.value !== null && (isNaN(c.value) || c.value<1 || c.value>5  )) {

    return {'range':true}
    
  }

  return null;

}


function ratingRangeWithParameter(min : number, max:number){
  return (c:AbstractControl):{[key:string]:boolean | null} => {

    if (c.value !== null && (isNaN(c.value) || c.value<min || c.value>max  )) {
  
      return {'range':true}
      
    }
  
    return null;
  
  }

}

function emailMatcher(c:AbstractControl):{[key:string]:boolean}{
  debugger;

  const emailControl = c.get('email');
  const confirmcontrol = c.get('confirmEmail');


  
  if (emailControl.pristine || confirmcontrol.pristine) {
    return null;
 }


  if (emailControl.value === confirmcontrol.value) {
     return null;
  }

  return {'match':true};
  

}


 

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
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName :['',[Validators.required, Validators.maxLength(50)]],
     

      emailGroup : this.fb.group({
        email:['',[Validators.required, Validators.email]],
        confirmEmail:['', Validators.required],
      }, {validator: emailMatcher}),

   
      phone:'',
      notification:'email',
      sendCatalog : true,
      rating :[null, ratingRangeWithParameter(1,10)]
    })

    this.customerForm.get('notification').valueChanges.subscribe(
      (value) => {this.setNotification(value)}
    )


    

    const emailControl = this.customerForm.get('emailGroup.email');```
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );

  }

  emailMessage : string;

  private validationMessages = {
      required :'Please enter your email address',
      email:'please enter your email address'
  };

  setMessage(c:AbstractControl) : void{
    this.emailMessage ='';

    if ((c.touched || c.dirty) && c.errors) {
        this.emailMessage = Object.keys(c.errors).map(
          key => this.validationMessages[key]).join( ' ');
    }
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

  setNotification(notifyVia : string):void{
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia ==='text') {
       phoneControl.setValidators(Validators.required);
    }
    else{
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();

  }
}
