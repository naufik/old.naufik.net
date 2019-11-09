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
      url: 'http://naufik.net',
    },
    {
      title: 'We\'ll Figure it Out'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
