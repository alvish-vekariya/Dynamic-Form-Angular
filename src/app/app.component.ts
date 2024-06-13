import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Second-Task-Dynamic-Form';

  userData:any =[];

  ngOnInit(): void {
    if(localStorage.getItem('userformData')){
      this.userData = JSON.parse(localStorage.getItem('userformData') as string);
    }else{
      this.userData = [];
    }
  }

  removeAlert(msg : string){
    console.log(msg);
  }

  addAlert(msg : string){
    console.log(msg);
  }

  getFormData(value :any){
    // console.log(value);
    this.userData = [...this.userData, value];
    localStorage.setItem('userformData', JSON.stringify(this.userData));
  }
}
