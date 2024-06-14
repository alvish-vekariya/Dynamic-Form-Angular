import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData !:any;
  constructor() {
    if(localStorage.getItem('userformData')){
      this.userData = JSON.parse(localStorage.getItem('userformData') as string);
    }else{
      this.userData = [];
    }
  }

  deleteUser(userId: number){
    this.userData.forEach((element: any, index: number) => {
      if(element.userId == userId){
        console.log(userId)
        this.userData.splice(index, 1);
        localStorage.setItem('userformData',JSON.stringify(this.userData));
      }      
    });
    // this.userData = JSON.parse(localStorage.getItem("userformData") as string)
  }

  getUserData(){
    return this.userData;
  }

  updateUser(user: any){
    console.log('alvish');
    this.userData.forEach((element: any, index: number) => {
      if(element.userId == user.userId){
        this.userData.splice(index, 1,user);
        localStorage.setItem('userformData',JSON.stringify(this.userData));
      }      
    });
  }
}
