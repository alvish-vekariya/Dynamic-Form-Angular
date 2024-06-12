import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.scss']
})
export class UsermanagerComponent {
  constructor(public formBuilder : FormBuilder){}

  myForm  = this.formBuilder.group({
    username : [''],
    email : [''],
    // addresses : this.formBuilder.array([])
  });

  submitForm(){
    console.log(this.myForm.value)
    this.myForm.reset();
  }
}
