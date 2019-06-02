import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  constructor(private user: UserService) { }

  ngOnInit() {
    // isLogin = this.user.isLogin();
  }

}
