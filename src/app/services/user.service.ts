import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Object;
  access_token:string;

  constructor() { 
    this.user = null;
    this.access_token = "";

    if(localStorage.getItem("user") != "undefined"){
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }


  setUser(user){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }

  getFullName(){
    return this.user['full_name'];
  }

  getAccessToken(){
    if(this.user){
      return this.user['access_token'];
    }
  }

  isLogin() {
    return this.user == null ? false : true;
  }
}
