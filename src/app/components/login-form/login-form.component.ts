import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private api: ApiService
  ) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {

  }

  login() {
    var data = {
      username: this.username,
      password: this.password
    };
    this.api.login(data,
      res => { 
        this.router.navigate(['/video/location']);
      },
      err => { 
        // handle err
      }
    );
  }
}
