import { Component, OnInit, Input, ViewChild, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';
import { INSPECT_MAX_BYTES } from 'buffer';

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

  @ViewChild('descriptor', {static: false})
  descriptor: ElementRef;

  @Input()
  data: ProjectData;

  textHeight: number;
  screenWidth;
  screenHeight;
  visible;

  constructor() {
    this.visible = true;
  }

  ngOnInit() {
    if (!this.data.imgUrl) {
      this.data.imgUrl = ShowcaseItemComponent.DEFAULT_IMG;
    }
    setTimeout(() => {
      this.textHeight = this.descriptor.nativeElement.offsetHeight;
      this.getScreenSize();
    }, 10);
  }

  getImageHeight() {
    return Math.max(this.textHeight, 0.3 * this.screenWidth);
  }

  getBgUrl() {
    return `url(${this.data.imgUrl})`;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      this.refresh();
  }

  refresh() {
    this.visible = false;
    setInterval(() => { this.visible = true; }, 10);
  }
}
