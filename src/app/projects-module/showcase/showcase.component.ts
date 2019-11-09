import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  dummy = [
    {
      title: 'THIS website',
      url: 'http://naufik.net',
      description: 'Yes, this, very website',
    },
    {
      title: 'Shadow Blocks',
      url: 'https://github.com/naufik/swen20003-shadow-blocks',
      description: 'I am super proud of this one!'
    },
    {
      title: 'We\'ll Figure it Out',
      description: 'Gets elders from point A to point B.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
