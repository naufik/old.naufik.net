import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-splash',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.scss']
})
export class SplashPageComponent implements OnInit {

  myName = "Naufal Fikri";
  displayCopyMessage = false;

  constructor() { }

  ngOnInit() {
  }

  copyEmail() {
    // Copies email to the user's clipboard.
    if (!this.displayCopyMessage) {
      const createCopy = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', 'naufal@naufik.net');
        e.preventDefault();
      };

      document.addEventListener('copy', createCopy);
      document.execCommand('copy');
      document.removeEventListener('copy', createCopy);
      this.displayCopyMessage = true;

      setTimeout(() => {
        this.displayCopyMessage = false;
      }, 1200);
    }
  }



}
