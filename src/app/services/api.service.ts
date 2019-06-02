import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: string;
  httpOptions: Object;

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.base_url = "http://localhost:8000/api";

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }

  endpoint(url: string) {
    return this.base_url + "/" + url;
  }

  login(data: Object, complete: Function, error: Function) {
    this.http.post(this.endpoint('login'), data).subscribe(
      res => complete(res),
      err => {
        error(err);
        this.handleError(err);
      }
    );
  }

  handleError(err) {
    // this.spinner.hide();
    if (err.error.message) {
      this.toast.error(err.error.message, '', {
        // positionClass: "toast-top-center"
      });
    }
    else {
      this.toast.error("An occur error, please try again.");
    }
  }
}
