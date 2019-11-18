import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss']
})
export class SingleProjectPageComponent implements OnInit {

  title: string = 'Project T';

  constructor() { }

  ngOnInit() {
  }

}
