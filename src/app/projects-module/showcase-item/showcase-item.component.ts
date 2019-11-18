import { Component, OnInit, Input } from '@angular/core';

interface ProjectData {
  title: string;
  description: string;
  imgUrl: string;
  tags: string;
  url: string;
}

@Component({
  selector: 'naufik-showcase-item',
  templateUrl: './showcase-item.component.html',
  styleUrls: ['./showcase-item.component.scss']
})
export class ShowcaseItemComponent implements OnInit {

  static DEFAULT_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7r96SXPe-5YyFpy2Li-naNjxVUijU-H8o_XgYpcAj503w4O6h';

  @Input()
  data: ProjectData;

  constructor() { }

  ngOnInit() {
    if (!this.data.imgUrl) {
      this.data.imgUrl = ShowcaseItemComponent.DEFAULT_IMG;
    }
  }
}
