import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  @Output() dataOutput = new EventEmitter<Object>();

  form: FormGroup;
  validate_messages: any;
  is_loading: boolean
  data: any;

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
      latitude: ['', [Validators.required, Validators.pattern("[0-9]+([\.][0-9]{0,14})?")]],
      longitude: ['', [Validators.required, Validators.pattern("[0-9]+([\.][0-9]{0,14})?")]],
      distance: ['5', Validators.required],
    });

    this.validate_messages = {
      'latitude': [
        { type: 'required', message: 'Latitude is required' },
        { type: 'pattern', message: 'Latitude is not correct format' }
      ],
      'longitude': [
        { type: 'required', message: "Longitude is required" },
        { type: 'pattern', message: 'Longitude is not correct format' }
      ],
      'distance': [
        { type: 'required', message: "Distance is required" }
      ]
    };
  }

  get latitude() { return this.form.get('latitude'); }
  get longitude() { return this.form.get('longitude'); }
  get distance() { return this.form.get('distance'); }

  search(options: Object = {}) {
    this.is_loading = true;
    this.dataOutput.emit(null);
    var params = this.form.value;
    if(options['pageToken']){
      params.pageToken = options['pageToken'];
    }
    this.api.getVideoByLocation(params,
      res => {
        this.is_loading = false;
        this.data = res;
        this.dataOutput.emit(res);
      },
      err => {
        // console.log("LOGIN ERROR");
        this.is_loading = false
      }
    );
  }

  next(pageToken: string){
    this.search({pageToken: this.data['nextPageToken']});
  }

  prev(pageToken: string){
    this.search({pageToken: this.data['prevPageToken']});
  }
}
