import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@Angular/forms'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  orderForm : FormGroup;
  items : FormArray;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      customerName :'',
      email:'',
      items : this.formBuilder.array([this.createItem()])
    })
  }

  createItem():FormGroup{
    return this.formBuilder.group({
      name:'',
      description:'',
      price:''
    });
  }

  addItem():void{
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem())
  }

}
