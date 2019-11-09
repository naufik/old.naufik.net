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
    },
    {
      title: 'Shadow Blocks',
      url: 'https://github.com/naufik/swen20003-shadow-blocks'
    },
    {
      title: 'We\'ll Figure it Out',
      description: 'Really old assignment.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
