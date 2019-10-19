import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-splash',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.scss']
})
export class SplashPageComponent implements OnInit {

  myName = "Naufal Fikri";

  constructor() { }

  ngOnInit() {
  }



}
