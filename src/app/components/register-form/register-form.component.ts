import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

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
      password: ['', Validators.required],
      full_name: ['', Validators.required],
    });

    this.validate_messages = {
      'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 6 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 255 characters long' },
      ],
      'password': [
        { type: 'required', message: "Password is required" }
      ],
      'full_name': [
        { type: 'required', message: "Full name is required" }
      ],
    };
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get full_name() { return this.form.get('full_name'); }

  register() {
    // this.spinner.show();
    this.is_loading = true;
    this.api.register(this.form.value,
      res => {
        // this.spinner.hide();
        this.is_loading = false;
        this.toast.success("Register Success!");
        this.router.navigate(['login']);
      },
      err => {
        console.log("REGISTER ERROR");
        this.is_loading = false
      }
    );
  }
}
