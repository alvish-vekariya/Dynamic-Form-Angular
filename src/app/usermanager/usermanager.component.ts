import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.scss']
})
export class UsermanagerComponent {
  constructor(public formBuilder : FormBuilder){}
  @Output() sendData = new EventEmitter();
  @Input() ReceivedData :any;

  myForm  = this.formBuilder.group({
    userId : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    username : ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    email : ['', [Validators.required, Validators.email]],
    addresses : this.formBuilder.array([this.createAddress()])
  });

  get addressList(){
    return this.myForm.controls.addresses as FormArray;
  }

  createAddress(){
    return this.formBuilder.group({
      street: ['', Validators.required],
      city:['', Validators.required],
      state: ['', Validators.required],
      zip: ['',[ Validators.required, Validators.maxLength(6)]]
    })
  }

  addAddress(){
    this.addressList.push(this.createAddress());
  }

  removeAddress(i : any){
    this.addressList.removeAt(i);
  }

  submitForm(){
    console.log(this.myForm.controls.addresses.value);
    this.sendData.emit(this.myForm.value);
    this.addressList.clear();
    this.myForm.reset();
    this.addAddress();
  }
}
