import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  form: FormGroup;
  validate_messages: Object;
  is_loading: boolean

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService,
    private user: UserService,
    // private spinner: NgxSpinnerService,
    private toast: ToastrService,
  ) {
    this.initFormLogin();
  }

  ngOnInit() {

  }

  initFormLogin() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      password: ['', Validators.required]
    });

    this.validate_messages = {
      'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 6 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 255 characters long' },
      ],
      'password': [
        { type: 'required', message: "Password is required" }
      ]
    };
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  login() {
    // this.spinner.show();
    this.is_loading = true;
    this.api.login(this.form.value,
      res => {
        // this.spinner.hide();
        this.is_loading = false;
        if (res.user) {
          this.user.setUser(res.user);
          this.toast.success("Login Success!");
          this.router.navigate(['video/location']);
        }
      },
      err => {
        console.log("LOGIN ERROR");
        this.is_loading = false
      }
    );
  }
}
