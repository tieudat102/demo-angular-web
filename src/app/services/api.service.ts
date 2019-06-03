import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: string;
  httpOptions: Object;

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private user: UserService
  ) {
    this.initHttpHeader();
    this.base_url = environment.base_url_api;
  }

  private initHttpHeader() {
    var headers = { 'Content-Type': 'application/json' };
    if (this.user.isLogin()) {
      headers['Authorization'] = "Bearer " + this.user.getAccessToken();
    }
    this.httpOptions = { headers: new HttpHeaders(headers) };
  }

  private endpoint(url: string, data: Object = null) {
    var endpoint = this.base_url + "/" + url;
    if (data) {
      var querystr = Object.keys(data).map(key => key + '=' + data[key]).join('&');
      endpoint += "?" + querystr;
    }
    return endpoint;
  }

  private handleError(err) {
    // this.spinner.hide();
    if (err.error.message && err.error.message instanceof String) {
      this.toast.error(err.error.message, '', {
        // positionClass: "toast-top-center"
      });
    }
    else {
      this.toast.error("An occur error, please try again.");
    }
  }

  login(data: Object, complete: Function, error: Function) {
    this.http.post(this.endpoint('login'), data, this.httpOptions).subscribe(
      res => complete(res),
      err => {
        error(err);
        this.handleError(err);
      }
    );
  }

  register(data: Object, complete: Function, error: Function) {
    this.http.post(this.endpoint('register'), data, this.httpOptions).subscribe(
      res => complete(res),
      err => {
        error(err);
        this.handleError(err);
      }
    );
  }

  getVideoByLocation(data: any, complete: Function, error: Function) {
    this.http.get(this.endpoint('video/location', data), this.httpOptions).subscribe(
      res => complete(res),
      err => {
        error(err);
        this.handleError(err);
      }
    );
  }
}
