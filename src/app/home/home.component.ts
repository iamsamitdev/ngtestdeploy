import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl: string = "assets/images/cake.png"
  msgText: string = "Some text here"

  users: Object;

  constructor(public authService: AuthService, public data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  }

  firstClick() {
    console.log("This is my first click event");
  }

  checkLogin() {
    this.authService.login("admin", "1234");
  }

}
