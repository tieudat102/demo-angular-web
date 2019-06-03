import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})

export class VideoViewComponent implements OnInit {
  @Input() public data: string;

  constructor() {
    setInterval(() => { console.log(this.data) }, 5000);
  }

  ngOnInit() {

  }

  openVideo(id: string) {
    var url = "https://www.youtube.com/watch?v=" + id;
    window.open(url, '_blank');
  }

}
