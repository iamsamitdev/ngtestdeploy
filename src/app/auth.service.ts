import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    if (username == "admin" && password == "1234") {
      console.log("login success");
    } else {
      console.log("login fail");
    }
  }

}
