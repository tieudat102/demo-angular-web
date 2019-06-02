import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  form: FormGroup;
  validate_messages: Object;
  is_loading: boolean

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private user: UserService,
  ) {
    this.initFormLogin();
  }

  ngOnInit() {

  }

  initFormLogin() {
    this.form = this.fb.group({
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      distance: ['', Validators.required]
    });

    this.validate_messages = {
      'latitude': [
        { type: 'required', message: 'Latitude is required' },
      ],
      'longitude': [
        { type: 'required', message: "Longitude is required" }
      ],
      'distance': [
        { type: 'required', message: "Distance is required" }
      ]
    };
  }

  get latitude() { return this.form.get('latitude'); }
  get longitude() { return this.form.get('longitude'); }
  get distance() { return this.form.get('distance'); }

  search() {
    // this.spinner.show();
    // this.is_loading = true;
    // this.api.login(this.form.value,
    //   res => {
    //     // this.spinner.hide();
    //     this.is_loading = false;
    //     if (res.user) {
    //       this.user.setUser(res.user);
    //       this.toast.success("Login Success!");
    //       this.router.navigate(['video/location']);
    //     }
    //   },
    //   err => {
    //     console.log("LOGIN ERROR");
    //     this.is_loading = false
    //   }
    // );
  }
}
