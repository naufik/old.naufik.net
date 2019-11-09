import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'naufik-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }
  wwww = 'x';

  dos() {
    this.wwww += 'x';
  }

  ngOnInit() {
  }

}
