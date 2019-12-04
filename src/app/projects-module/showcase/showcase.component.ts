import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'naufik-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  content;

  constructor(private projects: ProjectsService) { }

  getDataToShow() {
    return this.projects.getData().filter(x => !x.hidden);
  }

  isDataLoaded(): boolean {
    return this.projects.loaded;
  }

  ngOnInit() {
  }

}
