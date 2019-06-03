import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  data: object;

  constructor() { }

  ngOnInit() {
  }

  public listenOutput(data: any): void {
    console.log('listen output');
    this.data = data;
  }

}
