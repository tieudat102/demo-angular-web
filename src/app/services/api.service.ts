import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url: string;
  httpOptions: Object;

  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:8000/api";

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
  }

  endpoint(url) {
    return this.base_url + "/" + url;
  }

  login(data, complete, error) {
    this.http.post(this.endpoint('login'), data).subscribe(res => {
      if (res) {
        complete(res);
      } else {
        error(res);
      }
    }, err => this.handleError(err));
  }

  handleError(err) {
    if (err.error.message) {
      alert(err.error.message);
    }
    else {
      alert("An occur error, please try again.")
    }
  }
}
