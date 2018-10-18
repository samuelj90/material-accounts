import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'pms-full-screen-toogler',
  templateUrl: './full-screen-toogler.component.html',
  styleUrls: ['./full-screen-toogler.component.scss']
})
export class FullScreenTooglerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toggleFullscreen() {
    const elem = document.querySelector('body') as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }
}
