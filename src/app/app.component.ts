import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayPageDecorations = false;

  constructor(private routing: Router) {
    routing.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.displayPageDecorations = e.url !== '/';
      }
    });
  }
}
